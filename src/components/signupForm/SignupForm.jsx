import React from "react";
import { Routes, Route } from "react-router-dom";

// Forms
import ProfileForm from "./ProfileForm";
import ReviewForm from "./Review";
import SocialForm from "./SocialForm";

// steps links
import StepLinks from "./StepLinks";

// context
import { SignupFormProvider } from "../../context/SignupFormContext";

const SignupForm = () => {
  return (
    <SignupFormProvider>
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
    </SignupFormProvider>
  );
};

export default SignupForm;
