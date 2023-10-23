import React, { useState, useRef } from "react";

function VideoModal({ isOpen, onClose }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!isPlaying) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    // <Modal isOpen={isOpen} onRequestClose={onClose} contentLabel="Video Modal">
    <div className="relative mb-0 w-full h-full">
      <video
        src="Capsule.webm"
        className="w-full h-full object-cover"
        ref={videoRef}
        onClick={togglePlay}
      ></video>
    </div>
    // </Modal>
  );
}

export default VideoModal;
