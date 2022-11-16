import React from "react";
import { Routes, Route } from "react-router-dom";

// Forms
import ProfileForm from "./ProfileForm";
import ReviewForm from "./ReviewForm";
import SocialForm from "./SocialForm";

// steps links
import StepLinks from "./StepLinks";

const SignupForm = () => {
  return (
    <div className="signup-form">
      {/* Steps and links */}
      <StepLinks />
      {/* Forms */}
      <Routes>
        <Route path="/" exact element={<ProfileForm />} />
        <Route path="/social" element={<SocialForm />} />
        <Route path="/review" element={<ReviewForm />} />
      </Routes>
    </div>
  );
};

export default SignupForm;
