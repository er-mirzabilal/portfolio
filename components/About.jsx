import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/about.jpg";
import AboutButton from "./aboutButton";
import Visual from "./framerMotion/fadeIn";

const About = (props) => {
  return (
    <>
      <div id="about" className="   flex items-center lg:py-32 py-20 mx-auto">
        <div className=" flex   lg:flex-row flex-col ">
          <div className="lg:h-[450px] lg:w-[450px]    m-auto shadow-xl flex lg:items-center  items-center relative justify-center  lg:justify-center ">
            <div className="lg:w-[400px] lg:h-[400px]  lg:mt-0  w-72 h-72  ml-8 mt-4 shadow-xl flex items-center border lg:absolute absolute  border-[#ffff] justify-center lg:p-8 lg:hover:scale-105 lg:ease-in lg:duration-300"></div>
            <div className="mb-4 lg:w-[440px] lg:h-[460px]   w-72 h-72 drop-shadow-2xl shadow-white ">
              {" "}
              <Image src={AboutImg} className="absolute    " alt="/" />
              {/* <Visual img={AboutImg} isLarge={true} bgImg={AboutImg} /> */}
            </div>
          </div>

          <div className="lg:w-[503px] lg:ml-8 drop-shadow-2xl shadow-blue-500/50">
            <div className="flex ">
              <h2 className="text-xl mt-16 lg:mt-0">About Me</h2>
              <div className="h-0.5 lg:w-[393px] lg:ml-4 mt-6 border border-[#F0F0F0] lg:visible invisible"></div>
            </div>

            <p className="animate__shakeX animate__animated py-2  lg:text-lg text-base font-medium text-[#F0F0F0] drop-shadow-2xl shadow-white ">
              Hello! My name is Bilal and I enjoy creating things that live on
              the internet. My interest in web development started back in 2012
              when I decided to try editing custom Tumblr themes — turns out
              hacking together a custom reblog button taught me a lot about HTML
              & CSS!
            </p>
            <p className=" lg:text-lg text-base text-[#F0F0F0]">
              My main focus these days is building accessible, inclusive
              products and digital experiences. I decided to try editing custom
              Tumblr themes — turns out hacking together a custom reblog button
              taught me a lot about HTML & CSS!
            </p>

            <div className="aboutbuttonsDiv lg:pt-2 pt-10 ml-0 drop-shadow-2xl shadow-blue-500/50  ">
              <AboutButton text={"HTML"} />
              <AboutButton text={"Javascript"} />
              <AboutButton text={"CSS"} />
              <AboutButton text={"React"} />
              <AboutButton text={"React Native"} />
              {/* <br /> */}
              <AboutButton text={"Android"} />
              <AboutButton text={"PHP"} />
              <AboutButton text={"Laravel"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
