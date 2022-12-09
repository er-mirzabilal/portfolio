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

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? " fixed w-full  shadow-xl z-[100] ease-in-out duration-300"
          : "fixed w-full  z-[100]"
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
        <button>

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
























      <div className="lg:visible invisible   flex  lg:justify-between  items-center   py-6 lg:px-14 ">
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
          <ul style={{ color: `${linkColor}` }} className="flex">
            <li className="ml-10 text-sm uppercase">
              <ALink href="/#about">About</ALink>
            </li>
            <li className="ml-10 text-sm uppercase ">
              <ALink href="/#Experence">Experence</ALink>
            </li>
            <li className="ml-10 text-sm uppercase  ">
              <ALink href="/#projects">Projects</ALink>
            </li>
            <li className="ml-10 text-sm uppercase  ">
              <ALink href="/#Blogs">Blogs</ALink>
            </li>
            <li className="ml-10 text-sm uppercase  contact-button ">
              <ALink href="/#contact">contact</ALink>
            </li>
          </ul>
        </div>







      </div>

      {/* <div className="fixed ">
        <div className="email-mainpage">mirza.bilal.ahmad8@gmail.com</div>

        <div className="left-line-mainpage  "></div>
      </div> */}
      {/* <div className="">
        <div  className="right-side ">
          <Link href="/">
            <a>
              <img
                src={"/Group 107.svg"}
                alt="/"
                width="70"
                height="20"
                className="cursor-pointer"
              />
          
          </Link>
          <Link href="/">
            <a>
              <img
                src={"/Group 108.svg"}
                alt="/"
                width="70"
                height="20"
                className="cursor-pointer"
              />
          
          </Link>
          <Link href="/">
            <a>
              <img
                src={"/Group 109.svg"}
                alt="/"
                width="70"
                height="20"
                className="cursor-pointer"
              />
          
          </Link>
          <Link href="/">
            <a>
              <img
                src={"/Group 110.svg"}
                alt="/"
                width="70"
                height="20"
                className="cursor-pointer"
              />
          
          </Link>
        </div>
        <div className="right-line-mainpage"></div>
      </div> */}
    </div>
  );
};

export default Navbar;
