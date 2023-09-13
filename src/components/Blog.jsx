import React from "react";

const Blog = ({ imgUrl, title, text }) => {
  return (
    <div className=" md:w-[500px] relative w-[300px] md:h-[400px] h-[200px]">
      <img
        className=" rounded-sm w-full h-full object-cover"
        src={imgUrl}
        alt=""
      />
      <div className=" absolute flex flex-col items-start justify-center bg-white/20 backdrop-blur-md md:p-[1.5rem] p-[0.5rem] md:max-w-[300px] max-w-[100%]  h-[150px] bottom-0">
        <h1 className="text-[20px]">{title}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Blog;
