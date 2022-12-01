import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import ALink from "./activeLink";

const Experence = () => {



  const [activeExp, setActiveExp] = useState('bayt');






  return (
    <div id="Experence" className=" w-full py-32 ">
      <div className="flex justify-center ">
        <h2>Where I’ve Worked </h2>
        <div className="h-0.5 w-[433px] ml-4 mt-6 border border-[#F0F0F0]"></div>
      </div>

      <div className=" flex gap-8 mt-14  ">
        <div className=" ml-2 flex flex-col   font-bold ">
          <div className=" hover:bg-[#0EC98533]  hover:border-[#02CA82] p-2 px-6 descrption">
            <button onClick={()=>setActiveExp('bayt')}>
              {" "}
              <li className=" list-none p-2 space-y-3">
                {" "}
                <ALink href="/#1" >
                  {" "}
                  Bayt.com
                </ALink>
              </li>
            </button>
          </div>

          <div className="hover:bg-[#0EC98533]  hover:border-[#02CA82] p-2 px-6 descrption">

          <button onClick={()=>setActiveExp('zapta')}>
            <li className=" list-none p-2 space-y-3">
              <ALink  href="/#2">Zapta Technologies</ALink>
            </li>
            </button>
          </div>
          <div className=" hover:bg-[#0EC98533]  hover:border-[#02CA82] p-2 px-6 descrption">
          <button onClick={()=>setActiveExp('gift')}>
            <li className="list-none p-2 space-y-3">
              <ALink href="/#3">Gift University</ALink>
            </li>
            </button>
          </div>

          <div className="hover:bg-[#0EC98533]  hover:border-[#02CA82] p-2 px-6 descrption">
          <button onClick={()=>setActiveExp('google')}>
            <li className=" list-none p-2 space-y-3">
            <ALink href="/#4">  Google.com
              
            </ALink></li>
            </button>
          </div>
        </div>

        {activeExp === 'bayt' && (
          <div className="w-[603px] id-1 ">
            <h2 className="leading-none text-2xl text-[#ffff]">
              Sr. Full Stack Software Engineer
            </h2>
            <h6 className="text-sm">2019 - </h6>
            <ul className="  p-2 space-y-3 list-disc">
              <li>
                Write modern, performant, maintainable code for a diverse array
                of client and internal projects
              </li>
              <li className=" ">
                Work with a variety of different languages, platforms,
                frameworks, and content management systems such as JavaScript,
                TypeScript, Gatsby, React, Craft, WordPress, Prismic, and
                Netlify
              </li>
              <li className="">
                Communicate with multi-disciplinary teams of engineers,
                designers, producers, and clients on a daily basis
              </li>
            </ul>
          </div>
        )}


{activeExp === 'zapta'  && (
          <div className="w-[603px] id-2 ">
            <h2 className="leading-none text-2xl text-[#ffff]">
              Sr. Full Stack Software Engineer
            </h2>
            <h6 className="text-sm">2022 - </h6>
            <ul className="  p-2 space-y-3 list-disc">
              <li>
                Write modern, performant, maintainable code for a diverse array
                of client and internal projects
              </li>
            
            </ul>
          </div>
        )}

{activeExp === 'gift'  && (
          <div className="w-[603px] id-4 ">
            <h2 className="leading-none text-2xl text-[#ffff]">
              Sr. Full Stack Software Engineer
            </h2>
            <h6 className="text-sm">2022 - </h6>
            <ul className="  p-2 space-y-3 list-disc">
              <li>
               maintainable code for a diverse array
                of client and internal projects
              </li>
              <li>
                Write modern, performant, maintainable code for a diverse array
                of client and internal projects
              </li>
            
            </ul>
          </div>
        )}


{activeExp === 'google'  && (
          <div className="w-[603px] id-4 ">
            <h2 className="leading-none text-2xl text-[#ffff]">
           Software Engineer
            </h2>
            <h6 className="text-sm">2022 - </h6>
            <ul className="  p-2 space-y-3 list-disc">
              <li>
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
