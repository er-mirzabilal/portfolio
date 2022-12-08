import Link from "next/link";
const StickyMedia = () => {
  return (

<div className="lg:visible  invisible ">



<div className="fixed bottom-0 z-10 flex flex-col flex-wrap right- p-6 ">
      <div className="right-side mb-8   mx-auto">
    
      
        <div className="email-mainpage">mirza.bilal.ahmad8@gmail.com</div>

      </div>
      <div className="flex">
        <div
          className="right-side h-48 border-r border-[#00DF8F]"
        ></div>
        <div className="right-side h-48 "></div>
      </div>
    </div>



    <div className="fixed bottom-0 z-10 flex flex-col  flex-wrap right-0 sm:p-6 p-0 mb-40">
      <div className="right-side mb-8   mx-auto">
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
      <div className="flex">
        <div
          className="right-side h-48 border-r border-[#00DF8F]"
        ></div>
        <div className="right-side h-48 "></div>
      </div>
    </div>
    </div>
  );
};

export default StickyMedia;
