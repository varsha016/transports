"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { loginAsync, setUserAndToken } from '../lib/features/users/loginSlice';

const LoginPage = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const [loginData, setLoginData] = useState({ email: 'varsha@gmail.com', password: '123' });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const resultAction = await dispatch(loginAsync(loginData));
            const response = resultAction.payload;

            if (response?.success) {
                dispatch(setUserAndToken({
                    token: response.token,
                    userType: response.userType,
                    user: response.user,
                }));

                localStorage.setItem('token', response.token); // Save token in localStorage

                // Redirect based on userType
                switch (response.userType) {
                    case "1":
                        router.push("/sidemenu");
                        break;
                    case "2":
                        router.push("/cadmin");
                        break;
                    case "3":
                        // router.push("/userdashboard");
                        router.push("/home");
                        break;
                    default:
                        console.log("Invalid user type");
                        setError("Invalid user type");
                }
            } else {
                console.log("Login failed:", response.message);
                setError(response.message || "Login failed");
            }
        } catch (error) {
            console.error("Error during login:", error);
            setError("An error occurred during login. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="bg-gray-900  p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-white mb-6">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            value={loginData.email}
                            onChange={e => setLoginData({ ...loginData, email: e.target.value })}
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            value={loginData.password}
                            onChange={e => setLoginData({ ...loginData, password: e.target.value })}
                            required
                        />
                    </div>
                    {error && (
                        <div className="mb-4 text-red-500 text-center">
                            {error}
                        </div>
                    )}
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-gray-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 w-full"
                            type="submit"
                            disabled={loading}
                        >
                            {loading ? 'Logging in...' : 'Login'}
                        </button>
                    </div>
                </form>
                <div className="mt-6 text-center">
                    <a href="#" className="text-blue-500 hover:underline text-sm">
                        Forgot your password?
                    </a>
                </div>
                <div className="mt-4 text-center">
                    <span className="text-white text-sm">Don&#39;t have an account?</span>
                    {/* <a href="/signup" className="text-blue-500 hover:underline text-sm">
                        Sign Up
                    </a> */}
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
