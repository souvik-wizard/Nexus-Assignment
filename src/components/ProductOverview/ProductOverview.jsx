import React from 'react'
import AnimatedButton from "@/components/ui/AnimatedButton"
import Image from 'next/image'

const ProductOverview = () => {
  return (
    <section className='text-black mt-20 xl:flex xl:w-full xl:justify-between xl:mx-auto xl:h-[70vh] xl:mt-48'>
      <img
        className="pr-[20px] xl:max-w-[70%]"
        src="/assets/overviewimage.avif"
        alt="banner"
      />
      <div className='flex flex-col w-full px-6 py-20 xl:px-32 mx-auto gap-6 lg:w-[60%] xl:w-[40%] '>
        <h1 className='text-2xl font-semibold font-jost'>Post-Poo Drops has returned</h1>
        <p className='text-sm leading-6'>
          Here to make the malodorous melodious once again. Dispense this favoured formulation into the toilet bowl after flushing to effectively mask disagreeable odours.</p>
        <AnimatedButton text={"Discover Post-Poo Drops"} isWidthFull={"true"} className={"hover:text-white xl:w-[60%] hover:bg-secondary border-gray-300  text-black"} />
      </div>

    </section>
  )
}

export default ProductOverview