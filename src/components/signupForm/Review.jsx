import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSignupForm } from "../../context/SignupFormContext";
import { useFirestore } from "../../hooks/useFirestore";
import Animator from "../Animator";

const ReviewForm = () => {
  let navigate = useNavigate();
  const { profile, setProfile } = useSignupForm();

  const { addDocument, response } = useFirestore("demo");

  // add doc
  const handleSubmit = (e) => {
    e.preventDefault();
    addDocument({
      ...profile,
    });
    navigate("/preview");
  };

  // reset the form
  useEffect(() => {
    if (response.sccess) {
      setProfile({
        name: "",
        email: "",
        phone: "",
        imei: "",
      });
    }
  }, [response.sccess]);

  return (
    <Animator>
      <form onSubmit={handleSubmit}>
        <h2>Review You Info</h2>

        <p>
          <strong>Name</strong>: {profile.name}
        </p>

        <p>
          <strong>Email</strong>: {profile.email}
        </p>

        <p>
          <strong>Facebook</strong>: {profile.facebook}
        </p>

        <p>
          <strong>Instagram</strong>: {profile.instagram}
        </p>

        <input type="submit" value="Submit All Info" />
      </form>
    </Animator>
  );
};

export default ReviewForm;
