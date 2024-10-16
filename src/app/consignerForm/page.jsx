"use client"
// pages/ConsignerForm.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addConsignerAction, getConsignerAction } from '../lib/features/users/usersSlice';

const ConsignerForm = () => {
    const allConsigner = useSelector(state => state.users.allConsigner)
    const dispatch = useDispatch()
    // State to manage form inputs
    const [formData, setFormData] = useState({
        consignerName: 'AK Joy',
        contactPerson: 'Roy',
        address: 'durga temple',
        town1: 'Bajaj Nagar',
        town2: 'Ranjangao',
    });

    // State to manage consigner data list
    const [consigners, setConsigners] = useState();

    // Handle input changes
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    // Handle form submission
    const handleAddConsigner = async (e) => {
        e.preventDefault();
        const data = await dispatch(addConsignerAction(formData))
        // console.log(data, "consignerName");

        setFormData({ consignerName: '', contactPerson: '', address: '', town1: '', town2: '' });
    };

    useEffect(() => {
        const fetchconsignerData = async () => {

            const data = await dispatch(getConsignerAction())
            console.log(data.payload.data, "kkk");
            setConsigners(data.payload.data)

        }
        fetchconsignerData()
        return () => {

        }
    }, [])

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center p-8">
            {/* <pre>{JSON.stringify(allConsigner, null, 2)}</pre> */}
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl mb-8">
                <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Consigner / Consignee</h2>
                <form className="space-y-6" onSubmit={handleAddConsigner}>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-gray-700 mb-1" htmlFor="consignerName">Consigner Name</label>
                            <input
                                type="text"
                                id="consignerName"
                                value={formData.consignerName}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-1" htmlFor="contactPerson">Contact Person</label>
                            <input
                                type="text"
                                id="contactPerson"
                                value={formData.contactPerson}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-1" htmlFor="address">Address</label>
                        <input
                            type="text"
                            id="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                        />
                    </div>

                    <div className='grid grid-cols-2 gap-4' >
                        <div>
                            <label className="block text-gray-700 mb-1" htmlFor="town">Town</label>

                            <input
                                type="text"
                                id="town1"
                                value={formData.town1}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                            />
                        </div>
                        <div>

                            <label className="block text-gray-700 mb-1" htmlFor="town">Town</label>
                            <input
                                type="text"
                                id="town2"
                                value={formData.town2}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                            />
                        </div>
                    </div>

                    <div className="flex justify-center  space-x-4 mt-6">
                        <button type="submit" className="px-4 py-2 bg-gray-600 w-full text-white rounded-md hover:bg-gray-700">
                            Add
                        </button>
                    </div>
                </form>
            </div>

            {/* Table */}
            <div className="bg-white shadow-lg rounded-lg w-full max-w-4xl overflow-x-auto">
                <table className="min-w-full table-auto">
                    <thead>
                        <tr className="bg-gray-500 text-white">
                            <th className="px-4 py-2 text-left">SNo</th>
                            <th className="px-4 py-2 text-left">Consigner Name</th>
                            <th className="px-4 py-2 text-left">Address</th>
                            <th className="px-4 py-2 text-left">Cntact Person</th>
                        </tr>
                    </thead>
                    <tbody>
                        {consigners?.map((consigner, index) => (
                            <tr key={consigner.id} className="border-b">
                                <td className="px-4 py-2">{index + 1}</td>
                                <td className="px-4 py-2">{consigner.consignerName}</td>
                                <td className="px-4 py-2">{consigner.address}</td>
                                <td className="px-4 py-2">{consigner.contactPerson}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ConsignerForm;
