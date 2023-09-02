"use client"
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { BiSearch } from 'react-icons/bi'

const Navbar = () => {

    const lnavs = [
        {
            name: "Skin Care",
            link: "/",
        },
        {
            name: "Body & Hand",
            link: "/",
        },
        {
            name: "Hair",
            link: "/",
        },
        {
            name: "Fragrance",
            link: "/",
        },
        {
            name: "Home",
            link: "/",
        },
        {
            name: "Kits & Travel",
            link: "/",
        },
        {
            name: "Gifts",
            link: "/",
        },
        {
            name: "Read",
            link: "/",
        },
        {
            name: "Stores",
            link: "/",
        },
        {
            name: "Facial Appointments",
            link: "/",
        },


    ];
    const rnavs = [
        {
            name: "Log in",
            link: "/",
        },
        {
            name: "Cabinet",
            link: "/",
        },
        {
            name: "Cart",
            link: "/",
        },
    ];

    return (

        <nav className="bg-primary border-gray-200 w-full absolute z-40">
            <div className="flex flex-wrap items-center justify-between mx-auto py-6 px-8">
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white ">

                    {lnavs.map((nav, index) => {
                        return (
                            <Link
                                href={nav.link}
                                key={index}
                                className={`text-sm block py-2 pl-3 pr-4 text-black  rounded md:bg-transparent  md:p-0`}
                            >
                                {nav.name}
                            </Link>
                        );
                    })}

                    <Link href=""><BiSearch size={22} className='text-gray-500' /></Link>
                </ul>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white ">
                        {rnavs.map((nav, index) => {
                            return (
                                <Link
                                    href={nav.link}
                                    key={index}
                                    className={`text-sm block py-2 pl-3 pr-4 text-black  rounded md:bg-transparent  md:p-0`}
                                >
                                    {nav.name}
                                </Link>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navbar