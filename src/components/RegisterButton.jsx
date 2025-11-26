import React, { useState } from "react";
import "./RegisterButton.css";
import whatsappIcon from "../imgs/whatsapp.svg";
import callIcon from "../imgs/phone.svg";
import blueTickIcon from "../icons/bluetick.svg"; 

export default function RegisterButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSuccessText, setShowSuccessText] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsOpen(false); // close the modal
    setShowSuccessText(true); // show success text
  };

  return (
    <>
      {/* Show success message above button */}
      {/* Success Pill Notification */}
{showSuccessText && (
  <div className="success-pill-wrapper">
    <div className="success-pill">
      <img src={blueTickIcon} alt="Success" className="pill-icon" />
      You have successfully registered for the Free Guidance Session!
    </div>
  </div>
)}


      {/* Main page button */}
      <button
        type="button"
        className="register-btn"
        onClick={() => setIsOpen(true)}
      >
        Register Now
        <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>

      {/* Tooltip */}
      <div className="tooltip-wrapper">
        <div className="floating-tooltip">
          It's Free for Today!
          <span className="tooltip-arrow"></span>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="reg-overlay">
          <div className="reg-modal">
            <button className="close-btn" onClick={() => setIsOpen(false)}>
              ✕
            </button>

            <h2 className="reg-title">Register Now</h2>
            <p className="reg-sub">
              Fill your details to register for a free guidance session
            </p>

            <form className="reg-form" onSubmit={handleSubmit}>
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="input"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="email"
                  placeholder="Email"
                  className="input"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="input"
                  required
                />
              </div>

              <button type="submit" className="submit-btn">
                Register
              </button>
            </form>

            <div className="or-register">Or you can register via</div>

            <div className="option-buttons">
              <a
                href="https://wa.me/yourwhatsappnumber"
                target="_blank"
                rel="noopener noreferrer"
                className="dark-whatsapp-btn"
              >
                <img src={whatsappIcon} alt="WhatsApp" className="btn-icon" />
                WhatsApp
              </a>
              <a href="tel:+911234567890" className="dark-call-btn">
                <img src={callIcon} alt="Call" className="btn-icon" />
                Call
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
