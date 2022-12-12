import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ALink from "./activeLink";

const Footer = () => {
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

  const [mobilebar, setMobilebar] = useState(false);

  return (
    <div style={{ backgroundColor: `${navBg}` }}>
      <div className="  flex lg:flex-row flex-col lg:justify-between       pt-4 lg:pb-1 lg:px-14  px-4 ">
        <div>
          {" "}
          <h6 className="text-sm ">All Rights Reserved.</h6>
        </div>
        <div>
          <ul
            style={{ color: `${linkColor}` }}
            className="flex lg:flex-row flex-col  mt-4  lg:mt-0"
          >
            <div className="flex-row flex">
              {" "}
              <li className=" text-xs uppercase mr-4 py-1 lg:py-0">
                <ALink href="/#about">About</ALink>
              </li>
              <li className=" text-xs uppercase  lg:mr-4 mr-2 mx-auto py-1 lg:py-0">
                <ALink href="/#Experence">Experence</ALink>
              </li>{" "}
            </div>
            <div className="flex-row flex w-">
            <li className=" text-xs uppercase  mr-4 py-1 lg:py-0">
                <ALink href="/#projects">Projects</ALink>
              </li>
              <li className=" text-xs uppercase py-1 mx-auto mr-10 lg:py-0 ">
                <ALink href="/#Blogs">Blogs</ALink>
              </li>
            </div>
          </ul>
        </div>
      </div>

      <div className="visible lg:invisible lg:h-0  flex justify-center lg:mt-2 mt-4 gap-8 lg:mb-0 mb-2  mx-auto">
        <Link href="/" className="">
         
            <img
              src={"/Group 107.svg"}
              alt="/"
            
              className="cursor-pointer"
            />
        
        </Link>
        <Link href="/">
        
            <img
              src={"/Group 108.svg"}
              alt="/"
              width="20"
              height="20"
              className="cursor-pointer"
            />
        
        </Link>
        <Link href="/">
       
            <img
              src={"/Group 109.svg"}
              alt="/"
              width="20"
              height="20"
              className="cursor-pointer"
            />
         
        </Link>
        <Link href="/">
         
            <img
              src={"/Group 110.svg"}
              alt="/"
              width="20"
              height="20"
              className="cursor-pointer"
            />
        
        </Link>
      </div>
    </div>
  );
};

export default Footer;
