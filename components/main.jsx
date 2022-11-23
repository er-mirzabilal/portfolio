import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div id="home" className="ml-24 h-[726px] content-center   ">
      <div className="    p-2 flex justify-around">
        <div className="mt-64 ml-40">
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
        <div className="mt-44 ">
          <img src="/mainpicture.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Main;
