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

  const [mobilebar ,setMobilebar] =useState(false)

  return (
    <div 
      style={{ backgroundColor: `${navBg}` }}
    
      
    
    >




      <div className="  flex lg:flex-row flex-col lg:justify-between     pt-4 lg:pb-1 lg:px-14  px-4 ">
       <h6 className="text-base  lg:visible invisible">Bilal Hameed</h6>
       

        <div className=" ">
          <ul style={{ color: `${linkColor}` }} className="flex lg:flex-row flex-col   ">
            <li className=" text-xs uppercase mr-4 py-1 lg:py-0" >
              <ALink href="/#about">About</ALink>
            </li>
            <li className=" text-xs uppercase mr-4 py-1 lg:py-0">
              <ALink href="/#Experence">Experence</ALink>
            </li>
            <li className=" text-xs uppercase  mr-4 py-1 lg:py-0">
              <ALink href="/#projects">Projects</ALink>
            </li>
            <li className=" text-xs uppercase py-1 lg:py-0 ">
              <ALink href="/#Blogs">Blogs</ALink>
            </li>
           
          </ul>
        </div>







      </div>

    
    </div>
  );
};

export default Footer;
