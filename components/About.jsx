import React, { useRef, useState } from "react";
import Image from "next/image";
import AboutImg from "../public/assets/about.jpg";
import AboutButton from "./aboutButton";
import Marquee from "react-easy-marquee";
import VideoModal from "./VideoModel";

const About = (props) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setIsFullscreen(true);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setIsFullscreen(false);
    setModalIsOpen(false);
  };
  return (
    <>
      <div id="about" className="   flex items-center lg:py-32 py-20 mx-auto">
        <div className=" flex   lg:flex-row flex-col ">
          <div className="lg:h-[450px] lg:w-[450px]    m-auto shadow-xl flex lg:items-center  items-center relative justify-center  lg:justify-center ">
            <div className="lg:w-[400px] lg:h-[400px]  lg:mt-0  w-72 h-72  ml-8 mt-4 shadow-xl flex items-center border lg:absolute absolute  border-[#ffff] justify-center lg:p-8 lg:hover:scale-105 lg:ease-in lg:duration-300"></div>
            <div className="mb-4 lg:w-[440px] lg:h-[460px]   w-72 h-72 drop-shadow-2xl shadow-white ">
              {" "}
              <Image src={AboutImg} className="absolute    " alt="/" />
            </div>
          </div>

          {/* <div className="relative mb-0 lg:w-[420px] lg:h-[420px] w-72 h-72 drop-shadow-2xl shadow-white">
            <video
              src="Capsule.webm"
              controls
              className="w-full h-full object-cover"
              ref={videoRef}
              onClick={togglePlay}
            ></video>
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  className="w-20 h-20 text-white bg-[rgba(0,0,0,0.6)] rounded-full hover:bg-[#02CA82] transition duration-300"
                  onClick={togglePlay}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    fill="currentColor"
                    className="bi bi-play-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2 1.717A.5.5 0 0 1 2.5 1h11a.5.5 0 0 1 .5.717l-6 12a.5.5 0 0 1-.5.283h-.001a.5.5 0 0 1-.5-.282l-6-12z" />
                  </svg>
                </button>
              </div>
            )}
          </div> */}

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
              <Marquee
                duration={18000}
                axis="X"
                width="100%"
                pauseOnHover={true}
                reverse={true}
              >
                <AboutButton text={"HTML"} />
                <AboutButton text={"Javascript"} />
                <AboutButton text={"CSS"} />
                <AboutButton text={"React"} />
                <AboutButton text={"React Native"} />
                <AboutButton text={"Android"} />
                <AboutButton text={"PHP"} />
                <AboutButton text={"Laravel"} />
                {/* <br /> */}
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
