"use client";

import { useRouter } from "next/navigation";  // Correct import
import React from 'react';

const Page = () => {
    const router = useRouter();  // Correct usage of useRouter

    const data = [
        { id: 1, name: "John Doe", email: "john@example.com", age: 28 },
        { id: 2, name: "Jane Smith", email: "jane@example.com", age: 34 },
        { id: 3, name: "Mike Johnson", email: "mike@example.com", age: 45 },
    ];

    return (
        <div>
            <div className='flex justify-end mr-6'>
                <button
                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-5"
                    onClick={() => router.push("/addUser")}  // Correct routing method
                >
                    Add User
                </button>
            </div>

            <div className='m-6'>
                <div className="overflow-x-auto text-gray-700 mt-5">
                    <table className="min-w-full bg-white border border-gray-500">
                        <thead>
                            <tr className="bg-gray-100 border-b">
                                <th className="py-2 px-4 text-left">ID</th>
                                <th className="py-2 px-4 text-left">Name</th>
                                <th className="py-2 px-4 text-left">Email</th>
                                <th className="py-2 px-4 text-left">Age</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item) => (
                                <tr key={item.id} className="border-b hover:bg-gray-50">
                                    <td className="py-2 px-4">{item.id}</td>
                                    <td className="py-2 px-4">{item.name}</td>
                                    <td className="py-2 px-4">{item.email}</td>
                                    <td className="py-2 px-4">{item.age}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Page;
