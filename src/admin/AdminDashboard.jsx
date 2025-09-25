import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import {
  collection,
  query,
  where,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const AdminDashboard = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [approvedFeedbacks, setApprovedFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [authChecking, setAuthChecking] = useState(true);
  const [tab, setTab] = useState("pending");
  const [editingId, setEditingId] = useState(null);
  const [editedText, setEditedText] = useState("");
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) navigate("/admin/login");
      else fetchFeedbacks();
      setAuthChecking(false);
    });
    return () => unsubscribe();
  }, []);

  const fetchFeedbacks = async () => {
    setLoading(true);
    const feedbackRef = collection(db, "feedbacks");

    const pendingSnapshot = await getDocs(
      query(feedbackRef, where("approved", "==", false))
    );
    setFeedbacks(pendingSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));

    const approvedSnapshot = await getDocs(
      query(feedbackRef, where("approved", "==", true))
    );
    setApprovedFeedbacks(
      approvedSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
    );

    setLoading(false);
  };

  const toggleApproval = async (id, currentStatus) => {
    await updateDoc(doc(db, "feedbacks", id), { approved: !currentStatus });
    fetchFeedbacks();
  };

  const deleteTestimonial = async (id) => {
    if (window.confirm("Are you sure you want to delete this testimonial?")) {
      await deleteDoc(doc(db, "feedbacks", id));
      fetchFeedbacks();
    }
  };

  const startEditing = (id, text) => {
    setEditingId(id);
    setEditedText(text);
  };

  const saveEdit = async (id) => {
    if (editedText.trim() === "") return;
    await updateDoc(doc(db, "feedbacks", id), { testimonial: editedText });
    setEditingId(null);
    setEditedText("");
    fetchFeedbacks();
  };

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/admin/login");
  };

  if (authChecking) return <p className="text-white text-center mt-20">Checking access...</p>;
  if (loading) return <p className="text-white text-center mt-20">Loading...</p>;

  const renderCard = (f) => (
    <div key={f.id} className="bg-black-200 p-6 rounded-xl border border-purple-500 shadow-md flex flex-col justify-between h-full">
      <div>
        {editingId === f.id ? (
          <textarea
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            className="w-full p-2 rounded-lg bg-black-300 text-white mb-2"
          />
        ) : (
          <p className="text-white mb-2">"{f.testimonial}"</p>
        )}
        <p className="text-sm text-secondary">
          {f.name} - {f.designation} of {f.company}
        </p>
      </div>

      <div className="mt-4 flex gap-3">
        <button
          className={`flex-1 px-4 py-2 rounded-lg font-bold text-white ${
            f.approved ? "bg-red-600 hover:bg-red-700" : "bg-purple-600 hover:bg-purple-700"
          }`}
          onClick={() => toggleApproval(f.id, f.approved)}
        >
          {f.approved ? "Revoke" : "Approve"}
        </button>

        {editingId === f.id ? (
          <button
            className="flex-1 px-4 py-2 rounded-lg font-bold bg-green-600 hover:bg-green-700 text-white"
            onClick={() => saveEdit(f.id)}
          >
            Save
          </button>
        ) : (
          <button
            className="flex-1 px-4 py-2 rounded-lg font-bold bg-blue-600 hover:bg-blue-700 text-white"
            onClick={() => startEditing(f.id, f.testimonial)}
          >
            Edit
          </button>
        )}

        <button
          className="flex-1 px-4 py-2 rounded-lg font-bold bg-gray-600 hover:bg-gray-700 text-white"
          onClick={() => deleteTestimonial(f.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-white">Admin Dashboard</h2>
        <div className="flex gap-4">
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-bold"
          >
            Logout
          </button>
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
        {tab === "pending" && (feedbacks.length === 0 ? <p className="text-white">No pending testimonials.</p> : feedbacks.map(renderCard))}
        {tab === "approved" && (approvedFeedbacks.length === 0 ? <p className="text-white">No approved testimonials yet.</p> : approvedFeedbacks.map(renderCard))}
      </div>
    </div>
  );
};

export default AdminDashboard;
