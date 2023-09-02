"use client"
import React, { useState } from 'react';
import Link from 'next/link'
import { AiOutlineInstagram, AiOutlineTwitter, AiFillLinkedin } from 'react-icons/ai'



const Footer = () => {

  const [inputValue, setInputValue] = useState('');
  const [isPlaceholderVisible, setPlaceholderVisible] = useState(true);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setPlaceholderVisible(!event.target.value);
  };

  const handleInputBlur = () => {
    if (inputValue === '') {
      setPlaceholderVisible(true);
    }
  };


  return (
    <section className='bg-[#252525] flex-col w-full text-white flex justify-between lg:hidden'>
      <div className='flex flex-col gap-6 px-6 py-12 border-b-2'>
        <div className='flex flex-col gap-3'>
          <p className='text-sm'>Subscribe to Aesop communications</p>
          <hr className='bg-white' />
          <div className="relative">
            <input
              type="text"
              className="border bg-[#252525] w-full border-white p-2 rounded-sm focus:outline-none"
              placeholder={isPlaceholderVisible ? 'Enter text...' : ''}
              value={inputValue}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
            />
            <div className="absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer">
              &#8594;
            </div>
          </div>
          <div className='flex items-start gap-2'>
            <input type="checkbox" id="demoCheckbox" name="checkbox" className='bg-[#252525] mt-1' value="1" />
            <p className='text-xs leading-5'>Subscribe to receive communications from Aesop. By subscribing, you confirm you have read and understood our <Link href="" className='underline underline-offset-2 cursor-pointer'>privacy policy.</Link></p>
          </div>
        </div>

        <div className='flex flex-col w-full gap-6'>
          <div className='flex justify-between gap-4 w-full'>
            <div className='flex flex-col gap-4 w-full'>
              <p className='text-sm'>Orders and support</p>
              <hr />
              <div className='flex flex-col text-xs gap-4'>
                <Link href="">Contact us </Link>
                <Link href="">FAQs </Link>
                <Link href="">Shipping </Link>
                <Link href="">Returns </Link>
                <Link href="">Order history</Link>
                <Link href="">Terms and conditions</Link>
              </div>
            </div>

            <div className='flex flex-col gap-4 w-full'>
              <p className='text-sm'>Services</p>
              <hr />
              <div className='flex flex-col text-xs gap-4'>
                <Link href="">Live assistance </Link>
                <Link href="">Corporate gifts</Link>
                <Link href="">Facial Appointments</Link>
                <Link href="">Click and Collect</Link>
                <Link href="">Video consultation</Link>
              </div>
            </div>
          </div>

          <div className='flex justify-between gap-4 w-full'>

            <div className='flex flex-col gap-4 w-full'>
              <p className='text-sm'>About</p>
              <hr />
              <div className='flex flex-col text-xs gap-4'>
                <Link href="">Our story</Link>
                <Link href="">Foundation</Link>
                <Link href="">Careers</Link>
                <Link href="">Privacy policy</Link>
                <Link href="">Accessibility</Link>
                <Link href="">Cookie Policy</Link>
              </div>
            </div>

            <div className='flex flex-col gap-4 w-full'>
              <p className='text-sm'>Sustainability</p>
              <hr />
              <p className='text-xs leading-6'>All Aesop products are vegan, and we do not test our formulations or ingredients on animals. We are Leaping Bunny approved and a Certified B Corporation. <span className='cursor-pointer'>Learn more</span></p>
            </div>
          </div>
        </div>


        <div className='flex flex-col gap-4 w-1/2'>
          <p className='text-sm'>Location preferences</p>
          <hr />
          <div className='text-xs flex flex-col gap-6'>
            <div className='flex flex-col gap-4'>
              <p>Shipping:</p>
              <Link href="" className='underline'>Hong Kong SAR, China</Link>
            </div>
            <div className='flex flex-col gap-4'>
              <p>Language:</p>
              <Link href="" className='underline'>English</Link>
              <Link href="" className='underline'>Chinese</Link>
            </div>
          </div>
        </div>
      </div>

      <div className='flex justify-between p-6 items-center'>
        <h1>
          @ Aesop
        </h1>
        <div className='flex justify-between w-1/2'>
          <AiFillLinkedin size={30} />
          <AiOutlineTwitter size={30} />
          <AiOutlineInstagram size={30} />
        </div>


      </div>

    </section>
  )
}

export default Footer