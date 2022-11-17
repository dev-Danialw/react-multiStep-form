import React from "react";
import { useNavigate } from "react-router-dom";
import { useSignupForm } from "../../context/SignupFormContext";
import Animator from "../Animator";

// pocketbase
import PocketBase from "pocketbase";
const client = new PocketBase("http://127.0.0.1:8090");

const ReviewForm = () => {
  let navigate = useNavigate();
  const { profile, social } = useSignupForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    create();

    navigate("/preview");
  };

  // PB Create
  const create = async () => {
    await client.records.create("data", {
      // profile
      name: profile.name,
      email: profile.email,

      // social
      fb: social.facebook,
      insta: social.instagram,
    });
  };

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
          <strong>Facebook</strong>: {social.facebook}
        </p>

        <p>
          <strong>Instagram</strong>: {social.instagram}
        </p>

        <input type="submit" value="Submit All Info" />
      </form>
    </Animator>
  );
};

export default ReviewForm;
