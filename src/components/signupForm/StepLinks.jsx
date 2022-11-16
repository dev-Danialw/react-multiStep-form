import React from "react";
import { NavLink } from "react-router-dom";

const StepLinks = () => {
  return (
    <div className="step-links">
      <NavLink to="/" exact="true">
        Profile
      </NavLink>

      <NavLink to="/social">Social</NavLink>

      <NavLink to="/review">Review</NavLink>
    </div>
  );
};

export default StepLinks;
