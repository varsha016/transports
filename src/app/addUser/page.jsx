"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";
import axios from 'axios';

// import { useAppDispatch } from '../lib/hooks';


const AddUserPage = () => {
    const route = useRouter();
    // const dispatch = useAppDispatch()
    const [loading, setLoading] = useState(false);
    const [compnys, setCompnys] = useState()
    // const [compnys, setCompnys] = useState()
    const [buttonDisable, setButtonDisable] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        userType: '',
    });


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };



    const handleSubmit = async (e) => {
        // e.preventDefault();
        // const data = dispatch(addUsers())
        e.preventDefault();
        try {
            setLoading(true);
            const response = await axios.post('/api/addUser', formData);
            console.log(response.data, 'response');
            route.push('/home');
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    };
    const [getUsersData, setgetUsersData] = useState()
    const getUsers = async (e) => {

        try {
            setLoading(true);
            const response = await axios.get('/api/getusertype');
            console.log(response.data, 'response');
            setgetUsersData(response?.data)
            // route.push('/home');
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    };

    const [getCompaniesData, seCompaniesDataData] = useState()
    const getCompanies = async (e) => {

        try {
            setLoading(true);
            const response = await axios.get('/api/getcompanies');
            console.log(response.data, 'response');
            seCompaniesDataData(response?.data)
            // route.push('/home');
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    };


    useEffect(() => {
        //         if (getUsersData) {

        //             getCompanies()
        // }
        getUsers()
        getCompanies()



    }, [])

    useEffect(() => {
        if (
            formData.email.length > 0 &&
            formData.password.length > 0 &&
            formData.name.length > 0 &&
            formData.userType.length > 0
        ) {
            setButtonDisable(false);
        } else {
            setButtonDisable(true);
        }
    }, [formData]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Add Users</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter your admin name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="userType">
                            User Type
                        </label>
                        <select
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            id="userType"
                            name="userType"
                            value={formData.userType}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select your userType</option>
                            {getUsersData?.map((item, i) => (
                                <option key={i} value={item.type}>
                                    {item.type}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Conditionally render the company dropdown */}
                    {formData.userType !== 'admin' && formData.userType !== '' && (
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="company">
                                Company
                            </label>
                            <select
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                                id="company"
                                name="company"
                                value={compnys}
                                onChange={e => setCompnys(e.target.value)}
                                required
                            >
                                <option value="">Select your company</option>
                                {getCompaniesData?.map((item, i) => (
                                    <option key={i} value={item.name}>
                                        {item.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    )}
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 w-full"
                            type="submit"
                        >
                            Add Users
                        </button>
                    </div>
                </form>
                <div className="mt-6 text-center">
                    {/* <a href="/login" className="text-blue-500 hover:underline text-sm">
                        Already have an account? Login
                    </a> */}
                </div>
            </div>
        </div>
    );
};

export default AddUserPage;
