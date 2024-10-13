'use client';
import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation'; // For router and route parameters
import axios from 'axios';

const EditLREntry = () => {
    const router = useRouter();
    const { id } = useParams(); // Get the LR Entry ID from the URL

    const [lrData, setLrData] = useState({
        consignorName: '',
        consigneeName: '',
        placeOfLoading: '',
        paidBy: '',
        modeOfFreight: '',
        actualWeight: '',
        chargedWeight: '',
        invoiceNo: '',
        goodsValue: '',
        lrRemarks: ''
    });

    const [loading, setLoading] = useState(true);

    // Fetch the LR entry data using the ID from the URL
    const fetchLREntryData = async () => {
        try {
            const response = await axios.get(`/api/getLREntry/${id}`);
            setLrData(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching LR entry data:', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        if (id) {
            fetchLREntryData();
        }
    }, [id]);

    // Handle form input change
    const handleChange = (e) => {
        setLrData({
            ...lrData,
            [e.target.name]: e.target.value
        });
    };

    // Handle form submission to update the LR entry
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`/api/updateLREntry/${id}`, lrData); // Assuming you have an API to update the entry
            router.push('/memo'); // Redirect to the memo page or wherever you want after a successful update
        } catch (error) {
            console.error('Error updating LR entry:', error);
        }
    };

    if (loading) {
        return <div>Loading...</div>; // Show a loader while fetching data
    }

    return (
        <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-4">Edit LR Entry</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-gray-700">Consignor Name</label>
                    <input
                        type="text"
                        name="consignorName"
                        value={lrData.consignorName}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-2 rounded"
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-700">Consignee Name</label>
                    <input
                        type="text"
                        name="consigneeName"
                        value={lrData.consigneeName}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-2 rounded"
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-700">Place of Loading</label>
                    <input
                        type="text"
                        name="placeOfLoading"
                        value={lrData.placeOfLoading}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-2 rounded"
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-700">Paid By</label>
                    <input
                        type="text"
                        name="paidBy"
                        value={lrData.paidBy}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-2 rounded"
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-700">Mode of Freight</label>
                    <input
                        type="text"
                        name="modeOfFreight"
                        value={lrData.modeOfFreight}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-2 rounded"
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-700">Actual Weight</label>
                    <input
                        type="text"
                        name="actualWeight"
                        value={lrData.actualWeight}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-2 rounded"
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-700">Charged Weight</label>
                    <input
                        type="text"
                        name="chargedWeight"
                        value={lrData.chargedWeight}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-2 rounded"
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-700">Invoice No</label>
                    <input
                        type="text"
                        name="invoiceNo"
                        value={lrData.invoiceNo}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-2 rounded"
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-700">Goods Value</label>
                    <input
                        type="text"
                        name="goodsValue"
                        value={lrData.goodsValue}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-2 rounded"
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-700">LR Remarks</label>
                    <input
                        type="text"
                        name="lrRemarks"
                        value={lrData.lrRemarks}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-2 rounded"
                    />
                </div>

                <div className="mt-4">
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                        Update LR Entry
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditLREntry;
