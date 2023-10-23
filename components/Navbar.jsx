import Image from "next/image";
import Link from "next/link";
import ALink from "./activeLink";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#0A1930");
  const [linkColor, setLinkColor] = useState("#ffff");

  const handleNav = () => {
    setNav(!nav);
  };

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
          ? "fixed w-full  h-16 shadow-sm shadow-[#72e2ae]  z-[100] ease-in-out duration-300"
          : "fixed   w-full h-16 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <Image
            src={"/navLogo.svg"}
            alt="/"
            width="85"
            height="30"
            className="cursor-pointer"
          />
        </Link>
        <div>
          <ul
            style={{ color: `${linkColor}` }}
            className="hidden items-baseline lg:flex"
          >
            <li className="ml-10 text-sm uppercase">
              <ALink href="/#about">About</ALink>
            </li>
            <li className="ml-10 text-sm uppercase ">
              <ALink href="/#Experence">Experence</ALink>
            </li>
            <li className="ml-10 text-sm uppercase ">
              <ALink href="/#projects">Projects</ALink>
            </li>
            <li className="ml-10 text-sm uppercase ">
              <ALink href="/#Blogs">Blogs</ALink>
            </li>

            <li className="ml-10 text-sm uppercase    py-1 px-3   border-solid  border-2 border-[#02CA82]">
              <ALink href="/#contact">contact</ALink>
            </li>
          </ul>
          {/*Icon */}
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className="lg:hidden"
          >
            <img
              src={"/Vector.svg"}
              alt="/"
              width="40"
              height="12"
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? "lg:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        {/* Side Drawer*/}
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#0A1930] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between text-white ">
              <Link href="/">
                <a>
                  <Image src={"/navLogo.svg"} width="50" height="25" alt="/" />
                </a>
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-sm shadow-[#72e2ae] p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-[#72e2ae] my-4 text-white ">
              <span className=" inline-flex h-20 pt-2 overflow-x-hidden animate-type animate-type-reverse whitespace-nowrap  will-change-transform">
                Full Stack Web Developer
              </span>
              <span className="box-border inline-block lg:w-1 w-1 h-4 ml-2  bg-white  lg:h-8 animate-cursor will-change-transform"></span>
            </div>
          </div>
          <div className="py-4 flex flex-col text-white ">
            <ul className="uppercase ">
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm ">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>
              <Link href="/#Experence">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Experence
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Projects
                </li>
              </Link>
              <Link href="/#Blogs">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Blogs
                </li>
              </Link>
              <Link href="/#contact">
                <li
                  onClick={() => setNav(false)}
                  className="p-2  text-sm uppercase  w-fit my-4    border-solid  border-2 border-[#02CA82]"
                >
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-sm shadow-[#72e2ae]  p-3 cursor-pointer ">
                    <FaLinkedinIn />
                  </div>
                </a>
                <a href="https://github.com" target="_blank" rel="noreferrer">
                  <div className="rounded-full shadow-sm shadow-[#72e2ae]  p-3 cursor-pointer ">
                    <FaGithub />
                  </div>
                </a>
                <Link href="/#contact">
                  <div
                    onClick={() => setNav(!nav)}
                    className="rounded-full  shadow-sm shadow-[#72e2ae]  p-3 cursor-pointer "
                  >
                    <AiOutlineMail />
                  </div>
                </Link>
                <Link href="/">
                  <div
                    onClick={() => setNav(!nav)}
                    className="rounded-full shadow-sm shadow-[#72e2ae] p-3 cursor-pointer "
                  >
                    <BsFillPersonLinesFill />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
