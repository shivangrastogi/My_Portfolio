import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const auth = getAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/admin/dashboard"); // ✅ if login succeeds, go to dashboard
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="relative min-h-screen flex justify-center items-center bg-black">
      <button
        onClick={() => navigate("/")}
        className="absolute top-6 right-6 py-2 px-4 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition"
      >
        Home
      </button>

      <form
        onSubmit={handleLogin}
        className="bg-black-200 p-10 rounded-xl w-full max-w-md"
      >
        <h2 className="text-white text-2xl mb-6 font-bold">Admin Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-3 rounded-lg bg-black-300 text-white"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-3 rounded-lg bg-black-300 text-white"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full py-3 bg-purple-600 rounded-lg text-white font-bold hover:bg-purple-700 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
