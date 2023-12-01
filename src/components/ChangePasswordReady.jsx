import { useRouteError, useNavigate } from "react-router-dom";

import logo from "../assets/logo.png"
import imageLeft from "../assets/left-financial.png"
import imageRight from "../assets/right-financial.png"

export default function Registered() {
  const error = useRouteError();
  console.error(error);

  const navigate = useNavigate();
  const onHandleSubmit = () => {
    navigate("/");
  };

  return (
    <div>
    <div className="flex justify-center lg:justify-start md:justify-center sm:justify-center">
      <img src={logo} alt="logo" className="mt-10 rounded-3xl mx-auto lg:ml-10 w-24 sm:mb-10 md:mb-10" />
  </div>
  <div className="lg:absolute bottom-20 left-10  flex justify-center md:justify-center sm:justify-center">
      <img src={imageLeft} alt="left-financial" className="rounded-full w-48 sm:w-72 md:w-80 lg:w-100 xl:w-128" />
  </div>
    <div className="flex flex-col items-center py-[30vh]">
      <p className="font-semibold text-2xl text-center text-[#1071ae]">Your password has been updated!</p>
      <button 
        type="submit"
        className={`rounded-full bg-[#1071ae] text-[#F5F7FF] w-[25rem] p-3 mt-5 hover:bg-[#2347C5] mb-5`}
        onClick={onHandleSubmit}
      >
        Confirm
      </button>
      <div className="lg:absolute top-20 mb-10 mt-10 right-10  flex justify-center md:justify-center sm:justify-center">
            <img src={imageRight} alt="right-financial" className="rounded-full w-48 sm:w-72 md:w-80 lg:w-100 xl:w-128" />
        </div>
      </div>
      </div>
  );
}
