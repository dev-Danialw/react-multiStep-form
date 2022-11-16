import React from "react";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Forms
import ProfileForm from "./ProfileForm";
import ReviewForm from "./Review";
import SocialForm from "./SocialForm";

// steps links
import StepLinks from "./StepLinks";

// context
import { SignupFormProvider } from "../../context/SignupFormContext";

const SignupForm = () => {
  const location = useLocation();
  return (
    <SignupFormProvider>
      <div className="signup-form">
        {/* Steps and links */}
        <StepLinks />

        {/* Forms */}
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route path="/" exact element={<ProfileForm />} />
            <Route path="/social" element={<SocialForm />} />
            <Route path="/review" element={<ReviewForm />} />
          </Routes>
        </AnimatePresence>
      </div>
    </SignupFormProvider>
  );
};

export default SignupForm;
