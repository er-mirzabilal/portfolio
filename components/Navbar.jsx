import Link from "next/link";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#0A1930");
  const [linkColor, setLinkColor] = useState("#ffff");

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
          ? "fixed w-full h-28 shadow-xl z-[100] ease-in-out duration-300"
          : "fixed w-full h-28 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full py-16 px-14 scroll-smooth scroll-hidden">
        <Link href="/">
          <a>
            <img
              src={"/navLogo.svg"}
              alt="/"
              width="70"
              height="20"
              className="cursor-pointer"
            />
          </a>
        </Link>

        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            <li className="ml-10 text-sm uppercase">
              <Link href="/#about">About</Link>
            </li>
            <li className="ml-10 text-sm uppercase ">
              <Link href="/#Experence">Experence</Link>
            </li>
            <li className="ml-10 text-sm uppercase  ">
              <Link href="/#projects">Projects</Link>
            </li>
            <li className="ml-10 text-sm uppercase  ">
              <Link href="/resume">Blogs</Link>
            </li>
            <li className="ml-10 text-sm uppercase  contact-button ">
              <Link href="/#contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="email-mainpage">mirza.bilal.ahmad8@gmail.com</div>

      <div className="left-line-mainpage"></div>

      <div orientation="right" className="right-side">
      <Link href="/">
          <a>
            <img
              src={"/Group 107.svg"}
              alt="/"
              width="70"
              height="20"
              className="cursor-pointer"
            />
          </a>
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
          </a>
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
          </a>
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
          </a>
        </Link>
       
        
      </div>
      <div className="right-line-mainpage"></div> 
    </div>
  );
};

export default Navbar;
