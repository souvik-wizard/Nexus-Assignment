"use client"
import React, { useState } from 'react';
import Link from 'next/link'
import { FiArrowUpRight } from 'react-icons/fi'



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
        <section className='bg-[#252525] flex-col w-full text-white lg:flex justify-between hidden'>
            <div className='flex w-full border-b-2 px-6 gap-6 py-12'>
                <div className='flex flex-col px-6 gap-20  w-[40%]'>
                    <div className='flex flex-col gap-4'>
                        <p className='text-lg'>Subscribe to Aesop communications</p>
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
                            <p className='text-sm leading-5'>Subscribe to receive communications from Aesop. By subscribing, you confirm you have read and understood our <Link href="" className='underline underline-offset-2 cursor-pointer'>privacy policy.</Link></p>
                        </div>
                    </div>


                    <div className='flex flex-col gap-4 w-full'>
                        <p className='text-lg'>Sustainability</p>
                        <hr />
                        <p className='text-sm leading-6'>All Aesop products are vegan, and we do not test our formulations or ingredients on animals. We are Leaping Bunny approved and a Certified B Corporation. <span className='cursor-pointer'>Learn more</span></p>
                    </div>
                </div>


                <div className='flex flex-col w-[40%] gap-6'>
                    <div className='flex justify-between gap-4 w-full'>
                        <div className='flex flex-col gap-4 w-full'>
                            <p className='text-lg'>Orders and support</p>
                            <hr />
                            <div className='flex flex-col text-sm gap-4'>
                                <Link className='flex items-center gap-1' href="">Contact us <FiArrowUpRight /> </Link>
                                <Link className='flex items-center gap-1' href="">FAQs <FiArrowUpRight /></Link>
                                <Link className='flex items-center gap-1' href="">Shipping <FiArrowUpRight /></Link>
                                <Link className='flex items-center gap-1' href="">Returns <FiArrowUpRight /></Link>
                                <Link href="">Order history</Link>
                                <Link href="">Terms and conditions</Link>
                            </div>
                        </div>

                        <div className='flex flex-col gap-4 w-full'>
                            <p className='text-lg'>Services</p>
                            <hr />
                            <div className='flex flex-col text-sm gap-4'>
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
                            <p className='text-lg'>About</p>
                            <hr />
                            <div className='flex flex-col text-sm gap-4'>
                                <Link href="">Our story</Link>
                                <Link href="">Foundation</Link>
                                <Link href="">Careers</Link>
                                <Link href="">Privacy policy</Link>
                                <Link href="">Accessibility</Link>
                                <Link href="">Cookie Policy</Link>
                            </div>
                        </div>


                        <div className='flex-col gap-4 w-full flex'>
                            <p className='text-lg'>Social media</p>
                            <hr />
                            <div className='flex flex-col text-sm gap-4'>
                                <Link className='flex items-center gap-1' href="">Instagram <FiArrowUpRight /></Link>
                                <Link className='flex items-center gap-1' href="">Twitter <FiArrowUpRight /></Link>
                                <Link className='flex items-center gap-1' href="">Linkedin <FiArrowUpRight /></Link>
                                <Link className='flex items-center gap-1' href="">WeChat <FiArrowUpRight /></Link>
                                <Link className='flex items-center gap-1' href="">Weibo <FiArrowUpRight /></Link>


                            </div>
                        </div>
                    </div>
                </div>


                <div className='flex flex-col gap-4 w-[20%]'>
                    <p className='text-lg'>Location preferences</p>
                    <hr />
                    <div className='text-sm flex flex-col gap-6'>
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

            <div className='p-6'>
                <h1>
                    @ Aesop
                </h1>
            </div>



        </section>
    )
}

export default Footer