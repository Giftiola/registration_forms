import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import regex from "../../utils/regex";

import notRed from "../../assets/red.png";
import checkGreen from "../../assets/green.png";

import logo from "../../assets/logo.png"
import imageLeft from "../../assets/left-financial.png"
import imageRight from "../../assets/right-financial.png"

const schema = yup.object({
  name: yup
    .string()
    .required("The name field is required.")
    .min(3, "The name field must contain at least 3 characters."),
  email: yup
    .string()
    .required("Email field is required.")
    .email("Please enter a valid e-mail."),
  password: yup
    .string()
    .required("Password field is required.")
    .min(8, "Enter a password of at least 8 characters.")
    .matches(regex.number, "Enter at least 1 number.")
    .matches(regex.lowerCase, "Enter at least 1 lowercase character.")
    .matches(regex.upperCase, "Enter at least 1 uppercase character.")
    .matches(regex.specialCharacter, "Enter at least 1 special character."),
  confirmPassword: yup
    .string()
    .required("The confirm password field is required.")
    .oneOf([yup.ref("password")], "Passwords are not the same."),
});

export default function SignUp() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleSubmitForm = (data) => {
    navigate("/registered");
    console.log(data);
  };

  const onHandleSubmit = () => {
    console.log("Click");
  };

  return (
    <div>
    <div className="flex justify-center lg:justify-start md:justify-center sm:justify-center">
      <img src={logo} alt="logo" className="mt-10 rounded-3xl mx-auto lg:ml-10 w-24 sm:mb-10 md:mb-10" />
  </div>
  <div className="lg:absolute bottom-20 left-10 flex justify-center md:justify-center sm:justify-center">
      <img src={imageLeft} alt="left-financial" className="rounded-full w-48 sm:w-72 md:w-80 lg:w-100 xl:w-128" />
  </div>
  <div className="flex flex-col lg:flex-row justify-center items-center  mb-20 mt-10 ">
      <form
        onSubmit={handleSubmit(handleSubmitForm)}
        className="flex flex-col items-center relative z-10 outline-none w-full max-w-md rounded-3xl p-6 shadow-xl bg-gradient-to-r from-[#c8cfd8] to-[#e7d5c7] backdrop-blur-lg">
        <p className="font-semibold text-center text-[#1071ae]">
          Register new account
        </p>
        <input
          {...register("name")}
          type="text"
          placeholder="Your name"
          className={`block peer rounded-3xl w-full max-w-sm px-4 h-14 mt-5 ${
            errors.name ? "border-[#C93B32]" : "border-[#AEBBCD]"
          } focus:outline-none focus:border-[#1071ae] focus:ring-1`}
        />
        <span className="place-self-start text-[14px] text-[#C93B32]">
          {errors.name?.message}
        </span>

        <input
          {...register("email")}
          type="email"
          placeholder="Email"
          className={`block peer rounded-3xl w-full max-w-sm px-4 h-14 mt-5 ${
            errors.email ? "border-[#C93B32]" : "border-[#AEBBCD]"
          } focus:outline-none focus:border-[#1071ae] focus:ring-1`}
        />
        <span className="place-self-start text-[14px] text-[#C93B32]">
          {errors.email?.message}
        </span>

        <input
          {...register("password")}
          type="password"
          placeholder="Password"
          className={`block peer rounded-3xl w-full max-w-sm px-4 h-14 mt-5 ${
            errors.password ? "border-[#C93B32]" : "border-[#AEBBCD]"
          } focus:outline-none focus:border-[#1071ae] focus:ring-1`}
        />
        <span className="place-self-start text-[14px] text-[#C93B32]">
          {errors.password?.message}
        </span>

        <input
          {...register("confirmPassword")}
          type="password"
          placeholder="Confirm your password"
          className={`block peer rounded-3xl w-full max-w-sm px-4 h-14 mt-5 ${
            errors.confirmPassword ? "border-[#C93B32]" : "border-[#AEBBCD]"
          } focus:outline-none focus:border-[#1071ae] focus:ring-1`}
        />
        <span className="place-self-start text-[14px] text-[#C93B32]">
          {errors.confirmPassword?.message}
        </span>
        <button
          type="submit"
          className="rounded-full bg-[#1071ae] text-[#F5F7FF] w-full max-w-sm p-3 mt-5 hover:bg-[#2347C5] mb-5"
          onClick={onHandleSubmit}
        >
          Sign Up
        </button>

        <Link to="/" className="hover:text-[#2347C5] hover:underline">
          <p className="text-[#1071ae] mb-5">
            Already have an account? Sign in
          </p>
        </Link>

        <div className="text-[#6D7989] w-full max-w-sm">
          <label className="text-[#404B5A]">Password must contain:</label>

          <div className="mt-2 ">
            <img
              src={errors.password?.message ? notRed : checkGreen}
              className="inline-block mr-2"
            />
            <p className="inline-block">
              Enter a password of at least 8 characters;
            </p>
          </div>

          <div>
            <img
              src={errors.password?.message ? notRed : checkGreen}
              className="inline-block mr-2"
            />
            <p className="inline-block">Enter at least 1 number;</p>
          </div>

          <div>
            <img
              src={errors.password?.message ? notRed : checkGreen}
              className="inline-block mr-2"
            />
            <p className="inline-block">
              Enter at least 1 lowercase character;
            </p>
          </div>

          <div>
            <img
              src={errors.password?.message ? notRed : checkGreen}
              className="inline-block mr-2"
            />
            <p className="inline-block">
              Enter at least 1 uppercase character;
            </p>
          </div>

          <div>
            <img
              src={errors.password?.message ? notRed : checkGreen}
              className="inline-block mr-2"
            />
            <p className="inline-block">Enter at least 1 special character;</p>
          </div>
        </div>
      </form>
      <div className="lg:absolute top-20 mb-10 mt-10 right-10  flex justify-center md:justify-center sm:justify-center">
            <img src={imageRight} alt="right-financial" className="rounded-full w-48 sm:w-72 md:w-80 lg:w-100 xl:w-128" />
        </div>
      </div>
    </div>
  );
}
