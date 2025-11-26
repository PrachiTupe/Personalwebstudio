import React, { useState } from "react";
import "./ContactForm.css";
import timeIcon from "../icons/time.svg";
import { sendContactToSheet } from "../services/contactService";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      name: e.target[0].value,
      email: e.target[1].value,
      phone: e.target[2].value,
      businessName: e.target[3].value,
      message: e.target[4].value,
    };

    await sendContactToSheet(formData);

    setLoading(false);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <section className="contact-form-section">
        <div className="confirmation-screen">
          <h1>Message Sent Successfully!</h1>
          <p>
            Thank you for reaching out. Our team will get back to you shortly.
          </p>
          <button className="submit-btn" onClick={handleReset}>
            Submit Another Message
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="contact-form-section">
      {/* Title and subtitle */}
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We’re here to help. Fill out the form below and our team will reach out.</p>
      </div>

      <div className="contact-card">
        {/* Response note */}
        <div className="response-note">
          <img src={timeIcon} alt="Time" className="time-icon" />
          <span>We usually respond in an hour</span>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-control">
            <input className="input input-alt" type="text" placeholder="Name" required />
            <span className="input-border input-border-alt"></span>
          </div>

          <div className="form-control">
            <input className="input input-alt" type="email" placeholder="Email" required />
            <span className="input-border input-border-alt"></span>
          </div>

          <div className="form-control">
            <input className="input input-alt" type="tel" placeholder="Phone" required />
            <span className="input-border input-border-alt"></span>
          </div>

          <div className="form-control">
            <input className="input input-alt" type="text" placeholder="Business Name (Optional)" />
            <span className="input-border input-border-alt"></span>
          </div>

          <div className="form-control">
            <textarea className="input input-alt message" placeholder="Message" required></textarea>
            <span className="input-border input-border-alt"></span>
          </div>

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
