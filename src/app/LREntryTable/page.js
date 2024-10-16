"use client";
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useCallback, useEffect, useState } from 'react';

// const Spinner = () => (
//   <div className="flex justify-start items-start h-32 ml-36">
//     <div className="w-10 h-10 border-4 border-t-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
//   </div>
// );

// const LREntryTable = ({ handleEditClick }) => {
const LREntryTable = () => {
  const router = useRouter()


  const [allLRs, setAllLRs] = useState([])
  // const fetchAllLRs = async () => {

  const fetchAllLRs = useCallback(async () => {
    const response = await axios.get('/api/getLREntry')
    // const data = await response.json()
    console.log(response.data, 'data')
    setAllLRs(response.data?.data)
    // setLoading(true)
  }, [])

  useEffect(() => {
    fetchAllLRs()
    console.log('data KKKKKKKKKKKKK')
  }, [fetchAllLRs])



  const handleEditClick = (id) => {
    // Navigate to the LR Entry Form edit page with the specific LR Entry ID
    router.push(`/LREditForm/${id}`);
  };
  return (<>
    {/* <pre>{JSON.stringify(allLRs, null, 2)}</pre> */}
    <div className="overflow-x-auto">
      <div className=' flex justify-end items-end'>
        <button onClick={() => router.push('/lrEntryForm')} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-5">Add LRData</button>
      </div>
      <h2 className="text-xl font-bold mb-4">LR Entries</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Edit Data</th> */}
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Consignor Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Consignee Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Material Description</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Loading Place</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Paid By</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mode of Freight</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actual Weight</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Charged Weight</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Invoice No</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Goods Value</th>

            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">LR Remarks</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created At</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Updated At</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {allLRs?.map(lr => (
            <tr key={lr._id}>
              {/* <td onClick={() => handleEditClick(lr._id)} className="bg-gray-500 hover:bg-gray-700 text-white px-4 py-2 rounded-md">

                Edit


              </td> */}
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lr.consignorName}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lr.consigneeName}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lr.placeOfLoading}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lr.modeOfFreight}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lr.paidBy}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lr.materialDescription}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lr.actualWeight}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lr.chargedWeight}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lr.invoiceNo}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lr.goodsValue}</td>

              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lr.lrRemarks}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(lr.createdAt).toLocaleString()}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(lr.updatedAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>




    </div>
  </>

  );
};

export default LREntryTable;
