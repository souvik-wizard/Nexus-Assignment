"use client"
import Image from "next/image";
import SwiperCore, { Autoplay, Pagination, Scrollbar, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { AiOutlineArrowRight } from 'react-icons/ai'

import "swiper/css";
import "swiper/css/free-mode";
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';



import "./AllProducts.module.css";

SwiperCore.use([Autoplay, Pagination, Navigation]);

const AllProducts = () => {

  return (
    <div className="xl:mt-32">
      <div className='text-black flex flex-col w-full xl:hidden px-8 py-20 gap-6'>
        <p className='text-sm'>For the home</p>
        <h1 className='text-2xl font-semibold font-jost'>Domestic pleasures</h1>
        <p className='text-sm leading-6'>
          Our range of aromatic formulations for the home are practical and pleasing in equal measure.</p>
        <Link href="/" className='flex items-center gap-2'>
          See all Home
          <AiOutlineArrowRight />
        </Link>
      </div>

      <Swiper
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
          1280: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Scrollbar, Navigation]}
        className={`mySwiper cursor-pointer text-black`}
      >
        <SwiperSlide>
          <div className='hidden xl:flex flex-col px-6 py-20 gap-6 w-full xl:ml-24 xl:mt-0'>
            <p className='text-sm'>For the home</p>
            <h1 className='text-2xl font-semibold font-jost'>Domestic pleasures</h1>
            <p className='text-sm leading-6'>
              Our range of aromatic formulations for the home are practical and pleasing in equal measure.</p>
            <Link href="/" className='flex items-center gap-2'>
              See all Home              <AiOutlineArrowRight />
            </Link>
          </div>

          <div className="xl:hidden flex group items-center flex-col lg:p-8 p-4 gap-4 ">
            <Image
              src="/assets/allproducts3.webp"
              width={400}
              height={400}
              alt="product"
              className=" transition-all ease-in-out duration-300 min-h-[200px] min-w-[200px] lg:min-w-[300px] lg:min-h-[300px] "
            />
            <div className="flex flex-col justify-center items-center flex-grow-1">
              <h2 className="hover:underline hover:underline-offset-2">
                Lucean facial concentrate
              </h2>
              <p className="text-sm my-2">
                A vitamin c rich serum
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex group items-center flex-col lg:p-8 p-4 gap-4 ">
            <Image
              src="/assets/allproducts.avif"
              width={400}
              height={400}
              alt="product"
              className=" transition-all ease-in-out duration-300 min-h-[200px] min-w-[200px] lg:min-w-[300px] lg:min-h-[300px] "
            />
            <div className="flex flex-col justify-center items-center flex-grow-1">
              <h2 className="hover:underline hover:underline-offset-2">
                Lucean facial concentrate
              </h2>
              <p className="text-sm my-2">
                A vitamin c rich serum
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex group items-center flex-col lg:p-8 p-4 gap-4 ">
            <Image
              src="/assets/allproducts2.webp"
              width={400}
              height={400}
              alt="product"
              className=" transition-all ease-in-out duration-300 min-h-[200px] min-w-[200px] lg:min-w-[300px] lg:min-h-[300px] "
            />
            <div className="flex flex-col justify-center items-center flex-grow-1">
              <h2 className="hover:underline hover:underline-offset-2">
                Lucean facial concentrate
              </h2>
              <p className="text-sm my-2">
                A vitamin c rich serum
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex group items-center flex-col lg:p-8 p-4 gap-4 ">
            <Image
              src="/assets/allproducts.avif"
              width={400}
              height={400}
              alt="product"
              className=" transition-all ease-in-out duration-300 min-h-[200px] min-w-[200px] lg:min-w-[300px] lg:min-h-[300px] "
            />
            <div className="flex flex-col justify-center items-center flex-grow-1">
              <h2 className="hover:underline hover:underline-offset-2">
                Lucean facial concentrate
              </h2>
              <p className="text-sm my-2">
                A vitamin c rich serum
              </p>
            </div>
          </div>
        </SwiperSlide>


        <SwiperSlide>
          <div className="flex group items-center flex-col lg:p-8 p-4 gap-4 ">
            <Image
              src="/assets/allproducts2.webp"
              width={400}
              height={400}
              alt="product"
              className=" transition-all ease-in-out duration-300 min-h-[200px] min-w-[200px] lg:min-w-[300px] lg:min-h-[300px] "
            />
            <div className="flex flex-col justify-center items-center flex-grow-1">
              <h2 className="hover:underline hover:underline-offset-2">
                Lucean facial concentrate
              </h2>
              <p className="text-sm my-2">
                A vitamin c rich serum
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex group items-center flex-col lg:p-8 p-4 gap-4 ">
            <Image
              src="/assets/allproducts3.webp"
              width={400}
              height={400}
              alt="product"
              className=" transition-all ease-in-out duration-300 min-h-[200px] min-w-[200px] lg:min-w-[300px] lg:min-h-[300px] "
            />
            <div className="flex flex-col justify-center items-center flex-grow-1">
              <h2 className="hover:underline hover:underline-offset-2">
                Lucean facial concentrate
              </h2>
              <p className="text-sm my-2">
                A vitamin c rich serum
              </p>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
}

export default AllProducts