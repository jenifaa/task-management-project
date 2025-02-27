import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import GoogleLogin from "../Hooks/GoogleLogin";
import { FaArrowLeft, FaArrowRightLong } from "react-icons/fa6";
import useAuth from "../Hooks/useAuth";

type FormData = {
  name: string;
  email: string;
  photoURL: string;
  password: string;
};

export default function Register() {
  const { createNewUser } = useAuth();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    createNewUser(data.email, data.password).then((result) => {
      console.log(result);
      navigate("/");
    });
  };

  return (
    <div className="min-h-screen bg-purple-100 flex justify-center items-center">
      <div className="max-w-md bg-white p-8 rounded-lg shadow-md w-full">
        <h2 className="text-center text-3xl font-bold text-purple-900 mb-6">
          Sign Up
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {step === 1 && (
            <>
              <div className="form-control mb-4">
                <label className="font-semibold">Name*</label>
                <input
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  className="text-black border-b-2 rounded-md py-2 px-3 w-full"
                  placeholder="Your Name"
                />
                {errors.name && (
                  <span className="text-red-600">{errors.name.message}</span>
                )}
              </div>
              <div className="form-control mb-4">
                <label className="font-semibold">Email*</label>
                <input
                  type="email"
                  {...register("email", { required: "Email is required" })}
                  className="text-black border-b-2 rounded-md py-2 px-3 w-full"
                  placeholder="Your Email"
                />
                {errors.email && (
                  <span className="text-red-600">{errors.email.message}</span>
                )}
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="text-sm font-bold text-purple-900 flex items-center gap-2"
                  onClick={() => setStep(2)}
                >
                  Continue <FaArrowRightLong />
                </button>
              </div>
            </>
          )}
          {step === 2 && (
            <>
              <div className="form-control mb-4">
                <label className="font-semibold">Photo URL*</label>
                <input
                  type="url"
                  {...register("photoURL", {
                    required: "Photo URL is required",
                  })}
                  className="text-black border-b-2 rounded-md py-2 px-3 w-full"
                  placeholder="Your Photo URL"
                />
                {errors.photoURL && (
                  <span className="text-red-600">
                    {errors.photoURL.message}
                  </span>
                )}
              </div>
              <div className="form-control mb-4">
                <label className="font-semibold">Password*</label>
                <input
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                    maxLength: {
                      value: 20,
                      message: "Password must be less than 20 characters",
                    },
                    pattern: {
                      value:
                        /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/,
                      message:
                        "Password must include uppercase, lowercase, digit, and special character",
                    },
                  })}
                  className="text-black border-b-2 rounded-md py-2 px-3 w-full"
                  placeholder="Your Password"
                />
                {errors.password && (
                  <span className="text-red-600">
                    {errors.password.message}
                  </span>
                )}
              </div>
              <div className="flex justify-between items-center">
                <button
                  type="button"
                  className="text-sm font-bold text-purple-900 flex items-center gap-2"
                  onClick={() => setStep(1)}
                >
                  <FaArrowLeft /> Back
                </button>
                <input
                  type="submit"
                  className="py-2 px-4 bg-purple-900 text-white rounded-lg font-bold cursor-pointer"
                  value="Sign Up"
                />
              </div>
            </>
          )}
          <p className="text-center text-purple-900 mt-4">
            Already have an account? -
            <Link className="font-bold" to="/login">
              Sign In
            </Link>
          </p>
        </form>
        <div className="text-center text-purple-900 mt-4">
          <p>Or</p>
          <GoogleLogin />
        </div>
      </div>
    </div>
  );
}
