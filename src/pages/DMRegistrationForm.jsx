import React, { useState } from "react";
import {
  User,
  MapPin,
  BookOpen,
  Briefcase,
  Star,
  Users,
  FileText,
  Calendar,
} from "lucide-react";

import "./DMRegistrationForm.css";

export default function DMRegistrationForm() {
  const [formData, setFormData] = useState({});

  const handleChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Pill Select for single selection
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

  // Pill Multi-select for preferences
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form Submitted");
  };

  return (
    <div className="form-wrapper">
      <form className="form-box" onSubmit={handleSubmit}>
        {/* FORM TITLE */}
        <div className="form-header">
          <h1>Digital Marketing Course Registration</h1>
          <p>Register for our premium online, recorded, or hybrid digital marketing course. Fill all details to secure your spot.</p>
        </div>

        {/* SECTION 1: Personal Information */}
        <div className="section-card">
          <div className="section-header">
            <User size={22} />
            <h2 className="section-title">Personal Information</h2>
          </div>
          <label className="label">First Name</label>
          <input className="input" onChange={(e) => handleChange("firstName", e.target.value)} />

          <label className="label">Last Name</label>
          <input className="input" onChange={(e) => handleChange("lastName", e.target.value)} />

          <label className="label">Email Address</label>
          <input className="input" type="email" onChange={(e) => handleChange("email", e.target.value)} />

          <label className="label">Mobile Number</label>
          <input className="input" onChange={(e) => handleChange("phone", e.target.value)} />

          <label className="label">Date of Birth</label>
          <input type="date" className="input" onChange={(e) => handleChange("dob", e.target.value)} />

          <label className="label">Gender</label>
          <PillSelect name="gender" options={["Male", "Female", "Other", "Prefer not to say"]} />
        </div>

        {/* SECTION 2: Address & Location */}
        <div className="section-card">
          <div className="section-header">
            <MapPin size={22} />
            <h2 className="section-title">Address & Location</h2>
          </div>
          <label className="label">Country</label>
          <input className="input" onChange={(e) => handleChange("country", e.target.value)} />

          <label className="label">State / Region</label>
          <input className="input" onChange={(e) => handleChange("state", e.target.value)} />

          <label className="label">City</label>
          <input className="input" onChange={(e) => handleChange("city", e.target.value)} />

          <label className="label">Pin Code / Zip Code</label>
          <input className="input" onChange={(e) => handleChange("zip", e.target.value)} />
        </div>

        {/* SECTION 3: Course Selection */}
        <div className="section-card">
          <div className="section-header">
            <BookOpen size={22} />
            <h2 className="section-title">Course Selection</h2>
          </div>
          <label className="label">Course Mode</label>
          <PillSelect name="courseMode" options={["Online Live", "Pre-recorded", "Hybrid"]} />

          <label className="label">Preferred Batch / Start Date</label>
          <input type="date" className="input" onChange={(e) => handleChange("batchDate", e.target.value)} />

          <label className="label">Course Duration</label>
          <PillSelect name="courseDuration" options={["1 Month", "3 Months", "6 Months"]} />
        </div>

        {/* SECTION 4: Professional / Academic Details */}
        <div className="section-card">
          <div className="section-header">
            <Briefcase size={22} />
            <h2 className="section-title">Professional / Academic Details</h2>
          </div>
          <label className="label">Current Status</label>
          <PillSelect name="currentStatus" options={["Student", "Professional", "Entrepreneur", "Freelancer", "Other"]} />

          <label className="label">Organization / College Name</label>
          <input className="input" onChange={(e) => handleChange("organization", e.target.value)} />

          <label className="label">Designation / Role</label>
          <input className="input" onChange={(e) => handleChange("designation", e.target.value)} />

          <label className="label">Years of Experience</label>
          <input className="input" type="number" onChange={(e) => handleChange("experienceYears", e.target.value)} />

          <label className="label">LinkedIn Profile</label>
          <input className="input" onChange={(e) => handleChange("linkedin", e.target.value)} />
        </div>

        {/* SECTION 6: Learning Goals & Preferences */}
        <div className="section-card">
          <div className="section-header">
            <Star size={22} />
            <h2 className="section-title">Learning Goals & Preferences</h2>
          </div>
          <label className="label">Primary Goal for Taking Course</label>
          <PillMultiSelect
            name="learningGoals"
            options={["Career Change", "Skill Enhancement", "Freelancing", "Business Growth", "Certification", "Other"]}
          />

          <label className="label">Previous Digital Marketing Knowledge</label>
          <PillSelect name="knowledgeLevel" options={["Beginner", "Intermediate", "Advanced"]} />

          <label className="label">Preferred Learning Style</label>
          <PillMultiSelect
            name="learningStyle"
            options={["Videos", "Live Sessions", "Notes", "Assignments", "Community Support"]}
          />
        </div>

        {/* SECTION 7: Consent & Agreements (keep checkboxes) */}
        <div className="section-card">
          <div className="section-header">
            <FileText size={22} />
            <h2 className="section-title">Consent & Agreements</h2>
          </div>
          <label className="checkbox-pill">
            <input type="checkbox" onChange={(e) => handleChange("terms", e.target.checked)} />
            I have read and agree to the Terms & Conditions and Refund Policy.
          </label>

          <label className="checkbox-pill">
            <input type="checkbox" onChange={(e) => handleChange("marketingConsent", e.target.checked)} />
            I agree to receive updates, promotions, and offers via email/SMS.
          </label>

          <label className="checkbox-pill">
            <input type="checkbox" onChange={(e) => handleChange("certAcknowledgement", e.target.checked)} />
            I understand that I will receive a course completion certificate upon fulfilling course requirements.
          </label>
        </div>

        <button className="submit-btn">Submit Application</button>
      </form>
    </div>
  );
}
