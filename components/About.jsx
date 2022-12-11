import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/about.jpg";
import AboutButton from "./aboutButton";

const About = (props) => {
  return (

    <>
      <div
      id="about"
      className="   flex items-center lg:py-32 py-20 mx-auto" 
    >
      <div className=" flex lg:gap-8  lg:flex-row flex-col ">
        <div className="lg:h-[350px] lg:w-[350px]  w-[90%] h-[90%]  m-auto shadow-xl flex lg:items-center  relative  lg:justify-center ">
          <div className="lg:h-[350px]  lg:w-[360px] h-[93%] w-[94%]   ml-8 mt-4 shadow-xl flex items-center border lg:absolute absolute  border-[#ffff] justify-center lg:p-8 lg:hover:scale-105 lg:ease-in lg:duration-300"></div>
          <div className="mb-4 ">
            {" "}
            <Image src={AboutImg} className="absolute " alt="/" />
          </div>
        </div>

        <div className="lg:w-[503px] lg:ml-8">
          <h2 className="py-4 text-xl">About Me</h2>
          <p className="py-2  lg:text-lg text-base font-medium text-[#F0F0F0]">
            Hello! My name is Bilal and I enjoy creating things that live on the
            internet. My interest in web development started back in 2012 when I
            decided to try editing custom Tumblr themes — turns out hacking
            together a custom reblog button taught me a lot about HTML & CSS!
          </p>
          <p className=" lg:text-lg text-base text-[#F0F0F0]">
            My main focus these days is building accessible, inclusive products
            and digital experiences. I decided to try editing custom Tumblr
            themes — turns out hacking together a custom reblog button taught me
            a lot about HTML & CSS!
          </p>

          <div className="aboutbuttonsDiv lg:pt-2 pt-10 ml-0 ">
            <AboutButton text={"HTML"} />
            <AboutButton text={"Javascript"} />
            <AboutButton text={"CSS"} />
            <AboutButton text={"React"} />
            <AboutButton text={"React Native"} />
            <br />
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
