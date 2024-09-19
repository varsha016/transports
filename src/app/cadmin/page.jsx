"use client";
import React, { useState } from 'react';
import { FaHome, FaUser, FaCog, FaSignOutAlt, FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import Link from 'next/link';
// import RootLayout from '../layout';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        //  <RootLayout showNavbar={true}>
        <div className="flex">
            <div className={`bg-gray-800 text-white ${isOpen ? 'w-64' : 'w-16'} duration-300 h-screen p-5 pt-8 relative`}>
                <div className="absolute top-2 right-2 cursor-pointer" onClick={toggleSidebar}>
                    {isOpen ? <AiOutlineClose size={24} /> : <FaBars size={24} />}
                </div>
                <div className="flex flex-col justify-between h-full">
                    <ul className="mt-4 space-y-4">
                        <li>
                            <Link href="/dashboard">
                                <p className="flex items-center space-x-4 p-2 hover:bg-gray-700 rounded-md">
                                    <FaHome size={24} />
                                    {isOpen && <span>Dashboard</span>}
                                </p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/table">
                                <p className="flex items-center space-x-4 p-2 hover:bg-gray-700 rounded-md">
                                    <FaUser size={24} />
                                    {isOpen && <span>CUsers</span>}
                                </p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/settings">
                                <p className="flex items-center space-x-4 p-2 hover:bg-gray-700 rounded-md">
                                    <FaCog size={24} />
                                    {isOpen && <span>Transport</span>}
                                </p>
                            </Link>
                        </li>
                    </ul>
                    <div>
                        <button className="flex items-center space-x-4 p-2 hover:bg-gray-700 rounded-md w-full">
                            <FaSignOutAlt size={24} />
                            {isOpen && <span>Logout</span>}
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex-grow p-6">
                {/* Main content goes here */}
                <h1 className="text-2xl font-semibold">CAdmin Dashboard</h1>
            </div>
        </div>
        // </RootLayout>
    );
};

export default Sidebar;
