"use client"
import Image from "next/image";
import SwiperCore, { Autoplay, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import 'swiper/css/scrollbar';

import "./GlobalSwiper.module.css";

SwiperCore.use([Autoplay, Pagination,]);



export default function productCarousel({ productArray,className }) {
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: true,
                    pauseOnMouseEnter: true,
                }}
                scrollbar={{
                    hide: false,
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1440: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
                modules={[Autoplay, Pagination,  Scrollbar]}
                className={`mySwiper cursor-pointer ${className}`}
            >
                {productArray.map((product, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className="flex group items-center flex-col  lg:p-8 p-4 gap-4 ">
                                <Image
                                    src={product.image}
                                    width={600}
                                    height={400}
                                    alt="product"
                                    className=" transition-all ease-in-out duration-300 min-h-[200px] min-w-[200px] lg:min-w-[300px] lg:min-h-[300px] "
                                />
                                <div className="flex flex-col justify-center items-center flex-grow-1">
                                    <h2 className="hover:underline hover:underline-offset-2">
                                        {product.name}
                                    </h2>
                                    <p className="text-sm my-2">
                                        {product.description}
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </>
    );
}
