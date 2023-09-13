import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="flex justify-center">
      <div className=" w-full flex flex-col bg-purple-400/10">
        <div className="p-[3rem] flex md:flex-row flex-col gap-[20px] items-start justify-evenly ">
          <div>
            <h1 className="text-[20px] font-semibold">Light</h1>
            <p className=" cursor-pointer hover:text-[#BC3CD8]">
              Explore the VR world
            </p>
          </div>
          <div>
            <p className=" cursor-pointer hover:text-[#BC3CD8]">Weekly news</p>
            <p className=" cursor-pointer hover:text-[#BC3CD8]">Pre Sales</p>
            <p className=" cursor-pointer hover:text-[#BC3CD8]">
              Submit A Ticket
            </p>
          </div>
          <div>
            <p className=" cursor-pointer hover:text-[#BC3CD8]">Services</p>
            <p className=" cursor-pointer hover:text-[#BC3CD8]">Locations</p>
          </div>
          <div>
            <p className=" cursor-pointer hover:text-[#BC3CD8]">Show Case</p>
            <p className=" cursor-pointer hover:text-[#BC3CD8]">Support</p>
          </div>
        </div>
        <div className="flex justify-center gap-[20px] flex-row p-[1rem]">
          <BsFacebook size={32} className=" cursor-pointer" />
          <BsInstagram size={32} className=" cursor-pointer" />
          <BsTwitter size={32} className=" cursor-pointer" />
        </div>
        <div className="h-[1px] w-[200px] mx-auto mb-[10px] bg-white"></div>
        <p className="text-center mb-[10px]">@CopyRight All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
