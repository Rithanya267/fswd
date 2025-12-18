import { useState } from "react";

export default function FeedbackInterface() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    rating: "",
    comments: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback submitted:", form);
    alert("Thank you for your feedback!");
    setForm({ name: "", email: "", rating: "", comments: "" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4 text-center">Feedback Form</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            required
          />

          <select
            name="rating"
            value={form.rating}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            required
          >
            <option value="">Rate Us</option>
            <option value="5">Excellent</option>
            <option value="4">Very Good</option>
            <option value="3">Good</option>
            <option value="2">Fair</option>
            <option value="1">Poor</option>
          </select>

          <textarea
            name="comments"
            placeholder="Your Comments"
            value={form.comments}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            rows="4"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700"
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
}
