import React, { useState } from "react";
import axios from 'axios';
import "./Subscriber.css";


const Subscriber =  () => {
  const [email, setEmail] = useState("");
  const backendUrl = import.meta.env.VITE_BACKEND_URL

  const handleSubscribe = async(e) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter your email address.");
      return;
    }
  
    try {
      await axios.post(backendUrl+"/api/post-subscribe", { email });
      alert(`Subscribed with ${email}`);
      setEmail("");
    } catch (err) {
      console.error("Subscription failed:", err);
      alert("Failed to subscribe.");
    }
  };

  return (
    <nav className="subscriber-navbar">
      <div className="subscriber-left">
        <a href="#home">Home</a>
        <a href="#service">Service</a>
        <a href="#projects">Projects</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contact">Contact</a>
      </div>
  
      <form onSubmit={handleSubscribe} className="subscriber-right">
      <span className="subscribe-label">Subscribe Us</span>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Subscribe</button>
      </form>
    </nav>
  );
}

export default Subscriber;
