import Link from "next/link";

import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div
      id="home"
      className="lg:h-screen  flex lg:items-center  lg:flex-col flex-col   lg:pt-64 pt-24 lg:pb-20 pb-14  z-0"
    >
      <div id="container" className="flex justify-center">
        <div className=" lg:relative relative  lg:h-[160px] lg:w-[160px] w-[160px]  h-[160px]  lg:mb-10  lg:mt-0">
          <div className="lg:absolute   absolute  lg:mx-0 w-[160px]  h-[160px]   ">
            <img
              src="/mainpicture.svg"
              className="  rounded-full lg:mx-0   "
              alt=""
            />
          </div>

          <div id="html-spinner"></div>
        </div>
      </div>

      <div className="text-center ">
        <div className=" ">
        
          <h1 className="lg:text-[58px] text-4xl mt-4 lg:mt-0">
            Mirza Bilal<span className="sm:dot  smdot"></span>
          </h1>
          <h2 className="lg:text-3xl  mt-4 text-2xl ">
           
          <span
      className=" inline-flex h-20 pt-2 overflow-x-hidden animate-type animate-type-reverse whitespace-nowrap  will-change-transform"
    >
    Full Stack Web Developer 
    </span>
    <span
      className="box-border inline-block w-1 ml-2  bg-white  lg:h-8 animate-cursor will-change-transform"
    >    </span>

          </h2>


















          <div className="bg-[#0C1C34]  mt-4 p-2 px-6 descrption">
            <h5 className="lg:text-2xl text-base text-[#CCD7F7]">
              Sustainable development is the pathway to the future we want for
              all.
            </h5>
          </div>

          <button className="resume-button  ">Resume </button>
        </div>
      </div>

      {/* <div className="w-[440px] h-[370px] bg-[#0D1F3A]  absolute  rounded-full mt-[68px] ml-2"></div> */}
    </div>
  );
};

export default Main;
