import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Projects= () => {
  return (
    <div id="projects" className="w-full h-screen  ">
      <div className="max-w-[1240px] w-full h-full mx-32 p-2 flex justify-center text-left items-center">
        <div className="">
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
    </div>
  );
};

export default Projects;
