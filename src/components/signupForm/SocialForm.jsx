import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useSignupForm } from "../../context/SignupFormContext";
import Animator from "../Animator";

const SocialForm = () => {
  const { social, setSocial } = useSignupForm();
  let navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setSocial(data);
    navigate("/review");
  };

  return (
    <Animator>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <h2>How can we find you on socials?</h2>

        <input
          type="text"
          name="facebook"
          defaultValue={social.facebook}
          placeholder="What's your Facebook?"
          {...register("facebook", {
            required: true,
          })}
        />

        <p>{errors?.facebook && "Facebook id is required."}</p>

        <input
          type="text"
          name="instagram"
          defaultValue={social.instagram}
          placeholder="What's you Insta?"
          {...register("instagram", {
            required: true,
          })}
        />

        <p>{errors?.instagram && "Instagram id is required."}</p>

        <input type="submit" value="Next" />
      </form>
    </Animator>
  );
};

export default SocialForm;
