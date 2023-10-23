import Marquee from "react-easy-marquee";
import awsLogo from "../public/assets/skills/aws.png";
import cssLogo from "../public/assets/skills/css.png";
import firebaseLogo from "../public/assets/skills/firebase.png";
import githubLogo from "../public/assets/skills/github1.png";
import htmlLogo from "../public/assets/skills/html.png";
import jsLogo from "../public/assets/skills/javascript.png";
import mongoLogo from "../public/assets/skills/mongo.png";
import nextLogo from "../public/assets/skills/nextjs.png";
import reactLogo from "../public/assets/skills/react.png";
import shopifyLogo from "../public/assets/skills/shopify.png";
import tailwindLogo from "../public/assets/skills/tailwind.png";
import Image from "next/image";

const skills = [
  { name: "AWS", logo: awsLogo },
  { name: "CSS", logo: cssLogo },
  { name: "Firebase", logo: firebaseLogo },
  { name: "GitHub", logo: githubLogo },
  { name: "HTML", logo: htmlLogo },
  { name: "JavaScript", logo: jsLogo },
];
const moreSkills = [
  { name: "MongoDB", logo: mongoLogo },
  { name: "Next.js", logo: nextLogo },
  { name: "React.js", logo: reactLogo },
  { name: "Shopify", logo: shopifyLogo },
  { name: "Tailwind", logo: tailwindLogo },
];

const Skill = ({ name, logo }) => {
  return (
    <div className="py-5 px-8 bg-[#0C1C34] mr-4 shadow-2xl cursor-pointer  rounded-2xl text-[#00DF8F] hover:text-white  font-semibold flex justify-center gap-2 ">
      <Image src={logo} alt={name} width={24} height={24} />
      {name}
    </div>
  );
};

const Skills = () => {
  return (
    <div className="shadow-2xl rounded-md p-4 mb-4">
      <div className="flex mb-16 ">
        <h2 className="text-xl  ">Skills</h2>
        <div className="h-0.5 lg:w-[433px] lg:ml-4 mt-6 border border-[#F0F0F0] lg:visible invisible"></div>
      </div>
      <Marquee
        duration={6000}
        axis="X"
        width="100%"
        pauseOnHover={true}
        // reverse={true}
      >
        {skills.map((skill) => (
          <Skill key={skill.name} name={skill.name} logo={skill.logo} />
        ))}
      </Marquee>
      <Marquee
        duration={9000}
        axis="X"
        width="100%"
        pauseOnHover={true}
        reverse={true}
      >
        {moreSkills.map((skill) => (
          <Skill key={skill.name} name={skill.name} logo={skill.logo} />
        ))}
      </Marquee>
    </div>
  );
};

export default Skills;
