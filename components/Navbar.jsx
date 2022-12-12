import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ALink from "./activeLink";

const Navbar = () => {
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#0A1930");
  const [linkColor, setLinkColor] = useState("#ffff");

  const router = useRouter();

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  const [mobilebar ,setMobilebar] =useState(false)

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? " fixed w-full  shadow-xl z-[100] ease-in-out duration-300"
          : "invisible w-full  z-[100]"
      }
    >

        <div className="visible lg:invisible  w-full fixed flex  justify-between   py-6 px-6 ">

          <div>
          <ALink href="/">
       
            <img
              src={"/navLogo.svg"}
              alt="/"
              width="70"
              height="20"
              className="cursor-pointer"
            />
         
        </ALink>
      
          </div>
      <div>
        <button onClick={()=> setMobilebar(!mobilebar)}>

          <ALink href="/">
         
              <img
                src={"/Vector.svg"}
                alt="/"
                width="40"
                height="12"
                className="cursor-pointer"
              />
        
          </ALink>
          </button>
      
          </div>



       
      </div>


 {/* <div class="max-w-screen-sm p-10">
    <div class="relative h-4 overflow-hidden rounded-full bg-gray-300">
      <div id="progress" class="animate-loading absolute h-full  rounded-full bg-green-500"> 
      </div>
    </div>
  </div> */}


































{mobilebar &&   <div className=" mt-20 fixed  bg-[#0B1A32]  ">
 <div className="        ">


   <div className="">
     <ul style={{ color: `${linkColor}` }} className=" p-2">
       <li className=" text-sm uppercase m-2 p-2">
         <ALink href="/#about">About</ALink>
       </li>
       <li className=" text-sm uppercase  m-2 p-2 ">
         <ALink href="/#Experence">Experence</ALink>
       </li>
       <li className=" text-sm uppercase   m-2 p-2">
         <ALink href="/#projects">Projects</ALink>
       </li>
       <li className=" text-sm uppercase   m-2 p-2">
         <ALink href="/#Blogs">Blogs</ALink>
       </li>
       <li className=" text-sm uppercase   m-2 p-2   border-solid  border-2 border-[#02CA82]  ">
         <ALink href="/#contact">contact</ALink>
       </li>
     </ul>
   </div>

 </div>


</div> }
















      <div className="lg:visible invisible   flex  lg:justify-between  items-center   py-6 px-14 ">
        <ALink href="/">
        
            <img
              src={"/navLogo.svg"}
              alt="/"
              width="70"
              height="20"
              className="cursor-pointer"
            />
        
        </ALink>
       

        <div className="">
          <ul style={{ color: `${linkColor}` }} className="flex ">
            <li className=" text-sm uppercase mr-4">
              <ALink href="/#about">About</ALink>
            </li>
            <li className=" text-sm uppercase mr-4">
              <ALink href="/#Experence">Experence</ALink>
            </li>
            <li className=" text-sm uppercase  mr-4">
              <ALink href="/#projects">Projects</ALink>
            </li>
            <li className=" text-sm uppercase  ">
              <ALink href="/#Blogs">Blogs</ALink>
            </li>
            <li className=" text-sm uppercase mr-4 contact-button ">
              <ALink href="/#contact">contact</ALink>
            </li>
          </ul>
        </div>







      </div>

    
    </div>
  );
};

export default Navbar;
