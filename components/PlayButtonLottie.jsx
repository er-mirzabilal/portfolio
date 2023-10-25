import React from "react";
import Lottie from "lottie-react";
import playButtonAnimation from "../public/lottieanimation.json";

import { AiOutlinePlayCircle } from "react-icons/ai";

const PlayButtonAnimation = ({ hover }) => {
  return (
    <div
      style={{
        position: "relative",
        height: hover ? "100%" : "30%",
        width: hover ? "100%" : "30%",
      }}
    >
      <Lottie animationData={playButtonAnimation} loop={true} autoplay={true} />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        {hover ? (
          <AiOutlinePlayCircle className="h-24 w-24 text-white" />
        ) : (
          <AiOutlinePlayCircle className="h-4 w-4 text-white" />
        )}
      </div>
    </div>
  );
};

export default PlayButtonAnimation;
