import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


import logo from "../../assets/logo.png"
import imageLeft from "../../assets/left-financial.png"
import imageRight from "../../assets/right-financial.png"

const schema = yup.object({
  email: yup
    .string()
    .required("The email field is mandatory.")
    .email("Enter a valid email"),
});

export default function ForgotPassword() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit: onSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleSubmit = (data) => {
    console.log(data);
    navigate("/changepassword");
  };

  const onHandleSubmit = () => {
    console.log("Click");
  };

  return (
    <div>
    <div className="flex justify-center lg:justify-start md:justify-center sm:justify-center">
      <img src={logo} alt="logo" className="mt-10 rounded-3xl mx-auto lg:ml-10 w-24 sm:mb-10 md:mb-10" />
  </div>
  <div className="lg:absolute bottom-20 left-10  flex justify-center md:justify-center sm:justify-center">
      <img src={imageLeft} alt="left-financial" className="rounded-full w-48 sm:w-72 md:w-80 lg:w-100 xl:w-128" />
  </div>
  <div className="flex flex-col lg:flex-row justify-center items-center  mb-20 mt-10 ">
      <form
        onSubmit={onSubmit(handleSubmit)}
        className="flex flex-col items-center relative z-10 outline-none w-full max-w-md rounded-3xl p-6 shadow-xl bg-gradient-to-r from-[#c8cfd8] to-[#e7d5c7] backdrop-blur-lg">
        <p className="font-semibold text-center text-[#1071ae]">
          Reset your password
        </p>
        <input
          {...register("email")}
          type="email"
          placeholder="Confirm your Email ID"
          className={`block peer rounded-3xl w-full max-w-sm px-4 h-14 mt-5 ${
            errors.email ? "border-[#C93B32]" : "border-[#AEBBCD]"
          } focus:outline-none focus:border-[#1071ae] focus:ring-1`}
        />
        <span className="place-self-start text-[14px] text-[#C93B32]">
          {errors.email?.message}
        </span>
        <button
          type="submit"
          className="rounded-full bg-[#1071ae] text-[#F5F7FF] w-full max-w-sm p-3 mt-5 hover:bg-[#2347C5] mb-5"
          onClick={onHandleSubmit}
        >
          Confirm
        </button>
      </form>
      <div className="lg:absolute top-20 mb-10 mt-10 right-10  flex justify-center md:justify-center sm:justify-center">
            <img src={imageRight} alt="right-financial" className="rounded-full w-48 sm:w-72 md:w-80 lg:w-100 xl:w-128" />
        </div>
      </div>
    </div>
  );
}
