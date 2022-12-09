import prologo1 from "../public/assets/projects/prologo1.svg";
import prologo2 from "../public/assets/projects/prologo2.svg";
import Image from "next/image";
const OtherProject = () => {
  return (
    <div
      className="bg-[#0C1C34] shadow-2xl rounded-md p-4 mb-4"
    >
      <div className="mt-4  flex justify-between">
        <div>
          {" "}
          <Image src={prologo1} className=" " alt="/" />
        </div>
        <div>
          {" "}
          <Image src={prologo2} className=" " alt="/" />
        </div>
      </div>
      <div>
        <p className="font-bold mt-6 lg:text-xl text-base">
          Integrating Algolia Search with WordPress Multisite.
        </p>
      </div>
      <div>
        <p className="mt-4 font-medium  text-sm">
          A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and
          more. Available on Visual Studio Marketplace,{" "}
        </p>
      </div>
      <div className="aboutbuttonsDiv pt-4  ">
        <button className="lg:text-base text-sm font-bold  text-[#00DF8F]">VS Code</button>
        <button className="lg:text-base text-sm font-bold px-2 text-[#00DF8F]">
          Sublime Text
        </button>
        <button className="lg:text-base  text-sm font-bold px-2 text-[#00DF8F]">
          Atom
        </button>
      </div>
    </div>
  );
};

export default OtherProject;
