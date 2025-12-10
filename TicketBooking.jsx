import React, { useState } from "react";

function TicketBookingForm() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    gender: "",
    seats: "",
    agree: false,
    notes: "",
    ticketType: "",
    file: null
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : type === "file" ? files[0] : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSend = new FormData();
    for (let key in formData) {
      dataToSend.append(key, formData[key]);
    }

    await fetch("http://localhost:5000/register", {
      method: "POST",
      body: dataToSend
    });

    alert("Ticket Registered Successfully!");
  };

  return (
    <div className="container">
      <h1>🎫 Ticket Booking Form</h1>

      <form onSubmit={handleSubmit} className="form-box">

        <label>Full Name:</label>
        <input 
          type="text" 
          name="fullname" 
          required
          value={formData.fullname}
          onChange={handleChange}
        />

        <label>Email:</label>
        <input
          type="text"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
        />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          required
          value={formData.password}
          onChange={handleChange}
        />

        <label>Gender:</label>
        <div className="radio-group">
          <label><input type="radio" name="gender" value="Male" onChange={handleChange}/> Male</label>
          <label><input type="radio" name="gender" value="Female" onChange={handleChange}/> Female</label>
        </div>

        <label>Select Ticket Type:</label>
        <select name="ticketType" onChange={handleChange} required>
          <option value="">-- Select Type --</option>
          <option value="VIP">VIP</option>
          <option value="Premium">Premium</option>
          <option value="Standard">Standard</option>
        </select>

        <label>Number of Seats:</label>
        <input 
          type="number" 
          name="seats"
          onChange={handleChange}
          required 
        />

        <label>Additional Notes:</label>
        <textarea 
          rows="4"
          name="notes"
          onChange={handleChange}
        />

        <label>Upload ID Proof:</label>
        <input 
          type="file" 
          name="file"
          onChange={handleChange}
        />

        <label className="checkbox">
          <input
            type="checkbox"
            name="agree"
            onChange={handleChange}
          />
          I agree to terms & conditions
        </label>

        <button type="submit" className="btn-submit">Book Ticket</button>
        <button type="reset" className="btn-reset">Reset</button>

      </form>
    </div>
  );
}

export default TicketBookingForm;

