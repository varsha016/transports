// components/ProtectedRoute.jsx
"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children }) => {
    const router = useRouter();
    const { token } = useSelector((state) => state.auth);
    const [loading, setLoading] = useState(true); // Track loading state

    useEffect(() => {
        // Simulate checking the token
        if (!token) {
            router.push('/'); // Redirect to login page if no token
        } else {
            setLoading(false); // If token exists, set loading to false
        }
    }, [token, router]);

    if (loading) {
        return <div className='text-lg bg-black'>Loading...</div>; // Show loading indicator while checking
    }

    return children; // Render the children if token exists
};

export default ProtectedRoute;
