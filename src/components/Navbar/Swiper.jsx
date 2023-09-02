"use client"
import Image from "next/image";
import SwiperCore, { Autoplay,  Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./Swiper.module.css";

SwiperCore.use([Autoplay, Pagination]);

const NavSwiper = () => {
    return (
        <Swiper
            slidesPerView={1}
            autoplay={{
                delay: 2000,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
            }}
            breakpoints={{
                320: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper cursor-pointer w-full"
        >
            <SwiperSlide >
                <div className="flex flex-col items-center gap-2 ">
                    <Image src="/assets/simg1.webp"
                        width={330}
                        height={100}
                        alt="Location"
                        className="transition-all ease-in-out duration-300 group-hover:scale-[1.1] min-h-[200px] min-w-[200px] lg:min-w-[300px] lg:min-h-[300px] " />
                    <p className="text-sm">Lessons from the lab</p>
                    <h1 className="font-jost font-semibold">The next chapter in Aesop fragrance: <br />Gloam Eau de parum </h1>
                </div>

            </SwiperSlide>
            <SwiperSlide >
                <div className="flex flex-col items-center gap-2">
                    <Image src="/assets/simg2.webp"
                        width={330}
                        height={100}
                        alt="Location"
                        className="transition-all ease-in-out duration-300 group-hover:scale-[1.1] min-h-[200px] min-w-[200px] lg:min-w-[300px] lg:min-h-[300px] " />
                    <p className="text-sm">Lessons from the lab</p>
                    <h1 className="font-jost font-semibold">The next chapter in Aesop fragrance: <br />Gloam Eau de parum </h1>
                </div>

            </SwiperSlide>
            <SwiperSlide >
                <div className="flex flex-col items-center gap-2">
                    <Image src="/assets/simg3.jpg"
                        width={330}
                        height={100}
                        alt="Location"
                        className="transition-all ease-in-out duration-300 group-hover:scale-[1.1] min-h-[200px] min-w-[200px] lg:min-w-[300px] lg:min-h-[300px] " />
                    <p className="text-sm">Lessons from the lab</p>
                    <h1 className="font-jost font-semibold">The next chapter in Aesop fragrance: <br />Gloam Eau de parum </h1>
                </div>

            </SwiperSlide>

        </Swiper>
    )
}

export default NavSwiper