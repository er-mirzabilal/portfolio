import React, { useState, useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";
import ReactModal from "react-modal";

const VideoModal = ({ isOpen, onClose }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Video Modal"
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50"
    >
      <div className="bg-[#0a1322] sm:w-80 md:w-96 lg:w-[900px] h-93 flex flex-col  rounded-lg shadow-md">
        <div className="flex items-center justify-between px-3">
          {" "}
          <div className="flex ">
            <h2 className="text-xl  ">Video</h2>
            <div className="h-0.5 lg:w-[433px] lg:ml-4 mt-6 border border-[#F0F0F0] lg:visible invisible"></div>
          </div>
          <div
            onClick={onClose}
            className="w-10 h-10 rounded-full flex items-center justify-center bg-green-500 hover:bg-white text-white hover:text-[#02CA82] cursor-pointer m-3 shadow-lg shadow-cyan-500/50 "
          >
            <AiOutlineClose />
          </div>
        </div>

        <div className="flex-grow p-4">
          <video
            src="VID-20230926-WA0004.mp4"
            ref={videoRef}
            className="w-full h-full"
          />

          <div className="lg:mx-6 flex justify-center">
            <button
              className={`border rounded-lg lg:w-[530px] p-4 w-full mt-2  font-bold shadow-lg shadow-cyan-500/50   ${
                !isPlaying
                  ? "border-[#02CA82] text-[#02CA82] hover:border-white hover:text-white "
                  : "border-white text-white hover:border-[#02CA82] hover:text-[#02CA82] "
              }`}
              onClick={togglePlay}
            >
              {isPlaying ? "Pause" : "Play"}
            </button>
          </div>
        </div>
      </div>
    </ReactModal>
  );
};

export default VideoModal;
