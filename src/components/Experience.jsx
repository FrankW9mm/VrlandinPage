import React from "react";
import exp1 from "../assets/img/exp-img1.png";
import exp2 from "../assets/img/exp-img2.png";
const Experience = () => {
  return (
    <div className="md:p-[3rem] p-[1rem] flex flex-col lg:flex-row lg:gap-0 gap-10 justify-evenly items-center">
      <div className="flex flex-row md:h-[400px] h-[300px]">
        <div className="md:w-[250px] w-[150px] md:h-[250px] h-[150px]">
          <img className="w-full h-full object-contain " src={exp1} alt="" />
        </div>

        <div className="md:w-[250px] w-[150px] md:h-[250px] h-[150px] self-end">
          <img className="w-full h-full object-contain" src={exp2} alt="" />
        </div>
      </div>
      <div className="flex flex-col md:w-[500px] w-[300px] gap-8">
        <h1 className="md:text-[34px] text-[23px] font-semibold">
          New Experience In Playing Game
        </h1>
        <p className="md:text-[16px] text-[12px]">
          You can try playing the game with a new style and of course a more
          real feel, like you are the main character in your game and adventure
          in this new digital world.
        </p>
        <button className=" font-secondary font-bold rounded-[5px] text-[16px] w-[100px] h-[40px]  hover:bg-white hover:text-black duration-700 btn-1">
          Get it now
        </button>
      </div>
    </div>
  );
};

export default Experience;
