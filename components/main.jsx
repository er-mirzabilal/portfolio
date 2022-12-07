import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div
      id="home"
      className=" w-fit sm:h-screen  flex sm:items-center  sm:flex-row flex-col-reverse  justify-between sm:pt-64 pt-28 sm:pb-32 pb-4 bg-stone-700"
    >
      <div className=" ">
        <div className=" ">
          <h6 className="sm:text-xl text-xs">Hi my name is </h6>
          <h1 className="sm:text-[88px] text-4xl">
            Mirza Bilal<span className="sm:dot  smdot"></span>
          </h1>
          <h2 className="sm:text-4xl text-2xl">
            Full Stack Web Developer<b>|</b>
          </h2>
          <div className="bg-[#0C1C34] p-2 px-6 descrption">
            <h5 className="sm:text-2xl text-xl">
              Sustainable development is the pathway <br /> to the future we
              want for all.
            </h5>
          </div>

          <button className="resume-button  ">Resume </button>
        </div>
      </div>
      <div className=" sm:relative sm:h-[450px] sm:w-[450px]  " >
        <div className="sm:overlay absolute z-[1] sm:w-96 sm:h-96 bottom-0 ml-8  mb-1  rounded-full ">
       
        </div>
        <div className="sm:absolute z-[2]  sm:mx-0 mx-20">
    
          <img src="/mainpicture.svg" className="  rounded-full sm:mx-0 mx-auto " alt="" />
        </div>
      </div>



              {/* <div className="w-[440px] h-[370px] bg-[#0D1F3A]  absolute  rounded-full mt-[68px] ml-2"></div> */}
    </div>
  );
};

export default Main;
