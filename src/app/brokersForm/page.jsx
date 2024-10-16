"use client"
// pages/BrokersForm.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBrokerAction, getBrokersAction } from '../lib/features/users/usersSlice';

const BrokersForm = () => {
    const allBrokers = useSelector(state => state.users.allBrokers)
    const dispatch = useDispatch()
    // State to manage form inputs
    const [formData, setFormData] = useState({
        brokerName: 'AK Joy',
        contactPerson: 'sonu',
        address: ' rajgadh frot',
        panNo: '232',

    });

    // State to manage consigner data list
    const [brokers, setBrokers] = useState();

    // Handle input changes
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    // Handle form submission
    const handleAddBrokers = async (e) => {
        e.preventDefault();
        const data = await dispatch(addBrokerAction(formData))
        // console.log(data, "brokerName");

        setFormData({ brokerName: '', address: '', contactPerson: '', panNo: '' });
    };

    useEffect(() => {
        const fetchBrokersData = async () => {

            const data = await dispatch(getBrokersAction())
            console.log(data, "kkk");
            setBrokers(data.payload.broker)

        }
        fetchBrokersData()
        return () => {

        }
    }, [allBrokers])

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center p-8">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl mb-8">
                <h2 className="text-2xl  font-bold mb-4 w-full mt-2  bg-gray-800 text-white rounded-sm rounded-b-lg px-4 py-2">Brokers</h2>
                <form className="space-y-6" onSubmit={handleAddBrokers}>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-gray-700 mb-1" htmlFor="brokerName">Brokers Name</label>
                            <input
                                type="text"
                                id="brokerName"
                                value={formData.brokerName}
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



                    <div className='grid grid-cols-2 gap-4' >
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
                        <div>
                            <label className="block text-gray-700 mb-1" htmlFor="panNo">Pan No</label>

                            <input
                                type="text"
                                id="panNo"
                                value={formData.panNo}
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
                            <th className="px-4 py-2 text-left">Brokers Name</th>
                            <th className="px-4 py-2 text-left">Address</th>
                            <th className="px-4 py-2 text-left">Cntact Person</th>
                            <th className="px-4 py-2 text-left">PanNo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {brokers?.map((broker, index) => (
                            <tr key={broker.id} className="border-b">
                                <td className="px-4 py-2 border-b border-r">{index + 1}</td>
                                <td className="px-4 py-2 border-b border-r">{broker.brokerName}</td>
                                <td className="px-4 py-2 border-b border-r">{broker.address}</td>
                                <td className="px-4 py-2 border-b border-r">{broker.contactPerson}</td>
                                <td className="px-4 py-2 border-b border-r">{broker.panNo}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BrokersForm;
