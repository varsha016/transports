"use client"; // This tells Next.js that the component should be rendered on the client side

import axios from 'axios';
import { useRouter } from 'next/navigation';

import React, { useState, useEffect } from 'react';

const Page = () => {
  const router=useRouter()
   const [allMemoData, setAllMemoData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

 const fetchAllMemos = async () => {
  setLoading(true);
  setError(null);
  try {
    const response = await axios.get('/api/getMemoData');
    console.log(response.data, 'data');
    setAllMemoData(response.data?.memos || []);
  } catch (error) {
    console.error("Error fetching memos:", error.response || error.message || error);
    setError(error.response?.data?.message || "Error fetching memos");
  } finally {
    setLoading(false);
  }
};
  useEffect(() => {
    fetchAllMemos();
  }, []);
  return (
    <>
      {/* <pre>{ JSON.stringify(allMemoData, null, 2)}</pre> */}
    <div className="overflow-x-auto">
      <div className="flex justify-end items-end">
        <button onClick={() => router.push('/memo')} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-5">
          Add MemoData
        </button>
      </div>
      <h2 className="text-xl font-bold mb-4">Memo Entries</h2>
     <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-100">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Memo No</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vehicle Type</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vehicle No</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">From</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">To</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vehicle Owner</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Telephone No</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Driver Name</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Driving Lic No</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Engine No</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Chassis No</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Octroi Agent</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Self LRs</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Paid LRs</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">To Pay LRs</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Branch</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Party</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">To Be Billed LRs</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total LRs</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Advance Paid Date</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payable At</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Advance Through</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Remark</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Advance</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Narration</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {allMemoData?.map(memos => (
          <tr key={memos._id}>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{memos.memoNo}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(memos.date).toLocaleDateString()}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{memos.vehicleType}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{memos.vehicleNo}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{memos.from}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{memos.to}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{memos.vehicleOwner}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{memos.telephoneNo}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{memos.driverName}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{memos.drivingLicNo}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{memos.engineNo}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{memos.chassisNo}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{memos.octroiAgent}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{memos.selfLRs}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{memos.total}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{memos.paidLRs}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{memos.toPayLRs}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{memos.branch}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{memos.party}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{memos.toBeBilledLRs}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{memos.totalLRs}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(memos.advancePaidDate).toLocaleDateString()}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{memos.amount}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{memos.payableAt}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{memos.advanceThrough}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{memos.remark}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{memos.advance}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{memos.narration}</td>
          </tr>
        ))}
      </tbody>
    </table>
      </div>
          </>
  );
};

export default Page;
