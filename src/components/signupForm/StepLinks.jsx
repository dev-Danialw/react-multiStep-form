import React from "react";
import { NavLink } from "react-router-dom";
import { useSignupForm } from "../../context/SignupFormContext";

export const isEmpty = (obj) => {
  return Object.keys(obj).length === 0;
};

const StepLinks = () => {
  const { profile } = useSignupForm();

  const isProfileDone = !isEmpty(profile);

  return (
    <div className="step-links">
      <NavLink to="/" exact="true">
        {isProfileDone ? "✅" : "🔘"} Profile <span />
      </NavLink>

      {isProfileDone ? (
        <NavLink to="/review">
          🔘 Review <span />
        </NavLink>
      ) : (
        <a>
          Review <span />
        </a>
      )}

      <NavLink to="preview">
        🔘 Preview <span />
      </NavLink>
    </div>
  );
};

export default StepLinks;
