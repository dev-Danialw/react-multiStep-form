import React from "react";
import { NavLink } from "react-router-dom";
import { useSignupForm } from "../../context/SignupFormContext";

export const isEmpty = (obj) => {
  return Object.keys(obj).length === 0;
};

const StepLinks = () => {
  const { profile, social } = useSignupForm();

  const isProfileDone = !isEmpty(profile);
  const isSocialDone = !isEmpty(social);

  return (
    <div className="step-links">
      <NavLink to="/" exact="true">
        {isProfileDone ? "✅" : "🔘"} Profile <span />
      </NavLink>

      {isProfileDone ? (
        <NavLink to="/review">
          {isSocialDone ? "✅" : "🔘"} Review <span />
        </NavLink>
      ) : (
        <a>
          Review <span />
        </a>
      )}

      <NavLink to="preview">
        {isProfileDone ? "🔘" : ""} Preview <span />
      </NavLink>
    </div>
  );
};

export default StepLinks;
