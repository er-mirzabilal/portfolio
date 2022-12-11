import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import ALink from "./activeLink";

const Experence = () => {



  const [activeExp, setActiveExp] = useState('bayt');






  return (
    <div id="Experence" className="  lg:py-32 py-20">
      <div className="flex lg:justify-center ">
        <h2 className="text-xl">Where I’ve Worked </h2>
        <div className="h-0.5 lg:w-[433px] lg:ml-4 mt-6 border border-[#F0F0F0] lg:visible invisible"></div>
      </div>

      <div className=" flex gap-8 mt-14  lg:flex-row flex-col ">
        <div className=" ml-2 flex  flex-row lg:flex-col  h-fit font-bold  overflow-auto">
          <div className="hover:bg-[#0EC98533]  hover:border-[#02CA82] w-max  lg:p-2 lg:px-6  px-2  lg:border-b-0    lg:border-l-4  border-b-4  border-[#ffff]">
            <button onClick={()=>setActiveExp('bayt')}>
              {" "}
              <li className=" list-none p-2 lg:space-y-3">
                {" "}
                <ALink href="/#1" >
                  {" "}
                  Bayt.com
                </ALink>
              </li>
            </button>
          </div>

          <div className="hover:bg-[#0EC98533]  hover:border-[#02CA82] w-max  lg:p-2 lg:px-6  px-2  lg:border-b-0    lg:border-l-4  border-b-4  border-[#ffff]">

          <button onClick={()=>setActiveExp('zapta')}>
            <li className=" list-none p-2 space-y-3  w-max">
              <ALink  href="/#2">Zapta Technologies</ALink>
            </li>
            </button>
          </div>
          <div className=" hover:bg-[#0EC98533]  hover:border-[#02CA82] lg:p-2 lg:px-6  px-2 lg:border-b-0    lg:border-l-4  border-b-4  border-[#ffff]">
          <button onClick={()=>setActiveExp('gift')}>
            <li className="list-none p-2 space-y-3  w-max">
              <ALink href="/#3">Gift University</ALink>
            </li>
            </button>
          </div>

          <div className="hover:bg-[#0EC98533]  hover:border-[#02CA82] lg:p-2 lg:px-6  px-2 lg:border-b-0    lg:border-l-4  border-b-4  border-[#ffff]">
          <button onClick={()=>setActiveExp('google')}>
            <li className=" list-none p-2 space-y-3">
            <ALink href="/#4">  Google.com
              
            </ALink></li>
            </button>
          </div>
        </div>

        {activeExp === 'bayt' && (
          <div className="lg:w-[603px]  id-1 ">
            <h2 className="leading-none lg:text-2xl text-lg text-[#ffff]">
              Sr. Full Stack Software Engineer
            </h2>
            <h6 className="text-sm">2019 - </h6>
            <ul className="  lg:p-2  space-y-3 ml-6 mt-4  list-disc">
              <li  className="text-sm px-4 lg:px-0 text-[#F0F0F0] ">
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


{activeExp === 'zapta'  && (
          <div className="lg:w-[603px] id-2 ">
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

{activeExp === 'gift'  && (
          <div className="lg:w-[603px] id-4 ">
            <h2 className="leading-none lg:text-2xl text-lg  text-[#ffff]">
              Sr. Full Stack Software Engineer
            </h2>
            <h6 className="text-sm">2022 - </h6>
            <ul className="   lg:p-2  space-y-3 ml-6 mt-4  list-disc">
              <li className="text-sm px-4 lg:px-0 text-[#F0F0F0] ">
               maintainable code for a diverse array
                of client and internal projects
              </li>
              <li className="text-sm px-4 lg:px-0  text-[#F0F0F0]">
                Write modern, performant, maintainable code for a diverse array
                of client and internal projects
              </li>
            
            </ul>
          </div>
        )}


{activeExp === 'google'  && (
          <div className="lg:w-[603px] id-4 ">
            <h2 className="leading-none lg:text-2xl text-lg  text-[#ffff]">
           Software Engineer
            </h2>
            <h6 className="text-sm">2022 - </h6>
            <ul className="  lg:p-2  space-y-3 ml-6 mt-4  list-disc">
              <li className="text-sm px-4 lg:px-0 text-[#F0F0F0] ">
              performant, maintainable code for a diverse array
                of client and internal projects
              </li>
            
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Experence;
