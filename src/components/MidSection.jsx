import React from "react";
import img1 from "../assets/img/midV.png";
import img2 from "../assets/img/midHand.png";
import img3 from "../assets/img/midtick.png";
import img4 from "../assets/img/Midbulb.png";
const MidSection = () => {
  return (
    <div className=" relative lg:p-[3rem] p-[1rem] flex lg:flex-row flex-col lg:gap-0 gap-[50px] items-center justify-evenly">
      <div className="bg__gradient right-[10%]"></div>
      <div className="bg__gradient left-[1%] bottom-[100%]"></div>
      <div className="flex flex-col lg:text-left text-center">
        <h1 className="md:text-[34px] mb-[30px] text-[23px] font-semibold">
          Our company values culture
        </h1>
        <p>
          We specialize in creating visual identities for products and branda in
          your company.
        </p>
      </div>
      <div className="flex flex-col">
        {/*  */}
        <div className="flex flex-row text-center items-center gap-[30px] ">
          <div className="flex flex-col items-center w-[120px] gap-[20px] h-[100px]">
            <img className="w-[30px]" src={img1} alt="" />
            <p>Be Sincere</p>
          </div>
          <div className="flex flex-col items-center gap-[20px] h-[100px]">
            <img className="w-[30px] h-[30px] " src={img2} alt="" />
            <p>Stronger together</p>
          </div>
        </div>
        {/*  */}
        <div className="lg:mt-0 mt-[20px] text-center flex flex-row items-center gap-[30px] ">
          <div className="flex flex-col items-center w-[120px] gap-[20px] h-[100px]">
            <img className="w-[30px]" src={img3} alt="" />
            <p>Keep in Simple</p>
          </div>
          <div className="flex flex-col items-center gap-[20px] h-[100px]">
            <img className="w-[30px] h-[30px] " src={img4} alt="" />
            <p>Take Intelligent risks</p>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default MidSection;
