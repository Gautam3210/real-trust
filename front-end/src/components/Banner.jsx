import React, { useState } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import "./Banner.css";

const Banner = () => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const {data} = await axios.post(backendUrl + "/api/post-userInfo", formData);
      console.log(data)
      alert("Consultation request submitted!");
      setFormData({ name: "", email: "", mobile: "", address: "" });
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("Failed to submit.");
    }
  };

  return (
    <div className="banner-container">
    <img src={assets.banner} alt="Banner" className="banner-image" />
    
    <div className="banner-overlay">
      <div className="banner-text">
        <h1 className="display-5 fw-bold">
          Consultation <br /> Design & Marketing
        </h1>
      </div>
  
      <div className="consultation-form">
        <h4 className="mb-3 text-center">
          Get a Free <br /> Consultation
        </h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="form-control white-input"
              placeholder="Name"
              required
            />
          </div>
          <div className="mb-3">
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control white-input"
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-3">
            <input
              name="mobile"
              type="tel"
              value={formData.mobile}
              onChange={handleChange}
              className="form-control white-input"
              placeholder="Mobile No"
              required
            />
          </div>
          <div className="mb-3">
            <input
              name="address"
              type="text"
              value={formData.address}
              onChange={handleChange}
              className="form-control white-input"
              placeholder="Address"
              required
            />
          </div>
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
  
  );
};

export default Banner;
