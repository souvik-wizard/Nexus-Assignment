"use client";
import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineRight } from 'react-icons/ai';
import { BsSearch, BsSuitHeart } from 'react-icons/bs';
import NavSwiper from './Swiper';

const MobileNav = () => {
    const [isNavOpen, setIsNavOpen] = useState(false)

    const showNavHandler = () => {
        setIsNavOpen(prev => !prev)

        if (isNavOpen) {
            document.body.style.overflow = 'unset'

        } else {
            document.body.style.overflow = 'hidden'
        }
    }

    return (
        <div className={`flex  flex-col lg:hidden absolute w-full z-50  ${isNavOpen ? 'h-screen fixed top-0 overflow-y-scroll bg-primary transition ease-in-out text-black' : 'h-auto bg-transparent'}`}>
            <div className={`flex justify-between items-center p-6 w-full ${isNavOpen ? 'border-b border-gray-300' : 'border-none'}`}>
                <Link href="/" className={`flex items-baseline flex-col w-[30%]`}>
                    <p className={`text-2xl ${isNavOpen ? 'text-[#333333] font-semibold ' : 'text-white font-medium'} font-jost`}>Aēsop</p>
                </Link>
                <div className='flex justify-end items-center gap-8 w-[70%]'>
                    <Link href=""><BsSearch className='' /></Link>
                    <Link href=""><BsSuitHeart className='' /></Link>
                    <Link href="/" className={`flex justify-center items-center flex-col`}>
                        <p className={` text-sm`}>Cart</p>
                    </Link>
                    <div className="flex items-center w-6 ">
                        <button className="focus:outline-none" onClick={showNavHandler}>
                            {
                                isNavOpen ?
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-4 " viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 12.586L3.707 18.88a1 1 0 11-1.414-1.414L8.586 11 2.293 4.707a1 1 0 111.414-1.414L10 9.586l6.293-6.293a1 1 0 111.414 1.414L11.414 11l6.293 6.293a1 1 0 11-1.414 1.414L10 12.586z" clipRule="evenodd" />
                                    </svg> : <svg className="w-5 h-6" fill="#5fc49d" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            }
                        </button>
                    </div>
                </div>
            </div>

            <div
                className={`flex flex-col justify-start items-center gap-8 lg:hidden bg-primary tracking-widest  ${isNavOpen ? '' : 'hidden'}`}>
                <div className='w-full'>
                    <Link onClick={showNavHandler} href="/" className="w-full text-black flex justify-between items-center text-lg px-4 py-2 border-b border-gray-300">Skin Care <AiOutlineRight className='text-gray-400' /></Link>
                    <Link onClick={showNavHandler} href="/rooms" className="text-black flex justify-between items-center  text-lg px-4 py-2 border-b border-gray-300 w-full">Body & Hand <AiOutlineRight className='text-gray-400' /></Link>
                    <Link onClick={showNavHandler} href="/gallery" className="text-black flex justify-between items-center  text-lg px-4 py-2 border-b border-gray-300 w-full">Hair <AiOutlineRight className='text-gray-400' /></Link>
                    <Link onClick={showNavHandler} href="/facilities" className="text-black flex justify-between items-center  text-lg px-4 py-2 border-b border-gray-300 w-full">Fragrance <AiOutlineRight className='text-gray-400' /></Link>
                    <Link onClick={showNavHandler} href="/policies" className="text-black flex justify-between items-center  text-lg px-4 py-2 border-b border-gray-300 w-full">Home <AiOutlineRight className='text-gray-400' /></Link>
                    <Link onClick={showNavHandler} href="/contact" className="text- flex justify-between items-center  text-lg px-4 py-2 border-b border-gray-300 w-full">Kits & Travel <AiOutlineRight className='text-gray-400' /></Link>
                    <Link onClick={showNavHandler} href="/contact" className="text-black flex justify-between items-center  text-lg px-4 py-2 border-b border-gray-300 w-full">Gifts <AiOutlineRight className='text-gray-400' /></Link>
                </div>
                <div className='flex justify-around w-11/12 text-sm text-gray-500'>
                    <div className='flex flex-col gap-4'>
                        <Link href="">Read</Link>
                        <Link href="">Stores</Link>
                        <Link href="">Facial Appointments</Link>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <Link href="">Log in</Link>
                        <Link href="">Live assistance</Link>
                    </div>

                </div>

                <NavSwiper />

            </div>
        </div>
    )
}

export default MobileNav