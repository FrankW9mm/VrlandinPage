import React from "react";
import bannerImg from "../assets/img/banner-img.png";
import Users from "./Users";
const Banner = () => {
  return (
    <div className=" relative lg:p-[3rem] p-[1rem] flex lg:flex-row flex-col justify-evenly items-center">
      <div className="flex flex-col items-start gap-4 w-[300px] md:w-[500px]">
        <h1 className="md:text-[46px] text-[26px]  font-bold">
          Let’s Explore Three-Dimensional visual
        </h1>
        <p className="md:text-[20px] text-[14px]">
          With virtual technology you can see the digital world feel more real
          and you can play the game with a new style.
        </p>
        <Users />
        <div className="mt-[10px] flex flex-row w-full justify-start items-center gap-7">
          <button className="font-secondary font-bold rounded-[5px] text-[16px] w-[100px] h-[40px] bg-[#BC3CD8] hover:bg-white hover:text-black duration-700 btn-1">
            Get it Now
          </button>
          <p className="text-white font-semibold hover:border-b-2 cursor-pointer">
            {" "}
            Explore Devices{" "}
          </p>
        </div>
      </div>
      <div className="md:w-[500px] w-[300px] md:h-[560px] h-[360px] ">
        <img className="w-full h-full object-contain" src={bannerImg} alt="" />
      </div>
      <div className="bg__gradient right-[0%]"></div>
    </div>
  );
};

export default Banner;
