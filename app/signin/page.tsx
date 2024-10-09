"use client"
import React, { useState } from 'react'
import Image from 'next/image';
import logo from '../../public/images/logo4.svg';
import logo2 from '../../public/images/logo5.svg';
import shipping from '../../public/images/shipping.jpg';
import Button from '../components/inputs/Button';
import Link from 'next/link';
import InputField from '../components/inputs/InputField';
import { IoHome } from "react-icons/io5";
import { FaUserPlus } from "react-icons/fa";
import { RiLoginCircleFill } from "react-icons/ri";


const page: React.FC = () => {
    const [isPaused, setIsPaused] = useState(false);

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });


    return (
        <div className='w-full min-h-screen md:max-h-screen bg-appBlue/20 overflow-hidden'
            style={{
                backgroundImage: `url(${shipping.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="flex  flex-1 py-0 px-3 md:py-10 md:px-10 bg-black/70 overflow-hidden">
                <div className="flex flex-1 flex-col justify-center  py-0 md:py-12 px-1 sm:px-3 md:px-6 lg:flex-none lg:px-20 xl:px-24 w-[330px] md:w-[550px] lg:w-[700px]">
                    <div className=" w-full max-w-sm lg:w-full lg:max-w-full bg-appTitleBgColor rounded-xl p-4 lg:p-6">
                        
                        <div className='w-full'>
                            <div className="flex items-center justify-center">
                                <Image
                                    src={logo2}
                                    alt="Description of the image"
                                    width={300}
                                    height={400}
                                    className="w-36 md:w-72"
                                />
                            </div>

                            <h2 className="flex mt-2 text-base md:text-2xl font-bold mx-auto w-10/12 md:w-96 leading-9 tracking-tight items-center justify-center text-white bg-appNav/55 px-2 md:py-1 rounded-md md:rounded-xl">
                                Login Your Shipping Account
                            </h2>
                            <p className="flex flex-col md:flex-row items-center justify-center font-semibold mt-2 text-xs md:text-sm md:leading-6 text-white">
                                <span className="mr-2"> Welcome Back, {' '} </span>
                                <Link href={'#'} className=" text-white hover:text-indigo-500">
                                    Provide your login credentials to continue
                                </Link>
                            </p>

                        </div>

                        <div className="mt-6 w-full">
                            <div>
                                <form action="#" method="POST" className="space-y-6">
                                    <div className="flex flex-col bg-appNav/55 px-2 md:px-4 lg:px-8 py-4 gap-y-2 lg:gap-y-4 rounded-lg md:rounded-xl">
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                                                Email address
                                            </label>
                                            <div className="mt-2">
                                                <InputField
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={formData.email}  // Your state value
                                                    placeholder="Enter your email"
                                                    required={true}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    className="bg-white"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                                                Password
                                            </label>
                                            <div className="mt-2">
                                                <InputField
                                                    type="password"
                                                    id="password"
                                                    name="password"
                                                    value={formData.password}  // Your state value
                                                    placeholder="Enter your password"
                                                    required={true}
                                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                                />
                                            </div>
                                        </div>
                                    </div>


                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <input
                                                id="remember-me"
                                                name="remember-me"
                                                type="checkbox"
                                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                            />
                                            <label htmlFor="remember-me" className="ml-3 block text-sm leading-6 text-white">
                                                Remember me
                                            </label>
                                        </div>

                                        <div className="text-sm leading-6">
                                            <a href="#" className="font-semibold text-white">
                                                Forgot password?
                                            </a>
                                        </div>
                                    </div>

                                    <div>
                                        <Button type="submit" className='bg-appNav/70 w-full gap-3 flex justify-center items-center'>
                                            <RiLoginCircleFill className="text-2xl" /> <span className=""> Account LogIn </span>
                                        </Button>
                                    </div>
                                </form>
                            </div>

                            <div className="mt-4">
                                <div className="relative">
                                    <div aria-hidden="true" className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-gray-200" />
                                    </div>
                                    <div className="relative flex justify-center text-sm font-medium leading-6">
                                        <span className="bg-white px-6 text-gray-900">New user? Create an account</span>
                                    </div>
                                </div>

                                <div className="mt-3 grid grid-cols-2 gap-4">
                                    <Button className='bg-appNav/70 flex justify-center items-center'>
                                        <Link href="/signup" className="w-full flex justify-center items-center gap-1 md:gap-3">
                                            <FaUserPlus className=" text-lg md:text-2xl" /> <span className="">  Create Account </span>
                                        </Link>
                                    </Button>

                                    <Button className='bg-black flex justify-center items-center'>
                                        <Link href="/" className=" w-full flex justify-start items-center gap-1 md:gap-3">
                                            <IoHome className="text-lg md:text-2xl" /> <span className="">  Back to Homepage </span>
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative hidden w-0 flex-1 lg:block p-16 md:flex items-center-justify-center ">
                    <div className={`overflow-hidden expand animate-roundedTransition ${isPaused ? 'animation-paused' : ''
                        }`}
                        onMouseEnter={() => setIsPaused(true)}  // Pause animation on hover
                        onMouseLeave={() => setIsPaused(false)} // Resume animation on mouse leave
                    >
                        <div className="relative w-full h-full bg-appTitleBgColor rounded-tr-[450px] rounded-bl-[450px] shadow-2xl shadow-appTitleBgColor">
                            <div className="bg-white absolute w-full h-full rounded-tl-[450px] rounded-br-[450px] flex items-center justify-center overflow-hidden shadow-2xl shadow-appTitleBgColor">
                                <Image
                                    src={logo}
                                    alt="Description of the image"
                                    width={100}
                                    height={100}
                                    className="bg-appWhite h-full w-full -rotate-45"
                                />
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );

}

export default page
