import React, { useState, useEffect } from "react";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import ColorWhiteLogo from "/public/logo/color-logo-white.svg";
import ColorBlackLogo from "/public/logo/color-logo-black.svg";
import ProfilePic from "/public/profile-pic/Dipto.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [logo, setLogo] = useState(ColorWhiteLogo);
  const [textColor, setTextColor] = useState("#ffffff");
  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeNavbar = () => {
      if (window.scrollY >= 90) {
        setColor("#ffffff");
        setTextColor("#000000");
        setLogo(ColorBlackLogo);
      } else {
        setColor("transparent");
        setTextColor("#ffffff");
        setLogo(ColorWhiteLogo);
      }
    };
    window.addEventListener("scroll", changeNavbar);
  }, []);

  return (
    <div className="fixed left-0 top-0 w-full z-10 ease-in duration-300 bg-gray-800">
      <div className="m-auto flex justify-between items-center text-white lg:max-w-[75vw]">
        <a href="# " className="z-[100]">
          <Image src={logo} alt="" className="p-4 " width={110} height={110} />
        </a>
        <ul
          style={{ color: `${textColor}` }}
          className="hidden uppercase font-[500] sm:flex"
        >
          <li className="p-4 hover:text-orange-500">
            <a href="#">Home</a>
          </li>
          <li className="p-4 hover:text-orange-500">
            <a href="#">About Me</a>
          </li>
          <li className="p-4 hover:text-orange-500">
            <a href="#">Skills</a>
          </li>
          <li className="p-4 hover:text-orange-500">
            <a href="#">Projects</a>
          </li>
          <li className="p-4 hover:text-orange-500">
            <a href="#">Contact</a>
          </li>
        </ul>

        <div className="block p-4 sm:hidden z-[100]">
          {nav ? (
            <AiOutlineClose
              onClick={handleNav}
              size={20}
              style={{ color: `${textColor}, zIndex: "100"` }}
            />
          ) : (
            <AiOutlineMenu
              onClick={handleNav}
              size={20}
              style={{ color: `${textColor}`}}
            />
          )}
        </div>
        <div className={nav ? "fixed left-0 top-0 w-full h-screen bg-black/70" : "fixed left-0 top-0 w-full h-screen"}>
          <div
            className={
              nav
                ? "sm:hidden absolute top-0 left-0 right-0 bottom-0  flex justify-center items-center w-[70%] h-screen bg-gray-700 z-[20] text-center ease-in duration-300"
                : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
            }
          >
            <ul className="uppercase text-xl mt-10">
              <li
                className="p-4  hover:text-orange-500"
                onClick={handleNav}
              >
                <a href="#">Home</a>
              </li>
              <li
                className="p-4  hover:text-orange-500"
                onClick={handleNav}
              >
                <a href="#">About Me</a>
              </li>
              <li
                className="p-4  hover:text-orange-500"
                onClick={handleNav}
              >
                <a href="#">Skills</a>
              </li>
              <li
                className="p-4  hover:text-orange-500"
                onClick={handleNav}
              >
                <a href="#">Projects</a>
              </li>
              <li
                className="p-4  hover:text-orange-500"
                onClick={handleNav}
              >
                <a href="#">Contact</a>
              </li>
              <li className="ml-6 mt-10 hover:text-orange-500">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(
                      "https://drive.google.com/file/d/1s5yp3C_SW4pZppLIyPPm-WdJiYaGhqYK/view",
                      "_blank"
                    );
                  }}
                  className="p-3"
                >
                  Download Resume
                </button>
              </li>

              <h2 className=" my-6">Connect with me</h2>
              <div className="flex flex-row items-center justify-between  mx-auto my-2 gap-4 ">
                <a
                  className="rounded-full shadow-lg p-2 shadow-gray-800 cursor-pointer  bg-white md:mx-8 hover: scale-110 ease-in duration-300"
                  href="https://www.facebook.com/SazzatHossainDipto/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillFacebook style={{ color: "black" }} />
                </a>
                <a
                  className="rounded-full shadow-lg p-2 shadow-gray-800 cursor-pointer bg-white md:mx-8 hover: scale-110 ease-in duration-300"
                  href="https://www.linkedin.com/in/sazzat-hossain-7314b2144/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin style={{ color: "black" }} />
                </a>
                <a
                  className="rounded-full shadow-lg p-2 shadow-gray-800 cursor-pointer bg-white md:mx-8 hover: scale-110 ease-in duration-300"
                  href="https://www.instagram.com/sazzat_hossain_dipto/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillInstagram style={{ color: "black" }} />
                </a>
                <div
                  onClick={() =>
                    navigator.clipboard.writeText(
                      "sazzathossaindipto@gmail.com"
                    )
                  }
                  className="rounded-full shadow-lg p-2  shadow-gray-800 cursor-pointer bg-white md:mx-8 hover: scale-110 ease-in duration-300"
                >
                  <AiOutlineMail style={{ color: "black" }} />
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
