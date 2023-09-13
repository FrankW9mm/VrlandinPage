import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { slider } from "../data";
const TestimonialSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 18,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
    >
      {slider.map((data, index) => {
        return (
          <SwiperSlide className="rounded-lg  p-3 min-h-[240px] bg-gradient-to-t from-[#130613] via-[#2A1428 to-[#331A35]">
            <p className="mb-8 min-h-[100px] text-[15px]  ">{data.message}</p>
            <div className="flex flex-row items-center gap-[20px]">
              <div>
                <img src={data.image} alt="" />
              </div>
              <div>
                <p className="text-[12px]">{data.name}</p>
                <p className="text-[14px] font-bold text-[#EB4468]">
                  {data.email}
                </p>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
// Our company values culture
//We specialize in creating visual identities for products and branda in your company.
