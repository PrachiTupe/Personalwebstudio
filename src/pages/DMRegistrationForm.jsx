import React, { useState } from "react";
import {
  User,
  MapPin,
  BookOpen,
  Briefcase,
  Star,
  FileText,
  CheckCircle,
} from "lucide-react";

import "./DMRegistrationForm.css";
import bannerImg from "../imgs/banner.jpg"; 
import logoImg from "../imgs/logo.png";

export default function DMRegistrationForm() {
  const [formData, setFormData] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const PillSelect = ({ name, options }) => (
    <div className="pill-container">
      {options.map((opt) => (
        <div
          key={opt}
          className={`pill ${formData[name] === opt ? "pill-selected" : ""}`}
          onClick={() => handleChange(name, opt)}
        >
          {opt}
        </div>
      ))}
    </div>
  );

  const PillMultiSelect = ({ name, options }) => (
    <div className="pill-container">
      {options.map((opt) => (
        <div
          key={opt}
          className={`pill ${formData[name]?.includes(opt) ? "pill-selected" : ""}`}
          onClick={() => {
            const prev = formData[name] || [];
            if (prev.includes(opt)) {
              handleChange(name, prev.filter((x) => x !== opt));
            } else {
              handleChange(name, [...prev, opt]);
            }
          }}
        >
          {opt}
        </div>
      ))}
    </div>
  );

  const validateForm = () => {
    const mandatoryFields = [
      "firstName", "lastName", "email", "phone", "dob", "gender",
      "country", "state", "city", "zip",
      "courseMode", "batchDate", "courseDuration",
      "currentStatus", "organization", "designation", "experienceYears",
      "learningGoals", "knowledgeLevel", "learningStyle",
      "terms", "certAcknowledgement"
    ];

    let newErrors = {};
    mandatoryFields.forEach((field) => {
      if (!formData[field] || (Array.isArray(formData[field]) && formData[field].length === 0)) {
        newErrors[field] = true;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ✅ FIXED SUBMISSION FUNCTION
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      alert("Please fill all required fields!");
      return;
    }

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbw_CbjuhdXJtljzJKH1lcxCP6EoHzJKzio6Dc1gCv-UEBwWJnbzUlznbE1uH17DG-U/exec",
        {
          method: "POST",
          mode: "no-cors", // REQUIRED for Google Apps Script
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      setSubmitted(true);
    } catch (err) {
      alert("Error submitting form. Please try again.");
      console.error(err);
    }
  };

  if (submitted) {
    return (
      
      
    <div className="dm-success-wrapper">
      
  <div className="dm-success-card">
    
    <CheckCircle className="dm-success-icon" size={70} />
    <h1 className="dm-success-title">Form Submitted Successfully!</h1>
    <p className="dm-success-text">
      Thank you for registering. We will reach out to you soon with course details and payment instructions.
    </p>
  </div>
</div>

    );
  }

  return (
    <div className="form-wrapper">
      <form className="form-box" onSubmit={handleSubmit}>

        <div className="dm-header-wrapper">
  {/* Logo at the top */}
  <img src={logoImg} alt="Logo" className="dm-logo" />

  {/* Card section */}
  <div className="dm-header-card">
    <img src={bannerImg} alt="Banner" className="dm-banner" />
    <div className="dm-header-text">
      <h1>Registration Form</h1>
      <p>Complete the registration form below to get started.</p>
    </div>
    
  </div>
</div>







        {/* SECTION 1 */}
        <div className="section-card">
          <div className="section-header">
            <User size={22} />
            <h2 className="section-title">Personal Information</h2>
          </div>

          <label className="label">First Name *</label>
          <input className="input" onChange={(e) => handleChange("firstName", e.target.value)} />

          <label className="label">Last Name *</label>
          <input className="input" onChange={(e) => handleChange("lastName", e.target.value)} />

          <label className="label">Email Address *</label>
          <input className="input" type="email" onChange={(e) => handleChange("email", e.target.value)} />

          <label className="label">Mobile Number *</label>
          <input className="input" onChange={(e) => handleChange("phone", e.target.value)} />

          <label className="label">Date of Birth *</label>
          <input type="date" className="input" onChange={(e) => handleChange("dob", e.target.value)} />

          <label className="label">Gender *</label>
          <PillSelect name="gender" options={["Male", "Female", "Other", "Prefer not to say"]} />
        </div>

        {/* SECTION 2 */}
        <div className="section-card">
          <div className="section-header">
            <MapPin size={22} />
            <h2 className="section-title">Address & Location</h2>
          </div>

          <label className="label">Country *</label>
          <input className="input" onChange={(e) => handleChange("country", e.target.value)} />

          <label className="label">State *</label>
          <input className="input" onChange={(e) => handleChange("state", e.target.value)} />

          <label className="label">City *</label>
          <input className="input" onChange={(e) => handleChange("city", e.target.value)} />

          <label className="label">Pin Code *</label>
          <input className="input" onChange={(e) => handleChange("zip", e.target.value)} />
        </div>

        {/* SECTION 3 */}
        <div className="section-card">
          <div className="section-header">
            <BookOpen size={22} />
            <h2 className="section-title">Course Selection</h2>
          </div>

          <label className="label">Course Mode *</label>
          <PillSelect name="courseMode" options={["Online Live", "Pre-recorded", "Hybrid"]} />

          <label className="label">Start Date *</label>
          <input type="date" className="input" onChange={(e) => handleChange("batchDate", e.target.value)} />

          <label className="label">Course Duration *</label>
          <PillSelect name="courseDuration" options={["1 Month", "3 Months", "6 Months"]} />
        </div>

        {/* SECTION 4 */}
        <div className="section-card">
          <div className="section-header">
            <Briefcase size={22} />
            <h2 className="section-title">Professional / Academic Details</h2>
          </div>

          <label className="label">Current Status *</label>
          <PillSelect name="currentStatus" options={["Student", "Professional", "Entrepreneur", "Freelancer", "Other"]} />

          <label className="label">Organization / College *</label>
          <input className="input" onChange={(e) => handleChange("organization", e.target.value)} />

          <label className="label">Designation *</label>
          <input className="input" onChange={(e) => handleChange("designation", e.target.value)} />

          <label className="label">Experience (Years) *</label>
          <input className="input" type="number" onChange={(e) => handleChange("experienceYears", e.target.value)} />

          <label className="label">LinkedIn (Optional)</label>
          <input className="input" onChange={(e) => handleChange("linkedin", e.target.value)} />
        </div>

        {/* SECTION 6 */}
        <div className="section-card">
          <div className="section-header">
            <Star size={22} />
            <h2 className="section-title">Learning Goals & Preferences</h2>
          </div>

          <label className="label">Your Goals *</label>
          <PillMultiSelect
            name="learningGoals"
            options={["Career Change", "Skill Enhancement", "Freelancing", "Business Growth", "Certification", "Other"]}
          />

          <label className="label">Knowledge Level *</label>
          <PillSelect name="knowledgeLevel" options={["Beginner", "Intermediate", "Advanced"]} />

          <label className="label">Learning Style *</label>
          <PillMultiSelect
            name="learningStyle"
            options={["Videos", "Live Sessions", "Notes", "Assignments", "Community Support"]}
          />
        </div>

        {/* SECTION 7 */}
        <div className="section-card">
          <div className="section-header">
            <FileText size={22} />
            <h2 className="section-title">Consent & Agreements *</h2>
          </div>

          <label className="checkbox-pill">
            <input type="checkbox" onChange={(e) => handleChange("terms", e.target.checked)} />
            I agree to the Terms & Conditions.
          </label>

          <label className="checkbox-pill">
            <input type="checkbox" onChange={(e) => handleChange("marketingConsent", e.target.checked)} />
            I agree to receive updates & promotions.
          </label>

          <label className="checkbox-pill">
            <input type="checkbox" onChange={(e) => handleChange("certAcknowledgement", e.target.checked)} />
            I understand the certificate criteria.
          </label>
        </div>

        <button className="submit-btn">Submit Application</button>
      </form>
    </div>
  );
}
