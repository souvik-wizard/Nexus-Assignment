import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import AnimatedButton from '../ui/AnimatedButton'

const Banner = () => {
  return (
    <div className='relative lg:flex '>
      <Image
        className="lg:hidden"
        priority
        src="/assets/bg640.webp"
        alt="banner"
        width={1920}
        height={1080}
      />
      <img
        className="hidden lg:flex lg:h-screen xl:h-auto absolute -z-10"
        src="/assets/bg1856.webp"
        alt="banner"
      />

      <div className='lg:hidden bg-secondary  '>
        <div className=' w-11/12 flex flex-col px-[10px] py-[40px] gap-6 justify-around items-start mx-auto'>
          <p className='text-sm'>Bar Soaps</p>
          <h1 className='text-2xl'>A body care classic, reimagined</h1>
          <p className='text-sm leading-7'>Breathing new life into the humble bar soap are Nurture, Polish and Refresh—three additions to the range, each imparting a unique constellation of benefits.</p>
          <AnimatedButton text="Discover Bar Soaps" isWidthFull={true} />
        </div>
      </div>

      <div className="lg:py-48 xl:py-40 2xl:py-60 my-auto lg:pl-16 lg:flex gap-6 justify-center items-start hidden w-full">
        <p className={`text-4xl font-semibold tracking-widest font-jost`}>Aēsop</p>
        <div className='flex flex-col mt-0 w-[35%] gap-8 mr-auto ml-[8%]'>
          <p className='text-sm'>Bar Soaps</p>
          <h1 className='text-2xl'>A body care classic, reimagined</h1>
          <p className='text-sm leading-7'>Breathing new life into the humble bar soap are Nurture, Polish and Refresh—three additions to the range, each imparting a unique constellation of benefits.</p>
          <Link href="/" className='hidden lg:flex'>
            <AnimatedButton className={"hover:text-black hover:bg-primary border-primary  text-primary"} text="Discover Bar Soaps" />
          </Link>
        </div>
      </div>

    </div >


  )
}

export default Banner