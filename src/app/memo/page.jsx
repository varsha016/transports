"use client";
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMemoAction } from '../lib/features/users/loginSlice';


const AddMemoForm = () => {
    const [formData, setFormData] = useState({
        memoNo: '99',
        date: '',
        vehicleType: 'car',
        type: '66',
        vehicleNo: '66',
        from: '66',
        to: '88',
        vehicleOwner: 'varsha',
        telephoneNo: '123456',
        driverName: '44',
        drivingLicNo: '44',
        engineNo: '44',
        chassisNo: '44',
        octroiAgent: '44',
        selfLRs: '44',
        total: '44444',
        paidLRs: '44',
        toPayLRs: '44',
        branch: 'pune',
        party: 'xzy',
        toBeBilledLRs: '',
        totalLRs: '5555',
        advancePaidDate: '',
        amount: '9090',
        payableAt: '77',
        advanceThrough: '87',
        remark: 'no remark',
        advance: '88',
        narration: 'hello'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const dispatch = useDispatch()
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form Submitted', formData);
        dispatch(addMemoAction(formData))

        // try {
        //     const response = await fetch('/api/addMemo', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify(formData),
        //     });

        //     if (!response.ok) {
        //         throw new Error(`HTTP error! Status: ${response.status}`);
        //     }

        //     const data = await response.json();
        //     console.log('Server Response:', data);

        //     // Optionally reset the form or perform other actions
        // } catch (error) {
        //     console.error('Error submitting form:', error);
        // }
    };




    return (
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg space-y-6">
            <h1 className="text-2xl font-bold text-center mb-6">Add Memo Form</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Memo No */}
                <div>
                    <label className="block text-gray-700">Memo No:</label>
                    <input name="memoNo" value={formData.memoNo} onChange={handleChange} type="text"
                        className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring focus:ring-blue-300" />
                </div>

                {/* Date */}
                <div>
                    <label className="block text-gray-700">Date:</label>
                    <input name="date" value={formData.date} onChange={handleChange} type="date"
                        className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring focus:ring-blue-300" />
                </div>

                {/* Vehicle Type */}
                <div>
                    <label className="block text-gray-700">Vehicle Type:</label>
                    <select name="vehicleType" value={formData.vehicleType} onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring focus:ring-blue-300">
                        <option value="">Select Vehicle Type</option>
                        <option value="Type1">Type 1</option>
                        <option value="Type2">Type 2</option>
                    </select>
                </div>

                {/* Type */}
                <div>
                    <label className="block text-gray-700">Type:</label>
                    <select name="type" value={formData.type} onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring focus:ring-blue-300">
                        <option value="">Select Type</option>
                        <option value="TypeA">Type A</option>
                        <option value="TypeB">Type B</option>
                    </select>
                </div>

                {/* Vehicle No */}
                <div>
                    <label className="block text-gray-700">Vehicle No:</label>
                    <input name="vehicleNo" value={formData.vehicleNo} onChange={handleChange} type="text"
                        className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring focus:ring-blue-300" />
                </div>

                {/* From */}
                <div>
                    <label className="block text-gray-700">From:</label>
                    <input name="from" value={formData.from} onChange={handleChange} type="text"
                        className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring focus:ring-blue-300" />
                </div>

                {/* To */}
                <div>
                    <label className="block text-gray-700">To:</label>
                    <input name="to" value={formData.to} onChange={handleChange} type="text"
                        className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring focus:ring-blue-300" />
                </div>

                {/* Vehicle Owner */}
                <div>
                    <label className="block text-gray-700">Vehicle Owner:</label>
                    <input name="vehicleOwner" value={formData.vehicleOwner} onChange={handleChange} type="text"
                        className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring focus:ring-blue-300" />
                </div>

                {/* Telephone No */}
                <div>
                    <label className="block text-gray-700">Telephone No:</label>
                    <input name="telephoneNo" value={formData.telephoneNo} onChange={handleChange} type="text"
                        className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring focus:ring-blue-300" />
                </div>

                {/* Driver Name */}
                <div>
                    <label className="block text-gray-700">Driver Name:</label>
                    <input name="driverName" value={formData.driverName} onChange={handleChange} type="text"
                        className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring focus:ring-blue-300" />
                </div>

                {/* Driving License No */}
                <div>
                    <label className="block text-gray-700">Driving License No:</label>
                    <input name="drivingLicNo" value={formData.drivingLicNo} onChange={handleChange} type="text"
                        className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring focus:ring-blue-300" />
                </div>

                {/* Engine No */}
                <div>
                    <label className="block text-gray-700">Engine No:</label>
                    <input name="engineNo" value={formData.engineNo} onChange={handleChange} type="text"
                        className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring focus:ring-blue-300" />
                </div>

                {/* Chassis No */}
                <div>
                    <label className="block text-gray-700">Chassis No:</label>
                    <input name="chassisNo" value={formData.chassisNo} onChange={handleChange} type="text"
                        className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring focus:ring-blue-300" />
                </div>

                {/* Octroi Agent */}
                <div>
                    <label className="block text-gray-700">Octroi Agent:</label>
                    <input name="octroiAgent" value={formData.octroiAgent} onChange={handleChange} type="text"
                        className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring focus:ring-blue-300" />
                </div>

                {/* Self LRs */}
                <div>
                    <label className="block text-gray-700">Self LRs:</label>
                    <input name="selfLRs" value={formData.selfLRs} onChange={handleChange} type="text"
                        className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring focus:ring-blue-300" />
                </div>

                {/* Total */}
                <div>
                    <label className="block text-gray-700">Total:</label>
                    <input name="total" value={formData.total} onChange={handleChange} type="text"
                        className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring focus:ring-blue-300" />
                </div>

                {/* Paid LRs */}
                <div>
                    <label className="block text-gray-700">Paid LRs:</label>
                    <input name="paidLRs" value={formData.paidLRs} onChange={handleChange} type="text"
                        className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring focus:ring-blue-300" />
                </div>

                {/* To Pay LRs */}
                <div>
                    <label className="block text-gray-700">To Pay LRs:</label>
                    <input name="toPayLRs" value={formData.toPayLRs} onChange={handleChange} type="text"
                        className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring focus:ring-blue-300" />
                </div>

                {/* Branch */}
                <div>
                    <label className="block text-gray-700">Branch:</label>
                    <input name="branch" value={formData.branch} onChange={handleChange} type="text"
                        className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring focus:ring-blue-300" />
                </div>

                {/* Party */}
                <div>
                    <label className="block text-gray-700">Party:</label>
                    <input name="party" value={formData.party} onChange={handleChange} type="text"
                        className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring focus:ring-blue-300" />
                </div>

                {/* To Be Billed LRs */}
                <div>
                    <label className="block text-gray-700">To Be Billed LRs:</label>
                    <input name="toBeBilledLRs" value={formData.toBeBilledLRs} onChange={handleChange} type="text"
                        className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring focus:ring-blue-300" />
                </div>

                {/* Total LRs */}
                <div>
                    <label className="block text-gray-700">Total LRs:</label>
                    <input name="totalLRs" value={formData.totalLRs} onChange={handleChange} type="text"
                        className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring focus:ring-blue-300" />
                </div>

                {/* Advance Paid Date */}
                <div>
                    <label className="block text-gray-700">Advance Paid Date:</label>
                    <input name="advancePaidDate" value={formData.advancePaidDate} onChange={handleChange} type="date"
                        className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring focus:ring-blue-300" />
                </div>

                {/* Amount */}
                <div>
                    <label className="block text-gray-700">Amount:</label>
                    <input name="amount" value={formData.amount} onChange={handleChange} type="text"
                        className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring focus:ring-blue-300" />
                </div>

                {/* Payable At */}
                <div>
                    <label className="block text-gray-700">Payable At:</label>
                    <input name="payableAt" value={formData.payableAt} onChange={handleChange} type="text"
                        className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring focus:ring-blue-300" />
                </div>

                {/* Advance Through */}
                <div>
                    <label className="block text-gray-700">Advance Through:</label>
                    <input name="advanceThrough" value={formData.advanceThrough} onChange={handleChange} type="text"
                        className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring focus:ring-blue-300" />
                </div>

                {/* Remark */}
                <div>
                    <label className="block text-gray-700">Remark:</label>
                    <input name="remark" value={formData.remark} onChange={handleChange} type="text"
                        className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring focus:ring-blue-300" />
                </div>

                {/* Advance */}
                <div>
                    <label className="block text-gray-700">Advance:</label>
                    <input name="advance" value={formData.advance} onChange={handleChange} type="text"
                        className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring focus:ring-blue-300" />
                </div>

                {/* Narration */}
                <div>
                    <label className="block text-gray-700">Narration:</label>
                    <textarea name="narration" value={formData.narration} onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring focus:ring-blue-300" rows="3" />
                </div>
            </div>
            <button type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2">Submit</button>
        </form>
    );
};

export default AddMemoForm;
