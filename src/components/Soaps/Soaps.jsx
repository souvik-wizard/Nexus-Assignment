import React from 'react'
import Link from 'next/link'
import { AiOutlineArrowRight } from 'react-icons/ai'
import GlobalSwiper from "../ui/GlobalSwiper"

const products = [
  { name: "Nuture Bar Soap", description: "Offers a mild yet efffective cleanse", image: "/assets/soapimage.webp" },
  { name: "Nuture Bar Soap", description: "Offers a mild yet efffective cleanse", image: "/assets/soapimage2.webp" },
  { name: "Nuture Bar Soap", description: "Offers a mild yet efffective cleanse", image: "/assets/soapimage3.webp" },
]

const Soaps = () => {
  return (
    <section className='text-black lg:flex lg:w-11/12 lg:mx-auto lg:h-[70vh] 2xl:mt-16'>
      <div className='flex flex-col w-full px-6 py-20 gap-6 xl:w-[20%] lg:w-[30%] lg:mt-40 xl:mt-0'>
        <p className='text-sm'>For the body</p>
        <h1 className='text-2xl font-semibold font-jost'>An expression of care</h1>
        <p className='text-sm leading-6'>
          Aesop formulations offer the body deserving care, to cleanse, replenish, and nourish skin. Each product is a sensory pleasure to use with its own delightful aroma.</p>
        <Link href="/" className='flex items-center gap-2'>
          See all body care
          <AiOutlineArrowRight/>
        </Link>
      </div>
      <GlobalSwiper className={"lg:translate-y-40"} productArray={products}/>
    </section>
  )
}

export default Soaps