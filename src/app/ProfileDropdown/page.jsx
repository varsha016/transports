"use client"
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UserIcon, CogIcon, LogoutIcon } from "@heroicons/react/outline";
import Image from "next/image";
import avatar from "../../asset/image/girl-6486470_1280.jpg"; // Example profile image
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../lib/features/users/loginSlice';
import { useRouter } from 'next/navigation';

const ProfileDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Handle click outside to close dropdown
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false); // Close the dropdown
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);

    const dispatch = useDispatch();
    const router = useRouter();

    // Extract necessary auth state
    const { isAuthenticated, token, userType } = useSelector((state) => state.auth);
    console.log("Authenticated:", isAuthenticated, "Token:", token, "UserType:", userType);

    const handleLogout = () => {
        dispatch(logout());
        setIsOpen(false);
        router.push('/'); // Redirect to login page after logout
    };

    // If token is not available, redirect to login page immediately
    useEffect(() => {
        if (!token) {
            router.push('/'); // Redirect to login page if no token
        }
    }, [token, router]);

    return (
        <div className="relative inline-block text-left z-10" ref={dropdownRef}>
            {/* Profile Button */}
            <div>
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center focus:outline-none"
                >
                    <motion.div
                        whileHover={{ scale: 1.1 }} // Scale the avatar on hover
                        transition={{ duration: 0.2 }} // Animation duration
                    >
                        <Image
                            src={avatar}
                            alt="User Avatar"
                            className="w-10 h-10 rounded-full"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ y: 0 }} // Initial position
                        animate={{ y: isOpen ? 5 : 0 }} // Move down when open
                        transition={{ duration: 0.2 }} // Animation duration
                        className="ml-2"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-5 h-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </motion.div>
                </button>
            </div>

            {/* Dropdown Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 w-48 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                    >
                        <div className="py-1" role="none">
                            {/* Profile Option */}
                            <a
                                href="#profile"
                                className="flex items-center px-4 py-2 text-md text-gray-700 hover:bg-gray-100"
                                role="menuitem"
                            >
                                <UserIcon className="w-5 h-5 mr-2 text-gray-500" />
                                Profile
                            </a>
                            {/* Settings Option */}
                            <a
                                href="#settings"
                                className="flex items-center px-4 py-2 text-md text-gray-700 hover:bg-gray-100"
                                role="menuitem"
                            >
                                <CogIcon className="w-5 h-5 mr-2 text-gray-500" />
                                Settings
                            </a>
                            {/* Logout Option */}
                            <a
                                href="#"
                                onClick={handleLogout}
                                className="flex items-center px-4 py-2 text-md font-bold text-red-800 hover:bg-gray-100"
                                role="menuitem"
                            >
                                <LogoutIcon className="w-5 h-5 mr-2 text-red-800" />
                                Logout
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ProfileDropdown;
