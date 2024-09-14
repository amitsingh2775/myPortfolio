import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { CiMobile4 } from "react-icons/ci";
import { IoLocationSharp } from "react-icons/io5";
import { AiTwotoneMail } from "react-icons/ai";
import { BsCalendarDate } from "react-icons/bs";
import { MdOutlineFileDownload } from "react-icons/md";
import amitImage from "./SocialLinks/amitkk.jpg";
import "../Components/Global.css";
import cv from "../Components/SocialLinks/Amit_Resume_A.pdf";
import { FaRegUser } from "react-icons/fa";
import { PiNotepad } from "react-icons/pi";
import { FaLaptopCode } from "react-icons/fa";
import { TiContacts } from "react-icons/ti";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { LiaBlogSolid } from "react-icons/lia";
import { NavLink } from "react-router-dom";


const Profile = ({ show, setShow, darkmode, bgcolor,setCross }) => {

 const handleCross=()=>{
  setCross(false)
  setShow(false)
 }

  return (
    <>
      {show ? (
        <div
          className={`${
            darkmode === "dark" ? `bg-${bgcolor}` : `bg-white`
          } lg:w-11/12  md:w-8/12 sm:w-11/12 absolute sm:top-50 z-20`}
        >
          <NavLink to="/">
            <div
              onClick={handleCross}
              className={`bg-slate-200 rounded-lg flex items-center p-2 gap-1`}
              style={{
                background: `${bgcolor === "white" ? "#f3f6f6" : "#1D1D1D"}`,
              }}
            >
              <FaRegUser className="text-xl" />
              <h1
                className={`text-sm my-1 ${
                  bgcolor === "white" ? "text-black" : "text-white"
                }`}
              >
                About
              </h1>
            </div>
          </NavLink>

          {/* <NavLink to="/Resume">
            <div
              onClick={handleCross}
              className="rounded-lg flex items-center p-2"
              style={{
                background: `${bgcolor === "white" ? "#f3f6f6" : "#1D1D1D"}`,
              }}
            >
              <PiNotepad
                className={`text-xl my-1 ${
                  bgcolor === "white" ? "text-black" : "text-white"
                }`}
              />
              <h1
                className={`text-sm my-1 ${
                  bgcolor === "white" ? "text-black" : "text-white"
                }`}
              >
                Resume
              </h1>
            </div>
          </NavLink> */}

          <NavLink to="/Projects">
            <div
              onClick={handleCross}
              className="rounded-lg flex items-center p-2"
              style={{
                background: `${bgcolor === "white" ? "#f3f6f6" : "#1D1D1D"}`,
              }}
            >
              <FaLaptopCode
                className={`text-xl my-1 ${
                  bgcolor === "white" ? "text-black" : "text-white"
                }`}
              />
              <h1
                className={`text-sm my-1 ${
                  bgcolor === "white" ? "text-black" : "text-white"
                }`}
              >
                Projects
              </h1>
            </div>
          </NavLink>

         
          <NavLink to="/Certify">
            <div
              onClick={handleCross}
              className="rounded-lg flex items-center p-2"
              style={{
                background: `${bgcolor === "white" ? "#f3f6f6" : "#1D1D1D"}`,
              }}
            >
              <AiOutlineSafetyCertificate
                className={`text-xl my-1 ${
                  bgcolor === "white" ? "text-black" : "text-white"
                }`}
              />
              <h1
                className={`text-sm my-1 ${
                  bgcolor === "white" ? "text-black" : "text-white"
                }`}
              >
                Skills
              </h1>
            </div>
          </NavLink>

          <NavLink to="/Contact">

          <div
          onClick={handleCross}
          
            className="rounded-lg flex items-center p-2"
            style={{
              background: `${bgcolor === "white" ? "#f3f6f6" : "#1D1D1D"}`,
            }}
          >
            <TiContacts
              className={`text-xl my-1 ${
                bgcolor === "white" ? "text-black" : "text-white"
              }`}
            />
            <h1
              className={`text-sm my-1 ${
                bgcolor === "white" ? "text-black" : "text-white"
              }`}
            >
              Contact
            </h1>
          </div>
          </NavLink>
        </div>

        
      ) : null}

<div className="w-full flex justify-around">
  <div
    className={`lg:w-80 sm:w-96 rounded-lg p-6 flex flex-col items-center gap-4 ${
      darkmode === "dark" ? "bg-black" : "bg-white"
    }`}
  >
    {/* Profile Image */}
    <div className="w-32 h-32 rounded-full overflow-hidden">
      <img src={amitImage} alt="Amit Kumar" className="w-full h-full object-cover" />
    </div>

    {/* Name Display */}
    <h1
      className={`text-xl font-bold ${
        bgcolor === "white" ? "text-black" : "text-white"
      }`}
    >
      Amit Kumar
    </h1>

    {/* Passion/Role Display */}
    <div
      className="w-28 h-10 p-1 rounded-lg flex justify-center items-center"
      style={{
        background: `${bgcolor === "white" ? "#f3f6f6" : "#1D1D1D"}`,
      }}
    >
      <h1
        className="text-xs text-center"
        style={{
          color: `${bgcolor === "white" ? "#000000" : "#A6A6A6"}`,
        }}
      >
        SOFTWARE DEVLOPER
      </h1>
    </div>

    {/* Social Icons */}
    <div className="flex gap-2">
      {/* Instagram Icon */}
      <div
        className="w-8 h-8 flex justify-center items-center rounded-lg hover:bg-blue-500"
        style={{
          background: `${bgcolor === "white" ? "#f3f6f6" : "#1D1D1D"}`,
        }}
      >
        <a href="https://www.instagram.com/amit__1t/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-xl text-red-400 font-bold" />
        </a>
      </div>

      {/* LinkedIn Icon */}
      <div
        className="w-8 h-8 flex justify-center items-center rounded-lg hover:bg-blue-500"
        style={{
          background: `${bgcolor === "white" ? "#f3f6f6" : "#1D1D1D"}`,
        }}
      >
        <a href="https://www.linkedin.com/in/amitkumar2775//" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-xl text-blue-600 font-bold" />
        </a>
      </div>

      {/* GitHub Icon */}
      <div
        className="w-8 h-8 flex justify-center items-center rounded-lg hover:bg-blue-500"
        style={{
          background: `${bgcolor === "white" ? "#f3f6f6" : "#1D1D1D"}`,
        }}
      >
        <a href="https://github.com/amitsingh2775" target="_blank" rel="noopener noreferrer">
          <BsGithub
            className="text-xl font-bold"
            style={{
              color: `${bgcolor === "white" ? "black" : "white"}`,
            }}
          />
        </a>
      </div>
    </div>

    {/* Contact Info */}
    <div
      className="w-64 p-2 flex flex-col gap-5 rounded-lg"
      style={{
        background: `${bgcolor === "white" ? "#f3f6f6" : "#1D1D1D"}`,
      }}
    >
      {/* Phone */}
      <div className={`flex items-center gap-2 ${bgcolor === "white" ? "border-b border-grey-200" : "border-b border-slate-500"}`}>
        <div
          className={`w-8 h-8 flex items-center justify-center rounded-lg hover:bg-blue-500 ${
            bgcolor === "white" ? "bg-white" : "bg-black"
          }`}
        >
          <CiMobile4 className="text-lg text-pink-500 hover:text-white" />
        </div>
        <h1 className={`${bgcolor === "white" ? "text-black" : "text-white"} text-sm`}>
          +91 9142564757
        </h1>
      </div>

      {/* Email */}
      <div className={`flex items-center gap-2 ${bgcolor === "white" ? "border-b border-grey-200" : "border-b border-slate-500"}`}>
        <div
          className={`w-8 h-8 flex items-center justify-center rounded-lg hover:bg-blue-500 ${
            bgcolor === "white" ? "bg-white" : "bg-black"
          }`}
        >
          <AiTwotoneMail className="text-lg text-sky-600 hover:text-white" />
        </div>
        <h1 className={`${bgcolor === "white" ? "text-black" : "text-white"} text-sm`}>
          amitkumarmmdu@gmail.com
        </h1>
      </div>

      {/* Location */}
      <div className={`flex items-center gap-2 ${bgcolor === "white" ? "border-b border-grey-200" : "border-b border-slate-500"}`}>
        <div
          className={`w-8 h-8 flex items-center justify-center rounded-lg hover:bg-blue-500 ${
            bgcolor === "white" ? "bg-white" : "bg-black"
          }`}
        >
          <IoLocationSharp className="text-lg text-pink-600 hover:text-white" />
        </div>
        <h1 className={`${bgcolor === "white" ? "text-black" : "text-white"} text-sm`}>
          MMDU Mullana Ambala Haryana
        </h1>
      </div>

      {/* Date of Birth */}
      <div className={`flex items-center gap-3 ${bgcolor === "white" ? "border-b border-grey-200" : "border-b border-slate-500"}`}>
        <div
          className={`w-8 h-8 flex items-center justify-center rounded-lg hover:bg-blue-500 ${
            bgcolor === "white" ? "bg-white" : "bg-black"
          }`}
        >
          <BsCalendarDate className="text-lg text-purple-600 hover:text-white" />
        </div>
        <h1 className={`${bgcolor === "white" ? "text-black" : "text-white"} text-sm`}>
          25 sept 2003
        </h1>
      </div>
    </div>

    {/* Download CV Button */}
    <div className="mt-4">
      <button className="bg-blue-500 flex items-center rounded-lg justify-center text-white p-2 text-md w-40">
        <a href={cv} download="Resume" className="flex">
          <MdOutlineFileDownload className="text-xl" />
          Download CV
        </a>
      </button>
    </div>
  </div>
</div>

    </>
  );
};

export default Profile;
