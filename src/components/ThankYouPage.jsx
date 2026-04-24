import React from "react";
import { Link } from "react-router-dom";

const ThankYouPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-black-100 text-white">
      <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
      <p className="text-white mb-6">
        Your testimonial has been submitted successfully and is pending approval.
      </p>
      <Link
        to="/"
        className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded-lg transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ThankYouPage;
