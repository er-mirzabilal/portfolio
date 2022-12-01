import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div
      id="home"
      className=" w-full flex items-center   justify-between pt-64 pb-32  "
    >
      <div className=" ">
        <div className=" ">
          <h6>Hi my name is </h6>
          <h1>
            Mirza Bilal<span className="dot"></span>
          </h1>
          <h2>
            Full Stack Web Developer<b>|</b>
          </h2>
          <div className="bg-[#0C1C34] p-2 px-6 descrption">
            <h5>
              Sustainable development is the pathway <br /> to the future we
              want for all.
            </h5>
          </div>

          <button className="resume-button  ">Resume </button>
        </div>
      </div>
      <div className="relative h-[450px] w-[450px] bg-white " >
        <div className="overlay absolute z-[0] w-96 h-96">
       
        </div>
        <div className="absolute z-[-0] ">
    
          <img src="/mainpicture.svg" className="   bottom-0" alt="" />
        </div>
      </div>



              {/* <div className="w-[440px] h-[370px] bg-[#0D1F3A]  absolute  rounded-full mt-[68px] ml-2"></div> */}
    </div>
  );
};

export default Main;
