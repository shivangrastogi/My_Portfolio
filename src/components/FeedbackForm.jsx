import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";

const FeedbackForm = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const id = params.get("id");

  const [form, setForm] = useState({
    testimonial: "",
    name: "",
    designation: "",
    company: "",
  });
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      if (!id) {
        setLoading(false);
        return;
      }
      const refDoc = doc(db, "feedbacks", id);
      const snap = await getDoc(refDoc);
      if (snap.exists()) {
        const data = snap.data();
        setUserData(data);
        setForm({
          testimonial: data.testimonial || "",
          name: data.name || "",
          designation: data.designation || "",
          company: data.company || "",
        });
      } else {
        setUserData({});
      }
      setLoading(false);
    };
    fetchUser();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!id) return;

    try {
      await setDoc(
        doc(db, "feedbacks", id),
        {
          ...form,
          approved: false, // admin approval required
          updatedAt: serverTimestamp(),
          createdAt: userData?.createdAt || serverTimestamp(),
        },
        { merge: true }
      );

      // Redirect to thank you page instead of alert
      navigate("/thank-you");
    } catch (error) {
      console.error("Error submitting testimonial:", error);
    }
  };

  if (loading) return <p className="text-white">Loading...</p>;
  if (!id) return <p className="text-red-500">Invalid or missing link.</p>;

  return (
    <div className="min-h-screen flex justify-center items-center bg-black-100 text-white">
      <div className="bg-black-200 p-10 rounded-3xl w-full max-w-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">
          Hi {form.name || "there"}, please share your testimonial ✨
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full p-3 rounded-lg bg-black-300 border border-gray-600"
            placeholder="Your Name"
            required
          />
          <input
            type="text"
            value={form.designation}
            onChange={(e) =>
              setForm({ ...form, designation: e.target.value })
            }
            className="w-full p-3 rounded-lg bg-black-300 border border-gray-600"
            placeholder="Your Designation"
            required
          />
          <input
            type="text"
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
            className="w-full p-3 rounded-lg bg-black-300 border border-gray-600"
            placeholder="Company"
            required
          />
          <textarea
            value={form.testimonial}
            onChange={(e) => setForm({ ...form, testimonial: e.target.value })}
            className="w-full p-3 rounded-lg bg-black-300 border border-gray-600"
            placeholder="Write your testimonial here..."
            required
          />
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg transition"
          >
            {userData?.testimonial ? "Update Testimonial" : "Submit Testimonial"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
