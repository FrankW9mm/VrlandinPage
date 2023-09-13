import React from "react";
import { headsetData } from "../assets/img";
import Blog from "../components/Blog";

const Headsets = () => {
  return (
    <div className="relative flex flex-col justify-center gap-[30px] items-center">
      <div className="bg__gradient right-[10%]"></div>
      <div className="">
        <h1 className=" relative font-semibold md:text-[32px] text-[20px]">
          Mixed Reality Headsets
        </h1>
        <div className="bg__gradient left-[20%] bottom-[15%]"></div>
      </div>
      <div className="md:w-[80%] w-full md:p-[3rem] p-[0rem] flex justify-center gap-[20px] flex-row flex-wrap">
        {headsetData.map((data, index) => {
          return <Blog key={index} {...data} />;
        })}
      </div>
    </div>
  );
};

export default Headsets;
