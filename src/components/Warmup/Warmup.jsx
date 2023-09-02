import React from 'react'
import AnimatedButton from "@/components/ui/AnimatedButton"

const Warmup = () => {
  return (
    <section className='text-black xl:flex xl:w-full xl:justify-between xl:mx-auto xl:h-[70vh] xl:mt-56 2xl:mt-16'>
      <div className='flex flex-col w-full px-6 py-20 mx-auto 2xl:pl-12 gap-6 lg:w-[60%] xl:w-[30%] lg:mt-40 xl:mt-0'>
        <p className='text-sm'>The Athenaeum</p>
        <h1 className='text-2xl font-semibold font-jost'>The warm-up </h1>
        <p className='text-sm leading-6'>
          In The Athenaeum, our digital reading room: a guide to ensuring a healthy complexion through the warmer months.</p>
        <AnimatedButton text={"Read More"} isWidthFull={"lg:true"} className={"hover:text-white xl:w-[60%] hover:bg-secondary border-gray-300  text-black"} />
      </div>
      <img
        className="pl-[20px] xl:max-w-[70%]"
        src="/assets/warmup.jpg"
        alt="banner"
      />
    </section>
  )
}

export default Warmup