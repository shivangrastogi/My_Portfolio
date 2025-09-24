import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, query, where, getDocs, updateDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [approvedFeedbacks, setApprovedFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState("pending"); // pending or approved
  const navigate = useNavigate();

  // Fetch feedbacks from Firestore
  const fetchFeedbacks = async () => {
    setLoading(true);
    const feedbackRef = collection(db, "feedbacks");

    // Pending
    const pendingQuery = query(feedbackRef, where("approved", "==", false));
    const pendingSnapshot = await getDocs(pendingQuery);
    setFeedbacks(pendingSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));

    // Approved
    const approvedQuery = query(feedbackRef, where("approved", "==", true));
    const approvedSnapshot = await getDocs(approvedQuery);
    setApprovedFeedbacks(approvedSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));

    setLoading(false);
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const toggleApproval = async (id, currentStatus) => {
    await updateDoc(doc(db, "feedbacks", id), { approved: !currentStatus });
    fetchFeedbacks(); // refresh
  };

  const renderFeedbackCard = (f) => (
    <div
      key={f.id}
      className="bg-black-200 p-6 rounded-xl border border-purple-500 shadow-md"
    >
      <p className="text-white mb-2">"{f.testimonial}"</p>
      <p className="text-sm text-secondary">
        {f.name} - {f.designation} of {f.company}
      </p>
      <button
        className={`mt-3 px-4 py-2 rounded-lg font-bold text-white ${
          f.approved ? "bg-red-600 hover:bg-red-700" : "bg-purple-600 hover:bg-purple-700"
        }`}
        onClick={() => toggleApproval(f.id, f.approved)}
      >
        {f.approved ? "Revoke Approval" : "Approve"}
      </button>
    </div>
  );

  if (loading) return <p className="text-white text-center mt-20">Loading...</p>;

  return (
    <div className="min-h-screen bg-black p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-white">Admin Dashboard</h2>
        <div className="flex gap-4">
          <button
            onClick={() => navigate("/")}
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-bold"
          >
            Go to Home
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setTab("pending")}
          className={`px-4 py-2 rounded-lg font-bold ${
            tab === "pending" ? "bg-purple-600 text-white" : "bg-black-300 text-white"
          }`}
        >
          Pending ({feedbacks.length})
        </button>
        <button
          onClick={() => setTab("approved")}
          className={`px-4 py-2 rounded-lg font-bold ${
            tab === "approved" ? "bg-purple-600 text-white" : "bg-black-300 text-white"
          }`}
        >
          Approved ({approvedFeedbacks.length})
        </button>
      </div>

      {/* Feedback List */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {tab === "pending" && feedbacks.length === 0 && (
          <p className="text-white">No pending testimonials.</p>
        )}
        {tab === "pending" &&
          feedbacks.map((f) => renderFeedbackCard(f))}

        {tab === "approved" && approvedFeedbacks.length === 0 && (
          <p className="text-white">No approved testimonials yet.</p>
        )}
        {tab === "approved" &&
          approvedFeedbacks.map((f) => renderFeedbackCard(f))}
      </div>
    </div>
  );
};

export default AdminDashboard;
