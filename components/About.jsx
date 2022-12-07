import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/about.jpg";
import AboutButton from "./aboutButton";

const About = (props) => {
  return (
    <div
      id="about"
      className="w-fit   flex items-center py-32 bg-zinc-400 mx-auto"
    >
      <div className="max-w-[1240px]  flex gap-8 ">
        <div className="h-[350px] w-[350px] m-auto shadow-xl flex items-center  relative  justify-center ">
          <div className="h-[350px]  w-[360px] ml-8 mt-4 shadow-xl flex items-center border absolute  border-[#ffff] justify-center p-8 hover:scale-105 ease-in duration-300"></div>
          <div className="mb-4 ">
            {" "}
            <Image src={AboutImg} className="absolute " alt="/" />
          </div>
        </div>

        <div className="w-[603px] ml-8">
          <h2 className="py-4">About Me</h2>
          <p className="py-2  font-medium">
            Hello! My name is Bilal and I enjoy creating things that live on the
            internet. My interest in web development started back in 2012 when I
            decided to try editing custom Tumblr themes — turns out hacking
            together a custom reblog button taught me a lot about HTML & CSS!
          </p>
          <p className=" ">
            My main focus these days is building accessible, inclusive products
            and digital experiences. I decided to try editing custom Tumblr
            themes — turns out hacking together a custom reblog button taught me
            a lot about HTML & CSS!
          </p>

          <div className="aboutbuttonsDiv pt-2 ml-0 ">
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
  );
};

export default About;
