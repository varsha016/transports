"use client";
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from "@/app/component/Navbar";
import Login from "@/app/component/Login";
import ProtectedRoute from "@/app/component/ProtectedRoute";
// import ContactInfo from "@/app/contactInfo/page"; // Ensure this path is correct

const CompoNavbar = () => {
    const dispatch = useDispatch();
    const { token } = useSelector((state) => state.auth);

    // State to control when to show the navbar
    const [isNavbarVisible, setIsNavbarVisible] = useState(false);

    useEffect(() => {
        // If the token is available, show the navbar
        if (token) {
            setIsNavbarVisible(true);
        } else {
            setIsNavbarVisible(false);
        }
    }, [token]); // Run this effect whenever the token changes

    return (
        <>
            <div>
                {/* Render the navbar only if the token is available */}
                <ProtectedRoute>
                    {isNavbarVisible ? (
                        <>

                            <Navbar />
                        </>
                    ) : (
                        <Login />
                    )}
                </ProtectedRoute>
            </div>
        </>
    );
}

export default CompoNavbar;
