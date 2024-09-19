"use client";
import axios from 'axios';
// import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const LREntryForm = () => {
  
  // const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    lrNo: '',
    lrDate: '',
    vehNo: '2',
    consignorName: '',
    consigneeName: '',
    modeOfFreight: 'Paid',
    octroiNaka: '',
    paidBy: 'BranchAgent',
    branchOfBilling: '',
    octRecdFrom: '',
    loadingPlace: '',
    placeOfLoading: '',
    formNo: '2',
    collectionInfo: '',
    delivery: '',
    placeOfDelivery: '',
    materialDescription: '',
    quantity: '2',
    quantitySample: '',
    actualWeight: '2',
    chargedWeight: '2',
    orderBy: '2',
    invoiceNo: '2',
    goodsValue: '2',
    freightChargeType: 'WeightBasis',
    serviceTaxBy: '2',
    rate: '2',
    grossTotal: '2',
    serviceTax: '2',
    educationCess: 'HS',
    netTotal: '2',
    lrRemarks: 'temple',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  
  const handleAddClick = async (e) => {
    e.preventDefault();
    try {
      console.log('Form Data:', formData);
      
      // Make the POST request to the API endpoint
      const response = await axios.post('/api/LREntry', formData);
      // router.push('/LREntryTable');

    // Check if the response is ok (status code in the range 200-299)
    // if (!response.ok) {
    //   const errorData = await response.json();
    //   throw new Error(errorData.error || 'Failed to add LR entry');
    // }

    // Parse the JSON response
    const result = await response;

      // if(result){
       
      // }

    // Handle success (you can show a success message or redirect)
    console.log('Success:', result);
    // Example: alert('LR Entry added successfully');
  } catch (error) {
    // Handle errors (e.g., show an error message)
    console.error('Error:', error.message);
    // Example: alert('Failed to add LR Entry: ' + error.message);
  }
};


  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-6 text-center">LR Entry Form</h2>
      <form className="space-y-6">
        {/* Name Dropdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
            <select
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full py-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            >
              <option value="">Select Name</option>
              <option value="Name1">Name1</option>
              <option value="Name2">Name2</option>
            </select>
          </div>

          {/* LR No Input */}
          <div>
            <label htmlFor="lrNo" className="block text-sm font-medium text-gray-700">LR No:</label>
            <input
              type="text"
              id="lrNo"
              name="lrNo"
              value={formData.lrNo}
              onChange={handleChange}
              className="mt-1 block w-full py-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            />
          </div>
        </div>

        {/* LR Date and Vehicle No */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="lrDate" className="block text-sm font-medium text-gray-700">LR Date:</label>
            <input
              type="date"
              id="lrDate"
              name="lrDate"
              value={formData.lrDate}
              onChange={handleChange}
              className="mt-1 block w-full py-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label htmlFor="vehNo" className="block text-sm font-medium text-gray-700">Vehicle No:</label>
            <select
              id="vehNo"
              name="vehNo"
              value={formData.vehNo}
              onChange={handleChange}
              className="mt-1 block w-full py-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            >
              <option value="">Select Vehicle No</option>
              <option value="VehNo1">VehNo1</option>
              <option value="VehNo2">VehNo2</option>
            </select>
          </div>
        </div>

        {/* Consignor and Consignee Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="consignorName" className="block text-sm font-medium text-gray-700">Consignor Name:</label>
            <select
              id="consignorName"
              name="consignorName"
              value={formData.consignorName}
              onChange={handleChange}
              className="mt-1 block w-full py-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            >
              <option value="">Select Consignor Name</option>
              <option value="Consignor1">Consignor1</option>
              <option value="Consignor2">Consignor2</option>
            </select>
          </div>
          <div>
            <label htmlFor="consigneeName" className="block text-sm font-medium text-gray-700">Consignee Name:</label>
            <select
              id="consigneeName"
              name="consigneeName"
              value={formData.consigneeName}
              onChange={handleChange}
              className="mt-1 block w-full py-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            >
              <option value="">Select Consignee Name</option>
              <option value="Consignee1">Consignee1</option>
              <option value="Consignee2">Consignee2</option>
            </select>
          </div>
        </div>

        {/* Mode of Freight and Conditional Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="modeOfFreight" className="block text-sm font-medium text-gray-700">Mode of Freight:</label>
            <select
              id="modeOfFreight"
              name="modeOfFreight"
              value={formData.modeOfFreight}
              onChange={handleChange}
              className="mt-1 block w-full py-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            >
              <option value="Paid">Paid</option>
              <option value="ToPay">To Pay</option>
            </select>
          </div>

          {formData.modeOfFreight !== 'Paid' && (
            <>
              <div>
                <label htmlFor="branchOfBilling" className="block text-sm font-medium text-gray-700">Branch of Billing:</label>
                <input
                  type="text"
                  id="branchOfBilling"
                  name="branchOfBilling"
                  value={formData.branchOfBilling}
                  onChange={handleChange}
                  className="mt-1 block w-full py-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label htmlFor="paidBy" className="block text-sm font-medium text-gray-700">Paid By:</label>
                <select
                  id="paidBy"
                  name="paidBy"
                  value={formData.paidBy}
                  onChange={handleChange}
                  className="mt-1 block w-full py-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                >
                  <option value="BranchAgent">Branch Agent</option>
                  <option value="Customer">Customer</option>
                </select>
              </div>
              <div>
                <label htmlFor="octRecdFrom" className="block text-sm font-medium text-gray-700">octRecdFrom By:</label>
                <select
                  id="octRecdFrom"
                  name="octRecdFrom"
                  value={formData.octRecdFrom}
                  onChange={handleChange}
                  className="mt-1 block w-full py-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                >
                  <option value="BranchAgent">Branch Agent</option>
                  <option value="Customer">Customer</option>
                </select>
              </div>
            </>
          )}
        </div>

        {/* Octroi Naka and Conditional Field */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="octroiNaka" className="block text-sm font-medium text-gray-700">Octroi Naka:</label>
            <select
              id="octroiNaka"
              name="octroiNaka"
              value={formData.octroiNaka}
              onChange={handleChange}
              className="mt-1 block w-full py-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            >
              <option value="">Select Octroi Naka</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          {/* {formData.octroiNaka === 'Yes' && (
            <div>
              <label htmlFor="octRecdFrom" className="block text-sm font-medium text-gray-700">Octroi Received From:</label>
              <select
                id="octRecdFrom"
                name="octRecdFrom"
                value={formData.octRecdFrom}
                onChange={handleChange}
                className="mt-1 block w-full py-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              >
                <option value="">Select Octroi Received From</option>
                <option value="Agent">Agent</option>
                <option value="Driver">Driver</option>
              </select>
            </div>
          )} */}
          
           {formData.octroiNaka === 'Yes' && (
          <>
            <div className="mb-6">
              <label htmlFor="paidBy" className="block text-sm font-medium text-gray-700">Paid By:</label>
              <select
                id="paidBy"
                name="paidBy"
                value={formData.paidBy}
                onChange={handleChange}
                className="mt-1 block w-full py-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              >
                <option value="BranchAgent">Branch Agent</option>
                <option value="Consignee">Consignee</option>
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="octRecdFrom" className="block text-sm font-medium text-gray-700">Oct Recd From:</label>
              <select
                id="octRecdFrom"
                name="octRecdFrom"
                value={formData.octRecdFrom}
                onChange={handleChange}
                className="mt-1 block w-full py-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              >
                <option value="">Select</option>
                <option value="Option1">Option 1</option>
                <option value="Option2">Option 2</option>
                <option value="Option3">Option 3</option>
                {/* Add more options as needed */}
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="branchOfBilling" className="block text-sm font-medium text-gray-700">Branch Of Billing:</label>
              <select
                id="branchOfBilling"
                name="branchOfBilling"
                value={formData.branchOfBilling}
                onChange={handleChange}
                className="mt-1 block w-full py-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              >
                <option value="">Select Branch</option>
                <option value="Branch1">Branch 1</option>
                <option value="Branch2">Branch 2</option>
                <option value="Branch3">Branch 3</option>
                {/* Add more options as needed */}
              </select>
            </div>
          </>
        )}
    
        </div>

        {/* Additional Input Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Continue adding fields similarly with consistent styling */}
          {/* Example: */}
          <div>
            <label htmlFor="loadingPlace" className="block text-sm font-medium text-gray-700">Loading Place:</label>
            <select
              id="loadingPlace"
              name="loadingPlace"
              value={formData.loadingPlace}
              onChange={handleChange}
              className="mt-1 block w-full py-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            >
              <option value="">Select Loading Place</option>
              <option value="Place1">Place1</option>
              <option value="Place2">Place2</option>
            </select>
          </div>
          <div>
          <label htmlFor="placeOfLoading" className="block text-sm font-medium text-gray-700">Place of Loading:</label>
          <input
            type="text"
            id="placeOfLoading"
            name="placeOfLoading"
            value={formData.placeOfLoading}
            onChange={handleChange}
            className="mt-1 block w-full py-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          />
        </div>
        </div>
          

        {/* Form No Input */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="formNo" className="block text-sm font-medium text-gray-700">Form No:</label>
          <input
            type="text"
            id="formNo"
            name="formNo"
            value={formData.formNo}
            onChange={handleChange}
            className="mt-1 block w-full py-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          />
        </div>

        {/* Collection Dropdown */}
        <div>
          <label htmlFor="collectionInfo" className="block text-sm font-medium text-gray-700">Collection:</label>
          <select
            id="collectionInfo"
            name="collectionInfo"
            value={formData.collectionInfo}
            onChange={handleChange}
            className="mt-1 block w-full py-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          >
            <option value="">Select Collection</option>
            <option value="Collection1">Collection1</option>
            <option value="Collection2">Collection2</option>
          </select>
        </div>
</div>
        {/* Delivery Dropdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="delivery" className="block text-sm font-medium text-gray-700">Delivery:</label>
          <select
            id="delivery"
            name="delivery"
            value={formData.delivery}
            onChange={handleChange}
            className="mt-1 block w-full py-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          >
            <option value="">Select Delivery</option>
            <option value="Delivery1">Delivery1</option>
            <option value="Delivery2">Delivery2</option>
          </select>
        </div>

        {/* Place of Delivery Dropdown */}
        <div>
          <label htmlFor="placeOfDelivery" className="block text-sm font-medium text-gray-700">Place of Delivery:</label>
          <select
            id="placeOfDelivery"
            name="placeOfDelivery"
            value={formData.placeOfDelivery}
            onChange={handleChange}
            className="mt-1 block w-full py-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          >
            <option value="">Select Place of Delivery</option>
            <option value="Place1">Place1</option>
            <option value="Place2">Place2</option>
          </select>
        </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Material Description Textarea */}
        <div>
          <label htmlFor="materialDescription" className="block text-sm font-medium text-gray-700">Material Description:</label>
          <textarea
            id="materialDescription"
            name="materialDescription"
            value={formData.materialDescription}
            onChange={handleChange}
            className="mt-1 block w-full py-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          />
          </div>
          <div>
          <label htmlFor="lrRemarks" className="block text-sm font-medium text-gray-700">LR Remarks:</label>
          <textarea
            id="lrRemarks"
            name="lrRemarks"
            value={formData.lrRemarks}
            onChange={handleChange}
            className="mt-1 block w-full py-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          />
        </div>
        </div>

        {/* Quantity Input */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Quantity:</label>
          <input
            type="text"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="mt-1 block w-full py-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          />
        </div>

        {/* Quantity Sample Dropdown */}
        <div>
          <label htmlFor="quantitySample" className="block text-sm font-medium text-gray-700">Quantity Sample:</label>
          <select
            id="quantitySample"
            name="quantitySample"
            value={formData.quantitySample}
            onChange={handleChange}
            className="mt-1 block w-full py-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          >
            <option value="">Select Quantity Sample</option>
            <option value="Sample1">Sample1</option>
            <option value="Sample2">Sample2</option>
          </select>
        </div>
        </div>

        {/* Actual Weight Input */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="actualWeight" className="block text-sm font-medium text-gray-700">Actual Weight:</label>
          <input
            type="text"
            id="actualWeight"
            name="actualWeight"
            value={formData.actualWeight}
            onChange={handleChange}
            className="mt-1 block w-full py-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          />
        </div>

        {/* Charged Weight Input */}
        <div>
          <label htmlFor="chargedWeight" className="block text-sm font-medium text-gray-700">Charged Weight:</label>
          <input
            type="text"
            id="chargedWeight"
            name="chargedWeight"
            value={formData.chargedWeight}
            onChange={handleChange}
            className="mt-1 block w-full py-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          />
        </div>
        </div>

        {/* Order By Input */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="orderBy" className="block text-sm font-medium text-gray-700">Order By:</label>
          <input
            type="text"
            id="orderBy"
            name="orderBy"
            value={formData.orderBy}
            onChange={handleChange}
            className="mt-1 block w-full py-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          />
        </div>

        {/* Invoice No Input */}
        <div>
          <label htmlFor="invoiceNo" className="block text-sm font-medium text-gray-700">Invoice No:</label>
          <input
            type="text"
            id="invoiceNo"
            name="invoiceNo"
            value={formData.invoiceNo}
            onChange={handleChange}
            className="mt-1 block w-full py-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          />
        </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {/* Goods Value Input */}
        <div>
          <label htmlFor="goodsValue" className="block text-sm font-medium text-gray-700">Goods Value:</label>
          <input
            type="text"
            id="goodsValue"
            name="goodsValue"
            value={formData.goodsValue}
            onChange={handleChange}
            className="mt-1 block w-full py-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          />
        </div>

        {/* Freight Charge Type Dropdown */}
        <div>
          <label htmlFor="freightChargeType" className="block text-sm font-medium text-gray-700">Freight Charge Type:</label>
          <select
            id="freightChargeType"
            name="freightChargeType"
            value={formData.freightChargeType}
            onChange={handleChange}
            className="mt-1 block w-full py-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          >
            <option value="WeightBasis">WeightBasis</option>
            <option value="ValueBasis">ValueBasis</option>
          </select>
        </div>
        </div>

        {/* Service Tax By Dropdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="serviceTaxBy" className="block text-sm font-medium text-gray-700">Service Tax By:</label>
          <select
            id="serviceTaxBy"
            name="serviceTaxBy"
            value={formData.serviceTaxBy}
            onChange={handleChange}
            className="mt-1 block w-full py-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          >
            <option value="">Select Service Tax By</option>
            <option value="Consignor">Consignor</option>
            <option value="Consignee">Consignee</option>
          </select>
        </div>

        {/* Rate Input */}
        <div>
          <label htmlFor="rate" className="block text-sm font-medium text-gray-700">Rate:</label>
          <input
            type="text"
            id="rate"
            name="rate"
            value={formData.rate}
            onChange={handleChange}
            className="mt-1 block w-full py-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          />
        </div>
        </div>

        {/* Gross Total Input */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="grossTotal" className="block text-sm font-medium text-gray-700">Gross Total:</label>
          <input
            type="text"
            id="grossTotal"
            name="grossTotal"
            value={formData.grossTotal}
            onChange={handleChange}
            className="mt-1 block w-full py-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          />
        </div>

        {/* Service Tax Input */}
        <div>
          <label htmlFor="serviceTax" className="block text-sm font-medium text-gray-700">Service Tax:</label>
          <input
            type="text"
            id="serviceTax"
            name="serviceTax"
            value={formData.serviceTax}
            onChange={handleChange}
            className="mt-1 block w-full py-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          />
        </div>
        </div>

        {/* Education Cess Input */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="educationCess" className="block text-sm font-medium text-gray-700">Education Cess:</label>
          <input
            type="text"
            id="educationCess"
            name="educationCess"
            value={formData.educationCess}
            onChange={handleChange}
            className="mt-1 block w-full py-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          />
        </div>

        {/* Net Total Input */}
        <div>
          <label htmlFor="netTotal" className="block text-sm font-medium text-gray-700">Net Total:</label>
          <input
            type="text"
            id="netTotal"
            name="netTotal"
            value={formData.netTotal}
            onChange={handleChange}
            className="mt-1 block w-full py-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          />
        </div>
        </div>

        {/* LR Remarks Textarea */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="lrRemarks" className="block text-sm font-medium text-gray-700">LR Remarks:</label>
          <textarea
            id="lrRemarks"
            name="lrRemarks"
            value={formData.lrRemarks}
            onChange={handleChange}
            className="mt-1 block w-full py-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          />
        </div>
        </div> */}

        {/* Submit Button */}
        <div className="flex justify-center mt-6">
          <button
            type="button"
            onClick={handleAddClick}
            className="px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default LREntryForm;
