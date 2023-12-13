import React from "react";
import Logo from "../../assets/logo.png";
import LogoText from "../../assets/logo-text.PNG"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";

import {
  faFacebook,
  faTwitter,
  faInstagram,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    // e.preventDefault();
    const hash = e.target.getAttribute("href");
    console.log("inside top", hash);
    navigate(`/${hash}`);
  };
  return (
    <div
      style={{
        boxShadow: "0px 0px 40px  rgba(0,0,0,0.2)",
      }}
      className="  backdrop-filter backdrop-blur-lg  footer w-[100%]  relative bottom-0 bg-[#9C9A7E] text-white pt-[50px] px-[30px]  shadow-xl leading-[20px] mt-[0px] "
    >
      <div className="row grid grid-rows-4 sm:grid-rows-2 sm:grid-cols-2  md:grid-rows-1  md:grid-cols-4 gap-4 m-auto ">
        <div className="col p-[20px]">
          <img src={Logo} alt="Logo" className="logo w-[150px] mb-[22px] " />
          <img src={LogoText} alt="Logo" className="logo w-[150px] mb-[22px] " />
          <p className="w-full max-w-[300px]  font-[Poppins] text-[0.908rem] tracking-[0.5px] leading-[1.5] ">
            StyleSphere is an interior design studio focused on creating high
            quality, pesronalized interiors.
          </p>
        </div>
        <div className="col  px-[20px] pt-[20px] sm:pt-[32px] md:pt-[40px] ">
          <p className="text-teal-700 text-[1.5rem] tracking-[1px] font-[Poppins] font-semibold w-fit mb-[43px] relative">
            Office
            <div className="underline w-[100%] h-[5px] bg-[#767676] rounded-[3px] absolute top-6 left-0">
              <span className="animate-loading w-[15px] h-[100%] bg-teal-700 rounded-[3px] absolute top-0 left-[10px]"></span>
            </div>
          </p>
          <p className="font-[Poppins] text-[1rem] tracking-[0.5px] font-normal leading-5">
            Sukkur IBA
          </p>
          <p className="font-[Poppins] text-[1rem] tracking-[0.5px] font-normal leading-5">
            University
          </p>
          <p className="font-[Poppins] text-[1rem] tracking-[0.5px] font-normal leading-5">
            Sukkur,Sindh
          </p>
          <p className="w-fit font-[Poppins] text-[1rem] tracking-[0.5px] font-normal leading-5 border-b border-[#ccc]  cursor-pointer my-[14px] mx-[0px]">
            faizansolangi576@gmail.com
          </p>
          <p className="w-fit font-[Poppins] text-[1rem] tracking-[0.5px] font-normal leading-5 border-b border-[#ccc]  cursor-pointer my-[14px] mx-[0px]">
            babaralichanna18@gmail.com
          </p>
          <p className="w-fit font-[Poppins] text-[1rem] tracking-[0.5px] font-normal leading-5 border-b border-[#ccc]  cursor-pointer my-[14px] mx-[0px]">
            muskanmatlan2001@gmail.com
          </p>
          <p className="cursor-pointer font-[Poppins] text-[1rem] tracking-[0.5px] font-normal leading-5">
            +92 308 3372042
          </p>
        </div>
        <div className="col px-[20px] pt-[20px] md:pt-[40px] ">
          <p className="text-teal-700 text-[1.5rem] tracking-[1px] font-[Poppins] font-semibold w-fit mb-[35px] relative">
            Links
            <div className="underline w-[100%] h-[5px] bg-[#767676] rounded-[3px] absolute top-6 left-0">
              <span className="animate-loading w-[15px] h-[100%] bg-teal-700 rounded-[3px] absolute top-0 left-[10px]"></span>
            </div>
          </p>
          <ul>
            <li className="mb-[12px] hover:scale-y-150 ">
              <a
                href="/"
                className="text-white text-[1rem] tracking-[0.9px] font-normal "
              >
                <FontAwesomeIcon
                  icon={faArrowRight}
                  color={"#0F766E"}
                  className="pr-2 "
                />
                Home
              </a>
            </li>
            <li className="mb-[12px] hover:scale-y-150 ">
              <a
                href="#services"
                onClick={handleClick}
                className="text-white text-[1rem] tracking-[0.9px] font-normal "
              >
                <FontAwesomeIcon
                  icon={faArrowRight}
                  color={"#0F766E"}
                  className="pr-2 "
                />
                Services
              </a>
            </li>
            <li className="mb-[12px] hover:scale-y-150 ">
              <a
                href="/products"
                onClick={handleClick}
                className="text-white text-[1rem] tracking-[0.9px] font-normal "
              >
                <FontAwesomeIcon
                  icon={faArrowRight}
                  color={"#0F766E"}
                  className="pr-2 "
                />
                Products
              </a>
            </li>
          </ul>
        </div>
        <div className="col px-[20px]  pt-[20px] md:pr-[20px]  md:pt-[40px] ">
          <p className="text-teal-700 text-[1.5rem] tracking-[1px] font-[Poppins] font-semibold w-fit mb-[43px] relative">
            Newsletter
            <div className="underline w-[100%] h-[5px] bg-[#767676] rounded-[3px] absolute top-6 left-0">
              <span className="animate-loading w-[15px] h-[100%] bg-teal-700 rounded-[3px] absolute top-0 left-[10px]"></span>
            </div>
          </p>
          <form className="pb-[15px] flex justify-between items-center border-b border-teal-700 mb-[44px] w-[100%]">
            <FontAwesomeIcon
              icon={faEnvelope}
              color={"#0F766E"}
              className="text-[18px] mr-[10px]"
            />
            <input
              className="w-[100%] bg-transparent placeholder:text-[#0F766E] border-0 outline-none text-[#0F766E]"
              type="email"
              placeholder="Enter your email..."
              required
            />
            <button
              type="submit"
              className="bg-transparent border-0 outline-none cursor-pointer"
            >
              <FontAwesomeIcon
                icon={faArrowRight}
                color={"#0F766E"}
                className=""
              />
            </button>
          </form>
          <div className="socialIcons">
            <FontAwesomeIcon
              icon={faFacebook}
              size="1x"
              className="w-[40px] h-[40px] rounded-[50%]  text-center text-[20px] mr-[15px] text-[#0F766E] cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faTwitter}
              size="1x"
              className="w-[40px] h-[40px] rounded-[50%] text-center text-[20px] text-[#0F766E] bg-transparent mr-[15px] cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faGoogle}
              size="1x"
              className="w-[40px] h-[40px] rounded-[50%] text-center text-[20px] text-[#0F766E] bg-transparent mr-[15px] cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faInstagram}
              size="1x"
              className="w-[40px] h-[40px] rounded-[50%] text-center text-[20px] text-[#0F766E] bg-transparent mr-[15px] cursor-pointer"
            />
          </div>
        </div>
      </div>
      <hr />
      <div className="flex justify-center items-center m-auto">
        <p className=" text-[0.875rem] font-normal tracking-wider my-[20px]">
          HomeStyle © 2023 All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
