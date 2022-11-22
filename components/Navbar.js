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
          ? "fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
      <Link href='/'>
          <a>
            <img
              src={'/navLogo.svg'}
              alt='/'
              width='70'
              height='20'
              className='cursor-pointer'
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
            <li className="ml-10 text-sm uppercase  ">
              <Link href="/#contact">Contact</Link>
            </li>
          </ul>
      
        </div>
      </div>

    
    </div>
  );
};

export default Navbar;
