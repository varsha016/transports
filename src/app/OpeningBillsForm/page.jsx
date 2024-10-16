"use client"
// components/OpeningBillsForm.js

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addOpeningBillsAction, getConsignerAction } from '../lib/features/users/usersSlice';

const OpeningBillsForm = () => {
    const dispatch = useDispatch()
    const allConsigner = useSelector(state => state.users.allConsigner)
    const [formData, setFormData] = useState({
        partyName: '',
        billType: '',
        billNo: '',
        billDate: '',
        billAmount: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async () => {
        const data = await dispatch(addOpeningBillsAction(formData))
    };
    const [consigners, setConsigners] = useState();
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
        <div className="p-6 max-w-md mx-auto bg-blue-50 rounded-lg shadow-lg">
            {/* <pre>{JSON.stringify(consigners, null, 2)}</pre> */}
            <h2 className="text-2xl font-bold mb-4 text-center bg-gray-700 rounded-b text-white">Opening Bills</h2>
            <div className="space-y-4">
                <div>
                    <label className="block mb-1 font-medium">Party Name</label>
                    <select
                        name="partyName"
                        value={formData.partyName}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded"
                    >
                        <option value="">Select Party Name</option>
                        {consigners?.map((consigner) => (
                            <option key={consigner.id} value={consigner.consignerName}>
                                {consigner.consignerName}
                            </option>
                        ))}
                    </select>

                </div>
                <div>
                    <label className="block mb-1 font-medium">Bill Type</label>
                    <select
                        name="billType"
                        value={formData.billType}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded"
                    >
                        <option value="">Select Bill Type</option>
                        <option value="Freight">Freight</option>
                        <option value="Service">Service</option>
                        <option value="Product">Product</option>
                    </select>
                </div>
                <div>
                    <label className="block mb-1 font-medium">Bill No</label>
                    <input
                        type="text"
                        name="billNo"
                        value={formData.billNo}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div>
                    <label className="block mb-1 font-medium">Bill Date</label>
                    <input
                        type="date"
                        name="billDate"
                        value={formData.billDate}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div>
                    <label className="block mb-1 font-medium">Bill Amount</label>
                    <input
                        type="number"
                        name="billAmount"
                        value={formData.billAmount}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div className="flex space-x-4 mt-4">
                    <button
                        onClick={handleSubmit}
                        className="flex-1 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
                    >
                        Add Bills
                    </button>
                    {/* <button className="flex-1 py-2 bg-gray-400 text-white rounded hover:bg-gray-500">
                        Find
                    </button> */}
                </div>
            </div>
        </div>
    );
};

export default OpeningBillsForm;
