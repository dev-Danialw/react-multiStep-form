import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const SocialForm = () => {
  let navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    navigate("/review");
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <h2>How can we find you on socials?</h2>

        <input
          type="text"
          name="facebook"
          placeholder="What's your Facebook?"
          {...register("facebook", {
            required: true,
          })}
        />

        <p>{errors?.facebook && "Facebook id is required."}</p>

        <input
          type="text"
          name="instagram"
          placeholder="What's you Insta?"
          {...register("instagram", {
            required: true,
          })}
        />

        <p>{errors?.instagram && "Instagram id is required."}</p>

        <input type="submit" value="Next" />
      </form>
    </div>
  );
};

export default SocialForm;
