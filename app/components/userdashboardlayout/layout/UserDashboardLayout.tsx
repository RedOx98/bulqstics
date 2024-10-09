// components/DashboardLayout.tsx
"use client"
import { ReactNode, useState } from 'react';
import UserAsideNav from './UserAsideNav';
import UserHeader from './UserHeader';
import Image from 'next/image';
import twitter from '../../../../public/images/twitter.svg';
import instagram from '../../../../public/images/instagram.svg';
import facebook from '../../../../public/images/facebook.svg';
import linkedin from '../../../../public/images/linkedin.svg';
import tiktok from '../../../../public/images/tiktok.svg';

import Link from 'next/link';

interface UserDashboardLayoutProps {
    children: ReactNode;
}

const UserDashboardLayout = ({ children }: UserDashboardLayoutProps) => {

   

    return (
        <div className="flex h-[93vh] max-h-[93vh] md:h-screen md:max-h-screen w-full overflow-y-hidden mb-0">
            {/* Side Navigation */}
            <UserAsideNav />
            {/* Side Navigation */}

            {/* Main Content */}
            <div className="flex-1 flex flex-col w-[87%] max-w-[87%] md:w-full md:max-w-full z-0  ">
                
                {/* Header */}
                <UserHeader />
                {/* Header */}

                {/* Main Content Area */}
                <main className="flex-1 overflow-y-auto p-4  w-[100%] max-w-[100%] md:max-w-full md:w-full">
                    {children}
                </main>

                {/* Footer */}
                <footer className="bg-appTitleBgColor p-4 text-center shadow-md flex items-center justify-between w-[100%] md:w-full">
                    <div className="flex items-center justify-between gap-2">
                        <Link href="#" className="flex items-center justify-center">
                            <Image
                                src={twitter}
                                alt="Description of the image"
                                className='w-5 h-5 md:w-8 md:h-8'
                            />
                        </Link>
                        <Link href="#" className="flex items-center justify-center">
                            <Image
                                src={instagram}
                                alt="Description of the image"
                                className='w-5 h-5 md:w-8 md:h-8'
                            />
                        </Link>
                        <Link href="#" className="flex items-center justify-center">
                            <Image
                                src={facebook}
                                alt="Description of the image"
                                className='w-5 h-5 md:w-8 md:h-8'
                            />
                        </Link>
                        <Link href="#" className="flex items-center justify-center">
                            <Image
                                src={linkedin}
                                alt="Description of the image"
                                className='w-5 h-5 md:w-8 md:h-8'
                            />
                        </Link>
                        <Link href="#" className="flex items-center justify-center">
                            <Image
                                src={tiktok}
                                alt="Description of the image"
                                className='w-5 h-5 md:w-8 md:h-8'
                            />
                        </Link>
                    </div>
                    <p className='font-bold text-white text-xs md:text-base'>&copy; {new Date().getFullYear()} BULQ LOGISTICS </p>
                    <p className="hidden md:block text-white ">
                        <span className="font-semibold"> Powered By: </span>
                        <span className="font-bold"> coming soon </span>
                    </p> 
                </footer>
            </div>
        </div>
    );
};

export default UserDashboardLayout;
