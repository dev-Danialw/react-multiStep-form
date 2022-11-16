import React from "react";
import { useSignupForm } from "../../context/SignupFormContext";

const ReviewForm = () => {
  const { profile, social } = useSignupForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Submitted");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Review You Info</h2>

      <p>
        <strong>Name</strong>: {profile.name}
      </p>

      <p>
        <strong>Email</strong>: {profile.email}
      </p>

      <p>
        <strong>Facebook</strong>: {social.facebook}
      </p>

      <p>
        <strong>Instagram</strong>: {social.instagram}
      </p>

      <input type="submit" value="Submit All Info" />
    </form>
  );
};

export default ReviewForm;
