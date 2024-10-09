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
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        mobile: '',
        password: '',
        cpassword: '',
        countryCode: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle country code change separately
    const handleCountryCodeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFormData({
            ...formData,
            countryCode: e.target.value,
        });
    };

    return (
        <div className='w-full min-h-screen md:min-h-screen bg-appBlue/20 overflow-hidden'
            style={{
                backgroundImage: `url(${shipping.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="flex min-h-screen md:min-h-screen flex-1 py-0 px-3 md:py-4 md:px-10 bg-black/70 overflow-hidden">
                <div className="flex flex-1 flex-col justify-center  py-0 md:py-4 px-1 sm:px-3 md:px-6 lg:flex-none w-[330px] md:w-[550px] lg:px-16 xl:px-16 lg:w-[900px]">
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
                                Create Your Shipping Account
                            </h2>
                            
                        </div>

                        <div className="mt-6 w-full">
                            <div>
                                <form action="#" method="POST" className="space-y-6">
                                    <div className="flex flex-col bg-appNav/55 px-2  py-4 gap-y-2 lg:gap-y-2 rounded-2xl">
                                        {/* first and last name goes here */}
                                        <div className="flex items-center justify-center w-full gap-4">
                                            <div className='w-full'>
                                                <label htmlFor="firstname" className="block text-sm font-medium leading-6 text-white">
                                                    First Name
                                                </label>
                                                <div className="mt-2">
                                                    <InputField
                                                        type="text"
                                                        id="firstname"
                                                        name="firstname"
                                                        value={formData.firstname}  // Your state value
                                                        placeholder="Enter your first name"
                                                        required={true}
                                                        onChange={(e) => setFormData({ ...formData, firstname: e.target.value })}
                                                        className="bg-white"
                                                    />
                                                </div>
                                            </div>


                                            <div className=' w-full'>
                                                <label htmlFor="lastname" className="block text-sm font-medium leading-6 text-white">
                                                    Last Name
                                                </label>
                                                <div className="mt-2">
                                                    <InputField
                                                        type="text"
                                                        id="lastname"
                                                        name="lastname"
                                                        value={formData.lastname}  // Your state value
                                                        placeholder="Enter your last name"
                                                        required={true}
                                                        onChange={(e) => setFormData({ ...formData, lastname: e.target.value })}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        {/* first and last name ends here */}

                                        {/* Email and username section goes here */}
                                        <div className="flex items-center justify-center w-full gap-4">
                                            <div className='w-full'>
                                                <label htmlFor="username" className="block text-sm font-medium leading-6 text-white">
                                                    Username
                                                </label>
                                                <div className="mt-2">
                                                    <InputField
                                                        type="text"
                                                        id="username"
                                                        name="username"
                                                        value={formData.username}  // Your state value
                                                        placeholder="choose a username"
                                                        required={true}
                                                        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                                                        className="bg-white"
                                                    />
                                                </div>
                                            </div>


                                            <div className='w-full'>
                                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                                                    Email
                                                </label>
                                                <div className="mt-2">
                                                    <InputField
                                                        type="email"
                                                        id="email"
                                                        name="email"
                                                        value={formData.email}  // Your state value
                                                        placeholder="Enter your email address"
                                                        required={true}
                                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        {/* Email and username section ends here */}

                                        {/* Number Goes Here */}
                                        <div className="flex items-center justify-center w-full gap-4">
                                            <div className=' w-full'>
                                                <label htmlFor="mobile" className="block text-sm font-medium leading-6 text-white">
                                                    Mobile Number
                                                </label>
                                                <div className="mt-2 bg-white">
                                                    <InputField
                                                        isPhone={true}
                                                        id="mobile"
                                                        name="mobile"
                                                        value={formData.mobile}  // Your state value
                                                        placeholder="Input your mobile number"
                                                        required={true}
                                                        countryCode={formData.countryCode} // Pass selected country code
                                                        onChange={handleInputChange}
                                                        onCountryCodeChange={handleCountryCodeChange} // Pass handler for country code change
                                                        className="bg-white"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        {/* Number Ends Here */}



                                        {/* Passsword, Confirm Password Goes Here */}
                                        <div className="flex items-center justify-center w-full gap-4">

                                            <div className=' w-full'>
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

                                            <div className='w-full'>
                                                <label htmlFor="cpassword" className="block text-sm font-medium leading-6 text-white">
                                                    Confirm Password
                                                </label>
                                                <div className="mt-2">
                                                    <InputField
                                                        type="password"
                                                        id="cpassword"
                                                        name="cpassword"
                                                        value={formData.cpassword}  // Your state value
                                                        placeholder="Confirm your password"
                                                        required={true}
                                                        onChange={(e) => setFormData({ ...formData, cpassword: e.target.value })}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        {/*  Passsword, Confirm Password Ends Here */}

                                    </div>

                                    <div>
                                        <Button type="submit" className='bg-appNav/70 w-full gap-3 flex justify-center items-center'>
                                            <FaUserPlus className="text-2xl" /> <span className=""> Create Account </span>
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
                                    <Button className='bg-appNav/70 w-full flex justify-center items-center'>
                                        <Link href="/signin" className=" w-full flex justify-center items-center gap-1 md:gap-3 ">
                                            <RiLoginCircleFill className="text-2xl" /> <span className=""> Login Account </span>
                                        </Link>
                                    </Button>

                                    <Button className='bg-black flex justify-center items-center'>
                                        <Link href="/" className="w-full flex justify-start items-center gap-1 md:gap-3">
                                            <IoHome className="text-lg md:text-2xl" /> <span className=""> Back to Homepage  </span>
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="relative hidden w-0 flex-1 lg:block py-16 px-3 md:flex items-center-justify-center">
                    <div className={`overflow-hidden expand animate-roundedTransition ${isPaused ? 'animation-paused' : ''
                        }`}
                        onMouseEnter={() => setIsPaused(true)}  // Pause animation on hover
                        onMouseLeave={() => setIsPaused(false)} // Resume animation on mouse leave
                    >
                        <div className="relative  w-full h-full bg-appTitleBgColor rounded-tr-[450px] rounded-bl-[450px] shadow-2xl shadow-appTitleBgColor">
                            <div className=" bg-white absolute w-full h-full rounded-tl-[450px] rounded-br-[450px] flex items-center kustify-center overflow-hidden shadow-2xl shadow-appTitleBgColor ">
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

export default page;
