import { useRouteError } from "react-router-dom";

import logo from "../assets/logo.png"
import imageLeft from "../assets/left-financial.png"
import imageRight from "../assets/right-financial.png"

export default function AllowedAccess() {
  const error = useRouteError();
  console.error(error);

  return (
    <div>
    <div className="flex justify-center lg:justify-start md:justify-center sm:justify-center">
      <img src={logo} alt="logo" className="mt-10 rounded-3xl mx-auto lg:ml-10 w-24 sm:mb-10 md:mb-10" />
  </div>
  <div className="lg:absolute bottom-20 left-10  flex justify-center md:justify-center sm:justify-center">
      <img src={imageLeft} alt="left-financial" className="rounded-full w-48 sm:w-72 md:w-80 lg:w-100 xl:w-128" />
  </div>
    <div className="flex flex-col items-center py-[30vh]">
      <p className="font-semibold text-2xl text-center text-[#1071ae]">Welcome! Allowed Access</p>
    </div>
    <div className="lg:absolute top-20 mb-10 mt-10 right-10  flex justify-center md:justify-center sm:justify-center">
            <img src={imageRight} alt="right-financial" className="rounded-full w-48 sm:w-72 md:w-80 lg:w-100 xl:w-128" />
        </div>
      </div>
  );
}