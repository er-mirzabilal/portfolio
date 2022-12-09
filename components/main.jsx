import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div
      id="home"
      className="lg:h-screen  flex lg:items-center  lg:flex-row flex-col-reverse  lg:justify-between lg:pt-64 pt-24 lg:pb-32 pb-4"
    >
      <div className="text-center lg:text-left">
        <div className=" ">
          {/* <h6 className="sm:text-xl text-xs">Hi my name is </h6> */}
          <h1 className="lg:text-[88px] text-4xl mt-4 lg:mt-0">
            Mirza Bilal<span className="sm:dot  smdot"></span>
          </h1>
          <h2 className="lg:text-4xl text-2xl">
            Full Stack Web Developer<b>|</b>
          </h2>
          <div className="bg-[#0C1C34] p-2 px-6 descrption">
            <h5
              className="lg:text-2xl text-base text-[#CCD7F7]"
            >
              Sustainable development is the pathway to the future we want for
              all.
            </h5>
          </div>

          <button className="resume-button  ">Resume </button>
        </div>
      </div>
      <div className=" lg:relative lg:h-[450px] lg:w-[450px]  mt-4 lg:mt-0">
        <div className="sm:overlay absolute z-[1] sm:w-96 lg:h-96 bottom-0 ml-8  mb-1  rounded-full "></div>
        <div className="lg:absolute z-[2]  lg:mx-0 mx-20">
          <img
            src="/mainpicture.svg"
            className="  rounded-full lg:mx-0 mx-auto   "
            alt=""
          />
        </div>
      </div>

      {/* <div className="w-[440px] h-[370px] bg-[#0D1F3A]  absolute  rounded-full mt-[68px] ml-2"></div> */}
    </div>
  );
};

export default Main;
