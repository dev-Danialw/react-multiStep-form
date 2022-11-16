import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const ProfileForm = () => {
  let navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    navigate("/social");
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <h2>About Yourself</h2>

        <input
          type="text"
          name="name"
          placeholder="What's you name?"
          {...register("name", {
            required: true,
          })}
        />

        <p>{errors?.name && "Name is required."}</p>

        <input
          type="email"
          name="email"
          placeholder="What's you email?"
          {...register("email", {
            required: true,
            pattern:
              /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          })}
        />

        {errors?.email && <p>A valid email is required.</p>}

        <input type="submit" value="Next" />
      </form>
    </div>
  );
};

export default ProfileForm;
