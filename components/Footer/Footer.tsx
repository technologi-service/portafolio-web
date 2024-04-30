"use client";
import React from "react";
import { BackgroundBeams } from "../ui/background-beams";
import { GrMapLocation } from "react-icons/gr";
import { FcPhoneAndroid } from "react-icons/fc";
import { SiMinutemailer } from "react-icons/si";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

export const BackgroundBeam = () => {
  return (
    <footer className="flex flex-col items-center justify-center bg-neutral-950 text-neutral-300 p-4 sm:p-6 md:p-8 lg:p-12 relative">
      <h1 className="relative z-10 text-3xl md:text-7xl lg:text-6xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
        CONTACT
      </h1>

      <div className="relative grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 gap-8 mx-auto w-full sm:w-3/4 lg:w-1/2">
        <div className="relative flex flex-col items-center space-y-4">
          <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center">
            <GrMapLocation size={100} className="text-white" />
          </div>
          <h2 className="text-lg font-bold">Address</h2>
          <p>MADRID-ESPAÑA</p>
        </div>
        <div className="flex flex-col items-center space-y-3">
          <div className="w-12 h-12 sm:w-16 sm:h-16  flex items-center justify-center">
            <FcPhoneAndroid size={100} className="text-white" />
          </div>
          <h2 className="text-lg font-bold">PHONE</h2>
          <p>67488692</p>
        </div>

        <div className="flex flex-col items-center space-y-4">
          <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center">
            <SiMinutemailer size={80} className="text-white" />
          </div>
          <h2 className="text-lg font-bold">SOCIAL-MEDIA</h2>
          <p className="justify-between grid grid-cols-3 space-x-2 md:space-x-7 lg:space-x-10">
            <MdOutlineAlternateEmail size={25} />
            <FaLinkedin size={25} />
            <FaGithub size={25} />
          </p>
        </div>
        {/* Repeat for additional contact info if needed */}
      </div>

      <BackgroundBeams />
    </footer>
  );
};
