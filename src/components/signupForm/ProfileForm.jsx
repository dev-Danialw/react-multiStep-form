import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useSignupForm } from "../../context/SignupFormContext";
import Animator from "../Animator";

const ProfileForm = () => {
  const { profile, setProfile } = useSignupForm();
  let navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setProfile(data);
    navigate("/review");
  };

  return (
    <Animator>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        {/* profile */}

        <h2>About Yourself</h2>

        <input
          type="text"
          name="name"
          defaultValue={profile.name}
          placeholder="What's you name?"
          {...register("name", {
            required: true,
          })}
        />

        <p>{errors?.name && "Name is required."}</p>

        <input
          type="email"
          name="email"
          defaultValue={profile.email}
          placeholder="What's you email?"
          {...register("email", {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          })}
        />

        <p>{errors?.email && "A valid email is required."}</p>

        {/* socials */}

        <input
          type="text"
          name="facebook"
          defaultValue={profile.facebook}
          placeholder="What's your Facebook?"
          {...register("facebook", {
            required: true,
          })}
        />

        <p>{errors?.facebook && "Facebook id is required."}</p>

        <input
          type="text"
          name="instagram"
          defaultValue={profile.instagram}
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

export default ProfileForm;
