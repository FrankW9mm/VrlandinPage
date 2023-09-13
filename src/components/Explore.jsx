import React from "react";
import ExploreImg from "../assets/img/Explore1.png";
const Explore = () => {
  return (
    <div className="md:p-[3rem] p-[1rem] flex justify-center">
      <div className="flex lg:flex-row flex-col-reverse lg:gap-0 gap-[30px] w-full justify-evenly items-center">
        <div className="md:w-[500px] gap-[30px] flex flex-col w-[300px]">
          <h1 className="md:text-[42px] text-[26px]  font-bold">
            Explore product in new way
          </h1>
          <p className="text-[20px]">
            We specilized in creating visual identities for products and brand
            in your Company
          </p>
          <div className=" flex md:flex-row flex-col md:gap-[50px] gap-[20px] justify-start">
            <input
              placeholder="Enter Your Email"
              className="rounded-[10px] p-[10px] focus:outline-none bg-purple-400/10 w-[300px] h-[50px]"
              type="email"
              name=""
              id=""
            />
            <button className="font-secondary font-bold rounded-[5px] text-[16px] w-[100px] h-[50px] bg-[#BC3CD8] hover:bg-white hover:text-black duration-700 btn-1">
              Send
            </button>
          </div>
        </div>
        <div className="md:w-[500px] w-[290px] md:h-[400px] h-[300px]">
          <img
            className=" rounded-[20px] w-full h-full  object-cover"
            src={ExploreImg}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Explore;
