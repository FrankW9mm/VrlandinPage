import React from "react";
import ModalVideo from "react-modal-video";
import "../modalVideo.scss";
import { BsPlayCircleFill } from "react-icons/bs";
import { useState } from "react";
import video from "../assets/img/video-bg.png";
const Video = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative flex justify-center p-[3rem] ">
      <div className="bg__gradient left-[-5%] bottom-[-1%]"></div>
      <div className="md:w-[70%] w-[290px] flex flex-row rounded-[20px] bg-[#534686] md:justify-evenly justify-center p-[2rem] items-center flex-wrap gap-5">
        <ModalVideo
          channel="youtube"
          autoplay
          videoId="5q6BcQq_yhw"
          isOpen={open}
          onClose={() => setOpen(false)}
        />
        <div>
          <h1 className=" font-semibold text-center md:text-[20px] text-[16px]">
            Awesome experiences with virtual reality world
          </h1>
        </div>
        <div className="relative w-[200px] h-[100px]">
          <img
            src={video}
            className="rounded-[20px] w-full h-full object-cover"
            alt=""
          />
          <BsPlayCircleFill
            onClick={() => setOpen(true)}
            className=" absolute top-[40%] left-[38%]"
            size={30}
          />
        </div>
      </div>
    </div>
  );
};

export default Video;
