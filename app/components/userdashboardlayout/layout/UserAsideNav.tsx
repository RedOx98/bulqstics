"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaAddressCard, FaTruck } from "react-icons/fa";
import { FaHandHoldingDollar, FaListCheck } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { RiCustomerServiceFill } from "react-icons/ri";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "../../../../public/images/logo5.svg";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";


const UserAsideNav: React.FC = () => {
    const pathname = usePathname(); // Replaces router.pathname
    const [isCollapsed, setIsCollapsed] = useState(false); // Track toggle state

    // Toggle the sidebar collapse
    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <aside
            className={`relative h-full md:h-screen items-center justify-start bg-gray-800 text-white flex flex-col p-2 md:p-4 transition-all duration-300 ${isCollapsed ? "w-12" : " w-[266px] md:w-64"
                }`}
        >
            {/* Toggle Button */}
            <button
                onClick={toggleSidebar}
                className="absolute top-2 md:top-4 right-2 md:right-2 bg-gray-600 p-2 rounded-md text-white"
            >
                {isCollapsed ? <FaArrowAltCircleRight /> : <FaArrowAltCircleLeft />
}
            </button>

            <div className=" font-semibold mb-6 border-b-2 border-white mt-6 md:mt-0">
                <div className="sm:flex justify-start flex-row py-3 pr-3 pl-2">
                    <div className="flex items-center justify-start flex-row">
                        <img
                            className="w-5 md:w-10 h-5 md:h-10"
                            src="https://i.ibb.co/QMddNDb/Ellipse-14.png"
                            alt="individual person"
                        />
                        {/* Show name and email only when expanded */}
                        {!isCollapsed && (
                            <div className="ml-2 pr-2 md:pr-0">
                                <p className="text-[10px] md:text-sm leading-4 font-semibold text-white">
                                    Umar Ibrahim A.
                                </p>
                                <p className="font-normal text-[8px] md:text-xs leading-3 text-white ">
                                    umaribrahim@gmail.com
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <nav className="flex flex-col space-y-0 md:space-y-2">
                <Link
                    href="/pages/userdashboard"
                    className={`px-1 md:px-3 gap-2 md:gap-4 py-2 rounded-md flex items-center justify-start font-semibold  ${pathname === "/pages/userdashboard"
                            ? "bg-gray-700"
                            : "hover:bg-gray-700"
                        }`}
                >
                    <span className="md:text-xl text-sm">
                        <MdDashboard />
                    </span>
                    {!isCollapsed && <p className="md:text-xl text-sm">OVERVIEW</p>}
                </Link>
                <Link
                    href="/pages/userdashboard/trackinglist"
                    className={`px-1 md:px-3 gap-2 md:gap-4 py-2 rounded-md flex items-center justify-start ${pathname === "/pages/userdashboard/trackinglist"
                            ? "bg-gray-700"
                            : "hover:bg-gray-700"
                        }`}
                >
                    <span className="md:text-xl text-sm">
                        <FaTruck />
                    </span>
                    {!isCollapsed && <p className="md:text-xl text-sm">Tracking List</p>}
                </Link>
                <Link
                    href="/pages/userdashboard/orderlist"
                    className={`px-1 md:px-3 gap-2 md:gap-4 py-2 rounded-md flex items-center justify-start ${pathname === "/pages/userdashboard/orderlist"
                            ? "bg-gray-700"
                            : "hover:bg-gray-700"
                        }`}
                >
                    <span className="md:text-xl text-sm ">
                        <FaListCheck />
                    </span>
                    {!isCollapsed && <p className="md:text-xl text-sm">Orders</p>}
                </Link>
                <Link
                    href="/pages/userdashboard/useraddress"
                    className={`px-1 md:px-3 gap-2 md:gap-4 py-2 rounded-md flex items-center justify-start ${pathname === "/pages/userdashboard/useraddress"
                            ? "bg-gray-700"
                            : "hover:bg-gray-700"
                        }`}
                >
                    <span className="md:text-xl text-sm">
                        <FaAddressCard />
                    </span>
                    {!isCollapsed && <p className="md:text-xl text-sm">Address</p>}
                </Link>
                <Link
                    href="/pages/userdashboard/userpayment"
                    className={`px-1 md:px-3 gap-2 md:gap-4 py-2 rounded-md flex items-center justify-start ${pathname === "/pages/userdashboard/userpayment"
                            ? "bg-gray-700"
                            : "hover:bg-gray-700"
                        }`}
                >
                    <span className="md:text-xl text-sm">
                        <FaHandHoldingDollar />
                    </span>
                    {!isCollapsed && <p className="md:text-xl text-sm">Payment Method</p>}
                </Link>
            </nav>

            <div className=" absolute flex flex-col w-full bottom-16 md:bottom-24 items-start justify-start md:items-start md:justify-center pl-2 md:pl-0 md:pr-4 ">
                <Link
                    href="/pages/userdashboard/usercustomercare"
                    className={`md:w-full px-1 md:px-3 gap-2 md:gap-4 py-1 md:py-2 rounded-md flex items-center justify-start ${pathname === "/pages/userdashboard/usercustomercare"
                        ? "bg-gray-700"
                        : "hover:bg-gray-700"
                        }`}
                >
                    <span className="md:text-xl text-sm">
                        <RiCustomerServiceFill />
                    </span>
                    {!isCollapsed && <p className="md:text-xl text-sm">Customer Care</p>}
                </Link>

                <Link
                    href="/pages/userdashboard/usersettings"
                    className={`md:w-full px-1 md:px-3 gap-2 md:gap-4 py-1 md:py-2  rounded-md flex items-center justify-start ${pathname === "/pages/userdashboard/usersettings"
                        ? "bg-gray-700"
                        : "hover:bg-gray-700"
                        }`}
                >
                    <span className="md:text-xl text-sm">
                        <IoMdSettings />
                    </span>
                    {!isCollapsed && <p className="md:text-xl text-sm">Settings</p>}
                </Link>

                <Link
                    href="/pages/userdashboard/usersettings"
                    className={`md:w-full px-1 md:px-3 gap-2 md:gap-4  py-1 md:py-2 rounded-md flex items-center justify-start ${pathname === "/pages/userdashboard/usersettings"
                        ? "bg-red-700"
                        : "hover:bg-red-800"
                        }`}
                >
                    <span className="md:text-xl text-sm">
                        <IoMdSettings />
                    </span>
                    {!isCollapsed && <p className="md:text-xl text-sm">LOGOUT</p>}
                </Link>
               
            </div>

            <div className="absolute flex items-center justify-center w-full bottom-0 left-0 pb-2 border-t-2 border-white pt-2">
                <Image
                    src={logo}
                    alt="Description of the image"
                    width={`${isCollapsed ? 40 : 150}`}
                    height={isCollapsed ? 40 : 150}
                    className="w-24 md:w-48"
                />
            </div>
        </aside>
    );
};

export default UserAsideNav;
