import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

export default function Swiperrr() {
  return (
    <div className="container mb-5">
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper w-[80%] h-[500px] rounded-2xl mb- max-lg:h-[350px] max-md:h-[300px]  max-sm:h-[250px]"
        loop={true}
      >
        <SwiperSlide className=" ">
          <img
            src="https://images.uzum.uz/ct2q6ab4nkdilc6cug9g/main_page_banner.jpg"
            alt=""
            className="bg-no-repeat bg-center bg-contain h-full w-full"
          />
        </SwiperSlide>
        <SwiperSlide className=" ">
          <img
            src="https://images.uzum.uz/ct2attbvgbkpg1nobsmg/main_page_banner.jpg"
            alt=""
            className="bg-no-repeat bg-center bg-cover h-full w-full"
          />
        </SwiperSlide>{" "}
        <SwiperSlide className="">
          <img
            src="https://images.uzum.uz/ct2ue9c5j42b32f3m4c0/main_page_banner.jpg"
            alt=""
            className="bg-no-repeat bg-center bg-cover h-full w-full"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
