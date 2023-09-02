"use client"
import Banner from '@/components/Banner/Banner'
import Soaps from '@/components/Soaps/Soaps'
import Warmup from '@/components/Warmup/Warmup'
import Skincare from '@/components/Skincare/Skincare'
import ProductOverview from '@/components/ProductOverview/ProductOverview'
import AllProducts from '@/components/AllProducts/AllProducts'
import Store from '@/components/Store/Store'
import Message from '@/components/Message/Message'

export default function Home() {

  return (

    <main className='w-full'>
      <Banner/>
      <Soaps/>
      <Warmup />
      <Skincare/>
      <ProductOverview/>
      <AllProducts/>
      <Store/>
      <Message/>
    </main>
  )
}
