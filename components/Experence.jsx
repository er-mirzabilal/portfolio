import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import ALink from "./activeLink";

const Experence = () => {
  const [activeExp, setActiveExp] = useState("zapta");

  return (
    <div id="Experence" className="  lg:py-32 py-20">
      <div className="flex ">
        <h2 className="text-xl">Where I’ve Worked </h2>
        <div className="h-0.5 lg:w-[433px] lg:ml-4 mt-6 border border-[#F0F0F0] lg:visible invisible"></div>
      </div>

      <div className=" flex gap-8 mt-14  lg:flex-row flex-col ">
        <div className=" ml-2 flex  flex-row lg:flex-col  h-fit font-bold  overflow-auto">
          <div
            className={`
            hover:bg-[#0EC98533]  hover:border-[#02CA82] 
             lg:p-2 lg:px-6 px-2 lg:border-b-0 border-b-4  ${
               activeExp === "zapta"
                 ? "lg:border-l-4 border-[#02CA82] bg-[#0EC98533]"
                 : "lg:border-l-4 border-[#ffff]"
             }
           
            
            `}
          >
            <button
              style={{ color: activeExp === "zapta" ? "#02CA82" : "white" }}
              onClick={() => setActiveExp("zapta")}
            >
              <li className=" list-none p-2 space-y-3  w-max">
                Zapta Technologies
              </li>
            </button>
          </div>

          <div
            className={`
            hover:bg-[#0EC98533]  hover:border-[#02CA82] 
             lg:p-2 lg:px-6 px-2 lg:border-b-0 border-b-4  ${
               activeExp === "gift"
                 ? "lg:border-l-4 border-[#02CA82] bg-[#0EC98533]"
                 : "lg:border-l-4 border-[#ffff]"
             }
           
            
            `}
          >
            <button
              style={{ color: activeExp === "gift" ? "#02CA82" : "white" }}
              onClick={() => setActiveExp("gift")}
            >
              <li className="list-none p-2 space-y-3  w-max">
                Gift University
              </li>
            </button>
          </div>
          <div
            className={`
            hover:bg-[#0EC98533]  hover:border-[#02CA82] 
             lg:p-2 lg:px-6 px-2 lg:border-b-0 border-b-4  ${
               activeExp === "bayt"
                 ? "lg:border-l-4 border-[#02CA82] bg-[#0EC98533]"
                 : "lg:border-l-4 border-[#ffff]"
             }
           
            
            `}
          >
            <button
              style={{
                color: activeExp === "bayt" ? "#02CA82" : "white",
              }}
              onClick={() => setActiveExp("bayt")}
            >
              <li className=" list-none p-2 space-y-3">Bayt.com</li>
            </button>
          </div>

          <div
            className={`
            hover:bg-[#0EC98533]  hover:border-[#02CA82] 
             lg:p-2 lg:px-6 px-2 lg:border-b-0 border-b-4  ${
               activeExp === "google"
                 ? "lg:border-l-4 border-[#02CA82] bg-[#0EC98533]"
                 : "lg:border-l-4 border-[#ffff]"
             }
           
            
            `}
          >
            <button
              style={{
                color: activeExp === "google" ? "#02CA82" : "white",
              }}
              onClick={() => setActiveExp("google")}
            >
              <li className=" list-none p-2 space-y-3">Google</li>
            </button>
          </div>
        </div>

        {activeExp === "bayt" && (
          <div className=" animate__animated animate__pulse lg:w-[603px]  id-1 ">
            <h2 className="leading-none lg:text-2xl text-lg text-[#ffff]">
              Sr. Full Stack Software Engineer
            </h2>
            <h6 className="text-sm">2019 - </h6>
            <ul className="  lg:p-2  space-y-3 ml-6 mt-4  list-disc">
              <li className="text-sm px-4 lg:px-0 text-[#F0F0F0] ">
                Write modern, performant, maintainable code for a diverse array
                of client and internal projects
              </li>
              <li className="text-sm px-4 lg:px-0  text-[#F0F0F0]">
                Work with a variety of different languages, platforms,
                frameworks, and content management systems such as JavaScript,
                TypeScript, Gatsby, React, Craft, WordPress, Prismic, and
                Netlify
              </li>
              <li className="text-sm px-4 lg:px-0  text-[#F0F0F0]">
                Communicate with multi-disciplinary teams of engineers,
                designers, producers, and clients on a daily basis
              </li>
            </ul>
          </div>
        )}

        {activeExp === "zapta" && (
          <div className="animate__animated animate__pulse lg:w-[603px] id-2 ">
            <h2 className="leading-none lg:text-2xl text-lg  text-[#ffff]">
              Sr. Full Stack Software Engineer
            </h2>
            <h6 className="text-sm">2022 - </h6>
            <ul className="  lg:p-2  space-y-3 ml-6 mt-4  list-disc">
              <li className="text-sm px-4 lg:px-0 text-[#F0F0F0] ">
                Write modern, performant, maintainable code for a diverse array
                of client and internal projects
              </li>
            </ul>
          </div>
        )}

        {activeExp === "gift" && (
          <div className="animate__animated animate__pulse lg:w-[603px] id-4 ">
            <h2 className="leading-none lg:text-2xl text-lg  text-[#ffff]">
              Sr. Full Stack Software Engineer
            </h2>
            <h6 className="text-sm">2022 - </h6>
            <ul className="   lg:p-2  space-y-3 ml-6 mt-4  list-disc">
              <li className="text-sm px-4 lg:px-0 text-[#F0F0F0] ">
                maintainable code for a diverse array of client and internal
                projects
              </li>
              <li className="text-sm px-4 lg:px-0  text-[#F0F0F0]">
                Write modern, performant, maintainable code for a diverse array
                of client and internal projects
              </li>
            </ul>
          </div>
        )}

        {activeExp === "google" && (
          <div className=" animate__animated animate__pulse lg:w-[603px] id-4 ">
            <h2 className="leading-none lg:text-2xl text-lg  text-[#ffff]">
              Software Engineer
            </h2>
            <h6 className="text-sm">2022 - </h6>
            <ul className="  lg:p-2  space-y-3 ml-6 mt-4  list-disc">
              <li className="text-sm px-4 lg:px-0 text-[#F0F0F0] ">
                performant, maintainable code for a diverse array of client and
                internal projects
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Experence;
