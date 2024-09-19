// components/ProtectedRoute.jsx
"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children }) => {
    const router = useRouter();
    const { token } = useSelector((state) => state.auth);

    useEffect(() => {
        if (!token) {
            router.push('/');
        }
    }, [token, router]);

    if (!token) {
        return null; // or a loading spinner
    }
    console.log(children, "children");

    return children;
};

export default ProtectedRoute;
