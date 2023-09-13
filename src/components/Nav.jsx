import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const Nav = () => {
  const [open, SetOpen] = useState(false);
  return (
    <div className=" relative overflow-x-clip md:p-[3rem] p-[1rem] flex flex-row justify-between items-center h-[100px]">
      <div className="bg__gradient left-[10%]"></div>
      <div>
        <h1 className=" font-primary text-[32px]">Light</h1>
      </div>
      <AiOutlineMenu
        className="lg:hidden block"
        size={32}
        onClick={() => SetOpen(true)}
      />
      {/* {open && (
        <div
          className={`absolute p-[2rem] flex flex-col items-center justify-evenly z-10  md:w-[400px] w-[250px] h-[300px] bg-purple-400/10 backdrop-blur-lg ${
            open
              ? `translate-y-[0%] transition-transform duration-[1s] ease-in-out`
              : `translate-x-[100%] transition-transform duration-[1s] ease-in-out `
          }  top-0 right-0`}
        >
          <AiOutlineClose size={32} onClick={() => SetOpen(false)} />
          <a
            className=" hover:text-[#BC3CD8] hover:underline underline-offset-8 duration-500"
            href="#home"
          >
            Home
          </a>
          <a
            className=" hover:text-[#BC3CD8] hover:underline underline-offset-8 duration-500"
            href="#company"
          >
            Company
          </a>
          <a
            className=" hover:text-[#BC3CD8] hover:underline underline-offset-8 duration-500"
            href="#product"
          >
            Features
          </a>
          <a
            className=" hover:text-[#BC3CD8] hover:underline underline-offset-8 duration-500"
            href="#login"
          >
            Login
          </a>
          <button className=" font-secondary font-bold rounded-[5px] text-[16px] w-[100px] h-[40px] bg-[#BC3CD8] hover:bg-white hover:text-black duration-700 btn-1">
            Sign Up
          </button>
        </div>
      )} */}

      <div
        className={`absolute 
        p-[2rem] flex flex-col items-center justify-evenly z-10 rounded-b-2xl  md:w-[400px] w-[250px] h-[300px] bg-purple-400/10 backdrop-blur-3xl ${
          open
            ? `translate-y-[0%] transition-transform duration-[1s] ease-in-out`
            : `translate-y-[-100%] transition-transform duration-[1s] ease-in-out `
        }  top-0 right-0`}
      >
        <AiOutlineClose size={32} onClick={() => SetOpen(false)} />
        <a
          className=" hover:text-[#BC3CD8] hover:underline underline-offset-8 duration-500"
          href="#home"
        >
          Home
        </a>
        <a
          className=" hover:text-[#BC3CD8] hover:underline underline-offset-8 duration-500"
          href="#company"
        >
          Company
        </a>
        <a
          className=" hover:text-[#BC3CD8] hover:underline underline-offset-8 duration-500"
          href="#product"
        >
          Features
        </a>
        <a
          className=" hover:text-[#BC3CD8] hover:underline underline-offset-8 duration-500"
          href="#login"
        >
          Login
        </a>
        <button className=" font-secondary font-bold rounded-[5px] text-[16px] w-[100px] h-[40px] bg-[#BC3CD8] hover:bg-white hover:text-black duration-700 btn-1">
          Sign Up
        </button>
      </div>

      <div className="  hidden lg:flex flex-row gap-[50px] items-center">
        <a
          className=" hover:text-[#BC3CD8] hover:underline underline-offset-8 duration-500"
          href="#home"
        >
          Home
        </a>
        <a
          className=" hover:text-[#BC3CD8] hover:underline underline-offset-8 duration-500"
          href="#company"
        >
          Company
        </a>
        <a
          className=" hover:text-[#BC3CD8] hover:underline underline-offset-8 duration-500"
          href="#product"
        >
          Features
        </a>
        <a
          className=" hover:text-[#BC3CD8] hover:underline underline-offset-8 duration-500"
          href="#login"
        >
          Login
        </a>
        <button className=" font-secondary font-bold rounded-[5px] text-[16px] w-[100px] h-[40px] bg-[#BC3CD8] hover:bg-white hover:text-black duration-700 btn-1">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Nav;
