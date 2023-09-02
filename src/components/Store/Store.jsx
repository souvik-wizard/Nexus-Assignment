"use client"
import AnimatedButton from "@/components/ui/AnimatedButton"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {  Scrollbar,Autoplay } from "swiper";

import Image from "next/image";

import 'swiper/css';
import "swiper/css/free-mode";
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

import './Store.module.css';

SwiperCore.use([ Scrollbar,Autoplay]);

const Store = () => {
  return (
    <section className='text-black xl:flex xl:w-full xl:justify-between xl:mx-auto xl:mt-56 2xl:mt-40 overflow-hidden'>
      <div className='flex flex-col w-full px-6 py-20 mx-auto 2xl:pl-12 gap-6 lg:w-[60%] xl:w-[30%] lg:mt-40 xl:mt-0'>
        <h1 className='text-2xl font-semibold font-jost'>Store locator</h1>
        <p className='text-sm leading-6'>
        Our consultants are available to host you in-store and provide tailored guidance on gift purchases. </p>
        <AnimatedButton text={"Find a nearby store"} isWidthFull={"lg:true"} className={"hover:text-white xl:w-[60%] hover:bg-secondary border-gray-300  text-black"} />
      </div>


      <Swiper
        slidesPerView={1}
        scrollbar={{
          hide: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        modules={[Autoplay, Scrollbar]}
        className="mySwiper xl:max-w-[60%] xl:left-16">
        <SwiperSlide>
          <Image
            src={"/assets/store1.jpg"}
            width={1280}
            height={720}
            alt="store"
            className="pl-[20px] lg:pl-0 transition-all ease-in-out duration-300 min-h-[200px] min-w-[200px] lg:min-w-[300px] lg:min-h-[300px] "
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/assets/store2.webp"}
            width={1280}
            height={720}
            alt="store"
            className="pl-[20px] lg:pl-0 transition-all ease-in-out duration-300 min-h-[200px] min-w-[200px] lg:min-w-[300px] lg:min-h-[300px] "
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/assets/store3.webp"}
            width={1280}
            height={720}
            alt="store"
            className="pl-[20px] lg:pl-0 transition-all ease-in-out duration-300 min-h-[200px] min-w-[200px] lg:min-w-[300px] lg:min-h-[300px] "
          />
        </SwiperSlide>


      </Swiper>
    </section>
  )
}

export default Store