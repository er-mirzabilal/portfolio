import prologo1 from "../public/assets/projects/prologo1.svg";
import prologo2 from "../public/assets/projects/prologo2.svg";
import Image from "next/image";
const OtherProject = () => {
  return (
    <div className="bg-[#0C1C34]  rounded-md p-4 mb-4 hover:shadow-2xl   hover:drop-shadow-[0_2px_5px_rgb(0,128,0)] shadow-lg shadow-cyan-500/50 ">
      <div className="mt-4  flex justify-between">
        <div>
          <Image src={prologo1} className="cursor-pointer" alt="/" />
        </div>
        <div>
          <Image src={prologo2} className="cursor-pointer" alt="/" />
        </div>
      </div>
      <div>
        <p className="font-bold mt-6 text-[#F0F0F0] lg:text-xl text-base">
          Integrating Algolia Search with WordPress Multisite.
        </p>
      </div>
      <div>
        <p className="mt-4 font-medium text-[#F0F0F0]  text-sm">
          A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and
          more. Available on Visual Studio Marketplace,
        </p>
      </div>
      <div className="aboutbuttonsDiv pt-4  ">
        <button className="lg:text-base text-sm font-bold  text-[#00DF8F] hover:text-white">
          VS Code
        </button>
        <button className="lg:text-base text-sm font-bold px-2 text-[#00DF8F] hover:text-white">
          Sublime Text
        </button>
        <button className="lg:text-base  text-sm font-bold px-2 text-[#00DF8F] hover:text-white">
          Atom
        </button>
      </div>
    </div>
  );
};

export default OtherProject;
