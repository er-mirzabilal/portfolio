import Link from "next/link";
import Marquee from "react-easy-marquee";

import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import prologo1 from "../public/assets/projects/prologo1.svg";

import Image from "next/image";

const Main = () => {
  return (
    <div
      id="home"
      className=" flex lg:items-center  lg:flex-col flex-col   lg:pt-64 pt-32 lg:pb-20 pb-14  z-0"
    >
      <div id="container" className=" flex justify-center">
        <div className=" lg:relative relative  lg:h-[160px] lg:w-[160px] w-[160px]  h-[160px]  lg:mb-10  lg:mt-0">
          <div className="lg:absolute   absolute top-4 left-3  lg:mx-0 w-[160px]  h-[160px]   ">
            <img src="/mainpicture.svg" className=" rounded-full lg:mx-0 " />
          </div>

          <div id="html-spinner"></div>
        </div>
      </div>

      <div className="text-center ">
        <div className=" ">
          <h1 className="animate__animated animate__flash  animate__slow animate__delay-1s	 lg:text-[58px] text-4xl mt-4 lg:mt-0 hover:text-[#00df8f] ">
            Mirza Bilal<span className="sm:dot  smdot"></span>
          </h1>
          <h2 className="lg:text-3xl  mt-4 text-2xl ">
            <span className=" inline-flex h-20 pt-2 overflow-x-hidden hover:text-white animate-type animate-type-reverse whitespace-nowrap  will-change-transform">
              Full Stack Web Developer
            </span>
            <span className="box-border inline-block lg:w-1 w-1 h-6 ml-2  bg-white  lg:h-8 animate-cursor will-change-transform"></span>
          </h2>

          <div className="bg-[#0C1C34]  mt-4 p-2 px-6 border-l-4 border-[#ffff] shadow-lg shadow-cyan-500/50">
            <h5
              className="animate__animated animate__bounce animate__slow hover:text-[#00df8f] lg:text-2xl text-base text-[#CCD7F7]"
              // class="animate__animated animate__bounce"
            >
              Sustainable development is the pathway to the future we want for
              all.
            </h5>
          </div>

          <button className="resume-button hover:text-white hover:border hover:border-[#ffff] shadow-lg shadow-cyan-500/50 ">
            Resume{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
