import React from "react";
import Image from "next/image";
import Link from "next/link";
import Frame45 from "../public/assets/projects/Frame 45.svg";
import Frame46 from "../public/assets/projects/Frame 46.svg";
import prologo1 from "../public/assets/projects/prologo1.svg";
import prologo2 from "../public/assets/projects/prologo2.svg";
import AboutButton from "./aboutButton";
import OtherProject from "./otherProject";

const Project = (props) => {
  return (
    <div id="projects" className="  flex flex-wrap  lg:py-32  ">
      {/* <div className="flex  h-fit w-full justify-center ">
        <h2 className="font-extrabold text-3xl">Some Things I’ve Built </h2>
        <div className="h-0.5 w-[433px] ml-4 mt-10 border border-[#F0F0F0]"></div>
      </div> */}

      <div className="flex lg:justify-center ">
        <h2 className="text-xl">Some Things I’ve Built </h2>
        <div className="h-0.5 lg:w-[433px] lg:ml-4 mt-6 border border-[#F0F0F0] lg:visible invisible"></div>
      </div>




      <div className="lg:max-w-[1240px] mt-12  flex gap-8  flex-col lg:flex-row">
        <div className="  m-auto shadow-xl flex items-center   justify-center ">
          <div className="mb-4 ">
            {" "}
            <Image src={Frame45} className="    " alt="/" />
          </div>
        </div>

        <div className="lg:w-[603px] lg:ml-8 lg:mt-20">
          <div className="pb-4 ">
            <h2 className="lg:text-xl text-base pb-4">Feature Project </h2>
            <h1 className="lg:text-5xl  text-xl pb-4">Halcyon Theme</h1>

            <div className="bg-[#0C1C34] p-2 px-6 border-l-4 border-[#00DF8F]">
              <h5 className="lg:text-base  text-sm font-bold">
                A minimal, dark blue theme for VS Code, Sublime Text, Atom,
                iTerm, and more. Available on Visual Studio Marketplace, Package
                Control, Atom Package Manager, and npm.
              </h5>
            </div>
          </div>

          <div className="aboutbuttonsDiv pt-2 lg:ml-0 ">
            <button className="lg:text-base text-sm font-semibold  text-[#00DF8F]">
              VS Code
            </button>
            <button className="lg:text-base text-sm font-semibold px-2 text-[#00DF8F]">
              Sublime Text
            </button>
            <button className="lg:text-base text-sm font-semibold px-2 text-[#00DF8F]">
              Atom
            </button>
            <button className="lg:text-base text-sm font-semibold px-2 text-[#00DF8F]">
              iTerm2
            </button>
            <button className="lg:text-base text-sm font-semibold px-2 text-[#00DF8F]">
              Hyper
            </button>
          </div>
          <div className="mt-4  flex gap-4">
            <div>
              {" "}
              <Image src={prologo1} className=" " alt="/" />
            </div>
            <div>
              {" "}
              <Image src={prologo2} className=" " alt="/" />
            </div>
          </div>
        </div>
      </div>

      <div className="lg:max-w-[1240px] mt-20  flex gap-8 flex-col lg:flex-row ">
   



        <div className="lg:w-[603px] lg:ml-8 lg:mt-20">
          <div className="pb-4 ">
            <h2 className="lg:text-xl text-base pb-4">Feature Project </h2>
            <h1 className="lg:text-5xl  text-xl pb-4">Spotify Profile</h1>

            <div className="bg-[#0C1C34] p-2 px-6 border-l-4 border-[#00DF8F]">
              <h5 className="lg:text-base  text-sm font-bold">
                A minimal, dark blue theme for VS Code, Sublime Text, Atom,
                iTerm, and more. Available on Visual Studio Marketplace, Package
                Control, Atom Package Manager, and npm.
              </h5>
            </div>
          </div>

          <div className="aboutbuttonsDiv pt-2 lg:ml-0 ">
            <button className="lg:text-base text-sm font-semibold  text-[#00DF8F]">
              VS Code
            </button>
            <button className="lg:text-base text-sm font-semibold px-2 text-[#00DF8F]">
              Sublime Text
            </button>
            <button className="lg:text-base text-sm font-semibold px-2 text-[#00DF8F]">
              Atom
            </button>
            <button className="lg:text-base text-sm font-semibold px-2 text-[#00DF8F]">
              iTerm2
            </button>
            <button className="lg:text-base text-sm font-semibold px-2 text-[#00DF8F]">
              Hyper
            </button>
          </div>
          <div className="mt-4  flex gap-4">
            <div>
              {" "}
              <Image src={prologo1} className=" " alt="/" />
            </div>
            <div>
              {" "}
              <Image src={prologo2} className=" " alt="/" />
            </div>
          </div>
        </div>


        <div className="  m-auto shadow-xl flex items-center   justify-center ">
          <div className="mb-4 ">
            {" "}
            <Image src={Frame46} className=" " alt="/" />
          </div>
        </div>
      </div>

      {/* <div className="flex  h-fit w-full justify-center my-16">
        <h2 className="font-extrabold text-3xl">Other Projects </h2>
        <div className=" w-[433px] ml-4 mt-10  line"></div>
      </div> */}

      <div className="flex lg:justify-center  my-10">
        <h2 className="text-xl">Other Projects  </h2>
        <div className="h-0.5 lg:w-[433px] lg:ml-4 mt-6 border border-[#F0F0F0] lg:visible invisible"></div>
      </div>






      <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-6 gap-4 lg:mt-10 mb-2">
        <OtherProject />

        <OtherProject />

        <OtherProject />

        <OtherProject />

        <OtherProject />

        <OtherProject />
      </div>
      <div className="flex  h-fit w-full justify-center">
        {" "}
        <button className="resume-button text-sm  ">Show More </button>
      </div>
    </div>
  );
};

export default Project;
