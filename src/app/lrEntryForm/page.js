"use client";
import React, { useEffect, useState, useRef } from 'react';
import { useReactToPrint } from "react-to-print";
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllLRsAction, updateLRAction } from '../lib/features/users/usersSlice';


const LREntryForm = () => {
  const dispatch = useDispatch();
  const allLRSData = useSelector((state) => state.users.allLRS);
  console.log(allLRSData, 'allLRSData');

  const status = useSelector((state) => state.users.status);
  const [buttonText, setButtonText] = useState("");

  const [lrEntryData, setLrEntryData] = useState({
    branch: '',
    lrNo: '',
    lrDate: '',
    vehNo: '',
    vehType: '',
    consignorName: '',
    consigneeName: '',
    partyOfDelivery: '',
    from1: '',
    from2: '',
    to1: '',
    to2: '',
    modeOfFreight: 'Paid',
    eWayBillNo: 'BranchAgent',
    // octRecdFrom: '',
    branchOfBilling: '',
    collection: '',
    placeOfCollection: '',
    materialDesc: '',
    deliveryAt: '',
    delivery: '',
    placeOfDelivery: '',
    quantity: '',
    qtyPacking: '',
    actualWeight: '',
    chargedWeight: '',
    eWayBillNo: '',
    eWayExpireDate: '',
    invoiceNo: '',
    goodsValue: '',

    narration: '',
    lrRemarks: '',
    rows: []
  });

  // Fetch LRs when component mounts
  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchAllLRsAction());
    };
    fetchData();
  }, [dispatch]);

  const [lrEntryDataId, setLrEntryDataId] = useState()
  console.log("_ID", lrEntryDataId?._id, "lrEntryDataId", lrEntryDataId);
  useEffect(() => {
    if (Array.isArray(allLRSData) && allLRSData.length > 0) {
      const latestData = allLRSData[allLRSData.length - 1];
      setLrEntryDataId(latestData);

      if (latestData) {
        setLrEntryData(latestData); // Populate form with latest data
        setIsEditing(false); // Reset edit mode when data is set
      }
    }
  }, [allLRSData]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setLrEntryData({
      ...lrEntryData,
      [name]: value, // Dynamically update other fields in lrEntryData
    });
  };

  // const handleAddRowClick = () => {

  //   const newRow = { ledgerName: "", amount: "", rowdate: "", bank: "", narration: "" }; // New empty row
  //   setLrEntryData((prevState) => ({
  //     ...prevState,
  //     rows: [...(prevState.rows || []), newRow], // Safely spread rows
  //   }));
  // };



  const [totalSum, setTotalSum] = useState(0); // State for the total sum

  // Function to handle adding a new row
  const handleAddRowClick = () => {
    const newRow = { ledgerName: "", amount: "", rowdate: "", bank: "", narration: "" }; // New empty row
    setLrEntryData((prevState) => ({
      ...prevState,
      rows: [...(prevState.rows || []), newRow], // Add the new row
    }));
  };

  // Function to handle input change in a row
  // const handleInputChange = (index, field, value) => {
  //   const updatedRows = lrEntryData.rows.map((row, i) =>
  //     i === index ? { ...row, [field]: value } : row
  //   );

  //   // Update the total sum if the 'amount' field is changed
  //   const newTotalSum = updatedRows.reduce((acc, curr) => acc + parseFloat(curr.amount || 0), 0);
  //   setTotalSum(newTotalSum);

  //   setLrEntryData({
  //     ...lrEntryData,
  //     rows: updatedRows, // Update rows inside lrEntryData
  //   });
  //   console.log(updatedRows, "updatedRows");

  // };

  const handleInputChange = (index, field, value) => {
    // Update the row data
    const updatedRows = lrEntryData.rows.map((row, i) =>
      i === index ? { ...row, [field]: value } : row
    );

    // Calculate the total sum only if the 'amount' field is changed
    const newTotalSum = updatedRows.reduce((acc, curr) => {
      const amountValue = parseFloat(curr.amount);
      // Skip invalid amounts
      return acc + (isNaN(amountValue) ? 0 : amountValue);
    }, 0);

    // Update the state
    setLrEntryData({
      ...lrEntryData,
      rows: updatedRows, // Update rows inside lrEntryData
    });

    setTotalSum(newTotalSum); // Update the total sum state

    // Debug logging
    console.log(updatedRows, "Updated Rows");
    console.log("New Total Sum:", newTotalSum);
  };




  const [isEditing, setIsEditing] = useState(false);

  const handleAddNewClick = () => {
    setIsEditing(true); // Enable editing for new entry
    setButtonText("Save LR");
    setLrEntryData({
      branch: '',
      lrNo: '',
      lrDate: '',
      vehNo: '',
      vehType: 'j',
      consignorName: '',
      consigneeName: '',
      partyOfDelivery: '',
      from1: '',
      from2: '',
      to1: '',
      to2: '',
      modeOfFreight: 'Paid',
      branchOfBilling: '',
      collection: '',
      placeOfCollection: '',
      materialDesc: '',
      delivery: '',
      deliveryAt: 'j',
      placeOfDelivery: '',
      quantity: '',
      qtyPacking: '',
      nos: '',
      nosPacking: '',
      actualWeight: '',
      chargedWeight: '',
      eWayBillNo: 'BranchAgent',
      eWayExpireDate: '',
      invoiceNo: '',
      goodsValue: '',
      // ledgerName: '',
      // rowdate: '',
      // bank: '',
      // narration: '',
      lrRemarks: '',
      rows: []
    });
    setLrEntryDataId(null); // Clear ID for new entry
  };

  // Function to handle Save or Update LR
  const handleSaveLRClick = async () => {
    if (lrEntryDataId) {
      // Update logic
      try {
        const resultAction = await dispatch(updateLRAction({ id: lrEntryDataId?._id, ...lrEntryData }));
        if (updateLRAction.fulfilled.match(resultAction)) {
          setIsEditing(false); // Disable editing after update
          setLrEntryDataId(null); // Clear ID
          // Optionally reset the form after updating if needed
        } else {
          alert('Failed to update LR Entry: ' + resultAction.error.message);
        }
      } catch (error) {
        alert('Failed to update LR Entry: ' + error.message);
      }
    } else {
      // Add logic
      try {
        const resultAction = await dispatch(addAllLRsAction(lrEntryData));
        if (addAllLRsAction.fulfilled.match(resultAction)) {
          handleAddNewClick(); // Reset form for new entry
        } else {
          alert('Failed to add LR Entry: ' + resultAction.error.message);
        }
      } catch (error) {
        alert('Failed to add LR Entry: ' + error.message);
      }
    }
  };

  const currentId = lrEntryDataId?._id;
  const handleEditClick = (entry) => {
    console.log(lrEntryDataId, "lrEntryDataId"); // Logs lrEntryDataId object

    setButtonText("Update");
    setLrEntryData(lrEntryDataId); // Setting form data from state
    setIsEditing(true); // Enabling edit mode



    if (currentId) {
      console.log(currentId, "Current ID"); // Logging the current ID
      // Use currentId for any further logic, but don't try to call lrEntryDataId as a function
    }
  };


  // const handleInputChange = (index, field, value) => {
  //   const updatedRows = lrEntryData.rows.map((row, i) =>
  //     i === index ? { ...row, [field]: value } : row
  //   );
  //   setLrEntryData({
  //     ...lrEntryData,
  //     rows: updatedRows, // Update rows inside lrEntryData
  //   });
  // };

  const handleDeleteRowClick = (index) => {
    const updatedRows = lrEntryData?.rows?.filter((_, rowIndex) => rowIndex !== index);
    setLrEntryData({
      ...lrEntryData,
      rows: updatedRows, // Delete row inside rows array in lrEntryData
    });
  };
  // printing form 
  const componentRef = useRef(); // Reference to the component to be printed

  const handlePrint = useReactToPrint({
    content: () => componentRef.current, // This is the content you want to print
  });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Set to true after the component mounts
  }, []);

  if (!isMounted) {
    return null; // Render nothing during server-side rendering
  }
  return (

    <>

      {/* <pre>{JSON.stringify(allLRSData, null, 2)}</pre> */}
      <div className="max-w-4xl mx-auto p-6 bg-gray-200 rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-6 text-white bg-gray-500 rounded-sm p-2">
          LR Entry
        </h2>



        <div className="grid grid-cols-1 gap-4">
          <div className="grid grid-cols-1 gap-4">


            <div className="col-span-3">

              <div className="grid grid-cols-1 gap-4 mb-4">
                {/* Branch Dropdown */}
                <div className="flex items-center">
                  <label htmlFor="branch" className="text-sm font-semibold mr-1 w-24">Branch:</label>
                  <input
                    id="branch"
                    name="branch"
                    value={lrEntryData.branch}
                    onChange={handleChange}
                    readOnly={!isEditing} // Make field read-only if not editing
                    className={`mt-1 block w-full py-2 px-2 border border-gray-300 rounded-md shadow-sm 
                                                    focus:border-gray-500 focus:ring focus:ring-gray-500 focus:ring-opacity-50 
                                                    ${!isEditing ? 'bg-gray-200' : 'bg-white'}`}
                  // className="mt-1 block w-full py-2 px-2 border border-gray-300 rounded-md shadow-sm focus:border-gray-500 focus:ring focus:ring-gray-500 focus:ring-opacity-50"
                  />

                </div>

              </div>
              <div className="grid grid-cols-4 gap-4 mb-4">



                {/* LR No Input */}
                <div className="flex items-center">
                  <label className="text-sm font-semibold mr-1 w-24">LR No:</label>
                  <input
                    type="number"
                    id="lrNo"
                    name="lrNo"
                    value={lrEntryData.lrNo}
                    onChange={handleChange}
                    readOnly={!isEditing}
                    className={`mt-1 block w-full py-2 px-2 border border-gray-300 rounded-md shadow-sm 
                                                    focus:border-gray-500 focus:ring focus:ring-gray-500 focus:ring-opacity-50 
                                                    ${!isEditing ? 'bg-gray-200' : 'bg-white'}`}
                  // className="mt-1 block w-full py-2 px-2 border border-gray-300 rounded-md shadow-sm focus:border-gray-500 focus:ring focus:ring-gray-500 focus:ring-opacity-50"
                  />
                </div>

                {/* LR Date Input */}
                <div className="flex items-center">
                  <label htmlFor="lrDate" className="text-sm font-semibold mr-1 w-24">LR Date:</label>
                  <input
                    type="date"
                    id="lrDate"
                    name="lrDate"
                    // value={lrEntryData.lrDate}
                    // value={lrEntryData.lrDate.split('T')[0]}
                    value={lrEntryData?.lrDate ? lrEntryData?.lrDate?.split('T')[0] : ''}
                    onChange={handleChange}
                    readOnly={!isEditing} // Make field read-only if not editing
                    className={`mt-1 block w-full py-2 px-2 border border-gray-300 rounded-md shadow-sm 
                                                    focus:border-gray-500 focus:ring focus:ring-gray-500 focus:ring-opacity-50 
                                                    ${!isEditing ? 'bg-gray-200' : 'bg-white'}`}
                  // className="mt-1 block w-full py-2 px-2 border border-gray-300 rounded-md shadow-sm focus:border-gray-500 focus:ring focus:ring-gray-500 focus:ring-opacity-50"
                  />
                </div>

                {/* Vehicle No Dropdown */}
                <div className="flex items-center">
                  <label htmlFor="vehNo" className="text-sm font-semibold mr-1 w-24">Vehicle No:</label>
                  <select
                    id="vehNo"
                    name="vehNo"
                    value={lrEntryData.vehNo}
                    onChange={handleChange}
                    readOnly={!isEditing}
                    className={`mt-1 block w-full py-2 px-2 border border-gray-300 rounded-md shadow-sm 
                                                    focus:border-gray-500 focus:ring focus:ring-gray-500 focus:ring-opacity-50 
                                                    ${!isEditing ? 'bg-gray-200' : 'bg-white'}`}
                  // className="mt-1 block w-full py-2 px-2 border border-gray-300 rounded-md shadow-sm focus:border-gray-500 focus:ring focus:ring-gray-500 focus:ring-opacity-50"
                  >
                    <option value="">Select Vehicle No</option>
                    <option value="MH21">MH21</option>
                    <option value="MH20">MH20</option>
                  </select>
                </div>
                <div className="flex items-center">
                  <label className="text-sm font-semibold mr-1 w-24">LR Type:</label>
                  <input

                    id="vehType"
                    name="vehType"
                    value={lrEntryData.vehType}
                    onChange={handleChange}
                    readOnly={!isEditing}
                    className={`mt-1 block w-full py-2 px-2 border border-gray-300 rounded-md shadow-sm 
                                                    focus:border-gray-500 focus:ring focus:ring-gray-500 focus:ring-opacity-50 
                                                    ${!isEditing ? 'bg-gray-200' : 'bg-white'}`}
                  // className="mt-1 block w-full py-2 px-2 border border-gray-300 rounded-md shadow-sm focus:border-gray-500 focus:ring focus:ring-gray-500 focus:ring-opacity-50"
                  />
                </div>
              </div>


              <div className="grid grid-cols-2 gap-4 mb-4">

                {/* Consigner Name Input */}
                <div className="flex items-center">
                  <label className="text-sm font-semibold mr-1 w-24">Consigner Name</label>
                  <input
                    type="text"
                    name="consignorName"
                    placeholder="A K Engineering"
                    onChange={handleChange}
                    value={lrEntryData.consignorName}
                    readOnly={!isEditing}
                    className={`mt-1 block w-full py-2 px-2 border border-gray-300 rounded-md shadow-sm 
                                                    focus:border-gray-500 focus:ring focus:ring-gray-500 focus:ring-opacity-50 
                                                    ${!isEditing ? 'bg-gray-200' : 'bg-white'}`}
                  // className="border rounded px-3 py-2 w-full"
                  />
                </div>

                {/* Consignee Name Input */}
                <div className="flex items-center">
                  <label className="text-sm font-semibold mr-1 w-24">Consignee Name</label>
                  <input
                    type="text"
                    name="consigneeName"
                    placeholder="A K Engineering"
                    onChange={handleChange}
                    value={lrEntryData.consigneeName}
                    readOnly={!isEditing}
                    className={`mt-1 block w-full py-2 px-2 border border-gray-300 rounded-md shadow-sm 
                                                    focus:border-gray-500 focus:ring focus:ring-gray-500 focus:ring-opacity-50 
                                                    ${!isEditing ? 'bg-gray-200' : 'bg-white'}`}
                  // className="border rounded px-3 py-2 w-full"
                  />
                </div>

                {/* Party of Delivery Input */}
                {/* <div className="flex items-center">
                  <label className="text-sm font-semibold mr-1 w-24">Party Of Delivery</label>
                  <input
                    type="text"
                    placeholder="Enter Party Of Delivery"
                    // className="border rounded px-3 py-2 w-full"
                    name="partyOfDelivery"
                    onChange={handleChange}
                    value={lrEntryData.partyOfDelivery}
                    readOnly={!isEditing}
                    className={`mt-1 block w-full py-2 px-2 border border-gray-300 rounded-md shadow-sm 
                                                    focus:border-gray-500 focus:ring focus:ring-gray-500 focus:ring-opacity-50 
                                                    ${!isEditing ? 'bg-gray-200' : 'bg-white'}`}
                  />
                </div> */}
              </div>

              {/* Third Row: From and To Inputs */}
              <div className="grid grid-cols-2 gap-4 mb-4">

                {/* From Input */}
                <div className="flex items-center gap-2">
                  <label className="text-sm font-semibold mr-1 w-24">From</label>
                  <input
                    type="text"
                    placeholder="Aurangabad"
                    name="from1"
                    // className="border rounded px-3 py-2 w-full"
                    onChange={handleChange}
                    value={lrEntryData.from1}
                    readOnly={!isEditing}
                    className={`mt-1 block w-full py-2 px-2 border border-gray-300 rounded-md shadow-sm 
                                                    focus:border-gray-500 focus:ring focus:ring-gray-500 focus:ring-opacity-50 
                                                    ${!isEditing ? 'bg-gray-200' : 'bg-white'}`}
                  />
                  <input
                    type="text"
                    placeholder="Aurangabad"
                    name="from2"
                    // className="border rounded px-3 py-2 w-full"
                    onChange={handleChange}
                    value={lrEntryData.from2}
                    readOnly={!isEditing}
                    className={`mt-1 block w-full py-2 px-2 border border-gray-300 rounded-md shadow-sm 
                                                    focus:border-gray-500 focus:ring focus:ring-gray-500 focus:ring-opacity-50 
                                                    ${!isEditing ? 'bg-gray-200' : 'bg-white'}`}
                  />
                </div>

                {/* To Input */}
                <div className="flex items-center gap-2">
                  <label className="text-sm font-semibold mr-1">To</label>
                  <input
                    type="text"
                    placeholder="Enter Destination"

                    // className="w-full border rounded px-3 py-2"
                    name="to1"
                    onChange={handleChange}
                    value={lrEntryData.to1}
                    readOnly={!isEditing}
                    className={`mt-1 block w-full py-2 px-2 border border-gray-300 rounded-md shadow-sm 
                                                    focus:border-gray-500 focus:ring focus:ring-gray-500 focus:ring-opacity-50 
                                                    ${!isEditing ? 'bg-gray-200' : 'bg-white'}`}
                  />
                  <input
                    type="text"
                    placeholder="Enter Destination"
                    // className="w-full border rounded px-3 py-2"
                    name="to2"
                    onChange={handleChange}
                    value={lrEntryData.to2}
                    readOnly={!isEditing}
                    className={`mt-1 block w-full py-2 px-2 border border-gray-300 rounded-md shadow-sm 
                                                    focus:border-gray-500 focus:ring focus:ring-gray-500 focus:ring-opacity-50 
                                                    ${!isEditing ? 'bg-gray-200' : 'bg-white'}`}
                  />
                </div>
              </div>


              <div className="grid grid-cols-2 gap-4 mb-4">
                {/* DeliveryAt */}
                <div className="flex items-center">
                  <label className="text-sm font-semibold mr-4 w-24">DeliveryAt:</label>
                  <input
                    type="text"
                    name="deliveryAt"
                    value={lrEntryData.deliveryAt}
                    // disabled={lrEntryData.materialDesc === "No"}
                    onChange={handleChange}
                    // className="border rounded px-3 py-2 w-full"
                    readOnly={!isEditing}
                    className={`mt-1 block w-full py-2 px-2 border border-gray-300 rounded-md shadow-sm 
                                                    focus:border-gray-500 focus:ring focus:ring-gray-500 focus:ring-opacity-50 
                                                    ${!isEditing ? 'bg-gray-200' : 'bg-white'}`}
                  />
                </div>
                <div className="flex items-center">
                  <label className="text-sm font-semibold mr-4 w-24">Branch Of Billing</label>
                  <select
                    id="branchOfBilling"
                    name="branchOfBilling"
                    value={lrEntryData.branchOfBilling}
                    onChange={handleChange}
                    readOnly={!isEditing}
                    className={`mt-1 block w-full py-2 px-2 border border-gray-300 rounded-md shadow-sm 
                                                    focus:border-gray-500 focus:ring focus:ring-gray-500 focus:ring-opacity-50 
                                                    ${!isEditing ? 'bg-gray-200' : 'bg-white'}`}

                  // className="mt-1 block w-full py-2 border border-gray-300 rounded-md shadow-sm focus:border-gray-500 focus:ring focus:ring-gray-500 focus:ring-opacity-50"
                  >
                    <option value="">Select Branch</option>
                    <option value="Branch1">Branch 1</option>
                    <option value="Branch2">Branch 2</option>
                    <option value="Branch3">Branch 3</option>
                    {/* Add more options as needed */}
                  </select>

                </div>
              </div>


              <div className="grid grid-cols-1 gap-4 mb-4">
                <div className="flex items-center">
                  <label className="text-sm font-semibold mr-4 w-24">Mode of Freight</label>
                  <select
                    // className="border rounded px-3 py-2 w-full"
                    name='modeOfFreight'
                    onChange={handleChange}
                    value={lrEntryData.modeOfFreight}
                    readOnly={!isEditing}
                    className={`mt-1 block w-full py-2 px-2 border border-gray-300 rounded-md shadow-sm 
                                                    focus:border-gray-500 focus:ring focus:ring-gray-500 focus:ring-opacity-50 
                                                    ${!isEditing ? 'bg-gray-200' : 'bg-white'}`}
                  >
                    <option>Select value</option>
                    <option value="Paid">paid</option>
                    <option value="ToPay">ToPay</option>
                    <option value="to be biled">to be biled</option>
                    <option value="cancle">cancle</option>
                  </select>
                </div>


                {/* <div className='flex items-center'>
                  <label className="text-sm font-semibold mr-4 w-24">EWayBillNo</label>
                  <select
                    // className="border rounded px-3 py-2 w-full"
                    name='eWayBillNo'
                    onChange={handleChange}
                    value={lrEntryData.eWayBillNo}
                    disabled={lrEntryData.modeOfFreight === "to be biled"}
                    readOnly={!isEditing}
                    className={`mt-1 block w-full py-2 px-2 border border-gray-300 rounded-md shadow-sm 
                                                    focus:border-gray-500 focus:ring focus:ring-gray-500 focus:ring-opacity-50 
                                                    ${!isEditing ? 'bg-gray-200' : 'bg-white'}`}
                  >
                    <option value="pay">pay</option>
                    <option value="other">other</option>
                  </select>
                </div> */}




              </div>


              <div className="grid grid-cols-4 gap-4 mb-4">

                {/* collection */}
                <div className='flex items-center'>

                  <label htmlFor="placeOfCollection" className="text-sm font-semibold mr-4 w-24">Collection:</label>
                  <input
                    type="text"
                    id="collection"
                    name="collection"
                    value={lrEntryData.collection}
                    onChange={handleChange}
                    readOnly={!isEditing}
                    className={`mt-1 block w-full py-2 px-2 border border-gray-300 rounded-md shadow-sm 
                                                    focus:border-gray-500 focus:ring focus:ring-gray-500 focus:ring-opacity-50 
                                                    ${!isEditing ? 'bg-gray-200' : 'bg-white'}`}
                  // className="mt-1 block w-full py-2 border border-gray-300 rounded-md shadow-sm focus:border-gray-500 focus:ring focus:ring-gray-500 focus:ring-opacity-50"
                  />
                </div>
                {/* placeOfCollection */}
                <div className='flex items-center'>

                  <label htmlFor="placeOfCollection" className="text-sm font-semibold mr-4 w-24">placeOfCollection:</label>
                  <input
                    type="text"
                    id="placeOfCollection"
                    name="placeOfCollection"
                    value={lrEntryData.placeOfCollection}
                    onChange={handleChange}
                    readOnly={!isEditing}
                    className={`mt-1 block w-full py-2 px-2 border border-gray-300 rounded-md shadow-sm 
                                                    focus:border-gray-500 focus:ring focus:ring-gray-500 focus:ring-opacity-50 
                                                    ${!isEditing ? 'bg-gray-200' : 'bg-white'}`}
                  // className="mt-1 block w-full py-2 border border-gray-300 rounded-md shadow-sm focus:border-gray-500 focus:ring focus:ring-gray-500 focus:ring-opacity-50"
                  />
                </div>

                {/* Delivery */}
                <div className="flex items-center">
                  <label className="text-sm font-semibold mr-4 w-24">Delivery:</label>
                  <input
                    type="text"
                    name="delivery"
                    value={lrEntryData.delivery}
                    // disabled={lrEntryData.materialDesc === "No"}
                    onChange={handleChange}
                    // className="border rounded px-3 py-2 w-full"
                    readOnly={!isEditing}
                    className={`mt-1 block w-full py-2 px-2 border border-gray-300 rounded-md shadow-sm 
                                                    focus:border-gray-500 focus:ring focus:ring-gray-500 focus:ring-opacity-50 
                                                    ${!isEditing ? 'bg-gray-200' : 'bg-white'}`}
                  />
                </div>

                {/* Place of Delivery */}
                <div className="flex items-center">
                  <label className="text-sm font-semibold mr-4 w-24">Place of Delivery:</label>
                  <input
                    type="text"
                    name="placeOfDelivery"
                    value={lrEntryData.placeOfDelivery}
                    disabled={lrEntryData.materialDesc === "No"}
                    onChange={handleChange}
                    // className="border  rounded px-3 py-2 w-full"
                    readOnly={!isEditing}
                    className={`mt-1 block w-full py-2 px-2 border border-gray-300 rounded-md shadow-sm 
                                                    focus:border-gray-500 focus:ring focus:ring-gray-500 focus:ring-opacity-50 
                                                    ${!isEditing ? 'bg-gray-200' : 'bg-white'}`}
                  />
                </div>
              </div>



              <div className="grid grid-cols-4 gap-4 mb-4">
                <div className="flex items-center">
                  <label className="text-sm font-semibold mr-4 w-24">Quantity:</label>
                  <input
                    type="text"
                    name="quantity"
                    value={lrEntryData.quantity}
                    onChange={handleChange}
                    // className="border rounded px-3 py-2 w-full"
                    readOnly={!isEditing}
                    className={`mt-1 block w-full py-2 px-2 border border-gray-300 rounded-md shadow-sm 
                                                    focus:border-gray-500 focus:ring focus:ring-gray-500 focus:ring-opacity-50 
                                                    ${!isEditing ? 'bg-gray-200' : 'bg-white'}`}
                  />
                </div>
                {/* Quantity Sample */}
                <div className="flex items-center">
                  <label className="text-sm font-semibold mr-4 w-24">qtyPacking:</label>
                  <input
                    type="text"
                    name="qtyPacking"
                    value={lrEntryData.qtyPacking}
                    onChange={handleChange}
                    // className="border rounded px-3 py-2 w-full"
                    readOnly={!isEditing}
                    className={`mt-1 block w-full py-2 px-2 border border-gray-300 rounded-md shadow-sm 
                                                    focus:border-gray-500 focus:ring focus:ring-gray-500 focus:ring-opacity-50 
                                                    ${!isEditing ? 'bg-gray-200' : 'bg-white'}`}
                  />
                </div>
                {/* NOS Sample */}
                <div className="flex items-center">
                  <label className="text-sm font-semibold mr-4 w-24">NOS:</label>
                  <input
                    type="text"
                    name="nos"
                    value={lrEntryData.nos}
                    onChange={handleChange}
                    // className="border rounded px-3 py-2 w-full"
                    readOnly={!isEditing}
                    className={`mt-1 block w-full py-2 px-2 border border-gray-300 rounded-md shadow-sm 
                                                    focus:border-gray-500 focus:ring focus:ring-gray-500 focus:ring-opacity-50 
                                                    ${!isEditing ? 'bg-gray-200' : 'bg-white'}`}
                  />
                </div>
                {/* NOS Packing */}
                <div className="flex items-center">
                  <label className="text-sm font-semibold mr-4 w-24">NOSPacking:</label>
                  <input
                    type="text"
                    name="nosPacking"
                    value={lrEntryData.nosPacking}
                    onChange={handleChange}
                    // className="border rounded px-3 py-2 w-full"
                    readOnly={!isEditing}
                    className={`mt-1 block w-full py-2 px-2 border border-gray-300 rounded-md shadow-sm 
                                                    focus:border-gray-500 focus:ring focus:ring-gray-500 focus:ring-opacity-50 
                                                    ${!isEditing ? 'bg-gray-200' : 'bg-white'}`}
                  />
                </div>





              </div>



              <div className="grid grid-cols-2 gap-4 mb-4">
                {/* Actual Weight */}
                <div className="flex items-center">
                  <label className="text-sm font-semibold mr-4 w-24">Actual Weight:</label>
                  <input
                    type="number"
                    name="actualWeight"
                    value={lrEntryData.actualWeight}
                    onChange={handleChange}
                    // className="border rounded px-3 py-2 w-full"
                    readOnly={!isEditing}
                    className={`mt-1 block w-full py-2 px-2 border border-gray-300 rounded-md shadow-sm 
                                                    focus:border-gray-500 focus:ring focus:ring-gray-500 focus:ring-opacity-50 
                                                    ${!isEditing ? 'bg-gray-200' : 'bg-white'}`}
                  />
                </div>
                {/* Charged Weight */}
                <div className="flex items-center">
                  <label className="text-sm font-semibold mr-4 w-24">Charged Weight:</label>
                  <input
                    type="number"
                    name="chargedWeight"
                    value={lrEntryData.chargedWeight}
                    onChange={handleChange}
                    // className="border rounded px-3 py-2 w-full"
                    readOnly={!isEditing}
                    className={`mt-1 block w-full py-2 px-2 border border-gray-300 rounded-md shadow-sm 
                                                    focus:border-gray-500 focus:ring focus:ring-gray-500 focus:ring-opacity-50 
                                                    ${!isEditing ? 'bg-gray-200' : 'bg-white'}`}
                  />
                </div>





              </div>

              <div className="grid grid-cols-3 gap-4 mb-4">
                {/* Invoice No */}
                <div className="flex items-center">
                  <label className="text-sm font-semibold mr-4 w-24">Invoice No:</label>
                  <input
                    type="text"
                    name="invoiceNo"
                    value={lrEntryData.invoiceNo}
                    onChange={handleChange}
                    // className="border rounded px-3 py-2 w-full"
                    readOnly={!isEditing}
                    className={`mt-1 block w-full py-2 px-2 border border-gray-300 rounded-md shadow-sm 
                                                    focus:border-gray-500 focus:ring focus:ring-gray-500 focus:ring-opacity-50 
                                                    ${!isEditing ? 'bg-gray-200' : 'bg-white'}`}
                  />
                </div>
                {/* Goods Value */}
                <div className="flex items-center">
                  <label className="text-sm font-semibold mr-4 w-24">Goods Value:</label>
                  <input
                    type="number"
                    name="goodsValue"
                    value={lrEntryData.goodsValue}
                    onChange={handleChange}
                    // className="border rounded px-3 py-2 w-full"
                    readOnly={!isEditing}
                    className={`mt-1 block w-full py-2 px-2 border border-gray-300 rounded-md shadow-sm 
                                                    focus:border-gray-500 focus:ring focus:ring-gray-500 focus:ring-opacity-50 
                                                    ${!isEditing ? 'bg-gray-200' : 'bg-white'}`}
                  />
                </div>
                {/* materialDesc */}
                <div className="flex items-center">
                  <label className="text-sm font-semibold mr-4 w-24">materialDesc:</label>
                  <textarea
                    // className="border rounded px-3 py-2 w-full"
                    name="materialDesc"
                    value={lrEntryData.materialDesc}
                    onChange={handleChange}
                    readOnly={!isEditing}
                    className={`mt-1 block w-full py-2 px-2 border border-gray-300 rounded-md shadow-sm 
                                                    focus:border-gray-500 focus:ring focus:ring-gray-500 focus:ring-opacity-50 
                                                    ${!isEditing ? 'bg-gray-200' : 'bg-white'}`}>

                  </textarea>
                </div>

                {/* <div className="flex items-center">
                  <label className="text-sm font-semibold mr-4 w-24">Narration</label>
                  <input
                    type="text"
                    name="narration"
                    value={lrEntryData.narration}
                    onChange={handleChange}
                    // className="border rounded px-3 py-2 w-full"
                    readOnly={!isEditing}
                    className={`mt-1 block w-full py-2 px-2 border border-gray-300 rounded-md shadow-sm 
                                                    focus:border-gray-500 focus:ring focus:ring-gray-500 focus:ring-opacity-50 
                                                    ${!isEditing ? 'bg-gray-200' : 'bg-white'}`}
                  />
                </div> */}

                {/* <div className="flex items-center">
                  <label className="text-sm font-semibold mr-4 w-24">Amount</label>
                  <input type="number"
                    name="amount"
                    value={lrEntryData.amount}
                    onChange={handleChange}
                    // className="border rounded px-3 py-2 w-full"
                          readOnly={!isEditing} 
                                        className={`mt-1 block w-full py-2 px-2 border border-gray-300 rounded-md shadow-sm 
                                                    focus:border-gray-500 focus:ring focus:ring-gray-500 focus:ring-opacity-50 
                                                    ${!isEditing ? 'bg-gray-200' : 'bg-white'}`} 
                  />
    
    </div>

    <div className="flex items-center">
      <label className="text-sm font-semibold mr-4 w-24">Details</label>
      <input
        type="text"
        name="details"
        value={lrEntryData.details }
        onChange={handleChange}
                    // className="border rounded px-3 py-2 w-full"
                          readOnly={!isEditing} 
                                        className={`mt-1 block w-full py-2 px-2 border border-gray-300 rounded-md shadow-sm 
                                                    focus:border-gray-500 focus:ring focus:ring-gray-500 focus:ring-opacity-50 
                                                    ${!isEditing ? 'bg-gray-200' : 'bg-white'}`} 
      />
    </div> */}

              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">

                {/* eWayBillNo*/}
                <div className="flex items-center">
                  <label className="text-sm font-semibold mr-4 w-24">eWayBillNo:</label>
                  <input
                    type="text"
                    name="eWayBillNo"
                    value={lrEntryData.eWayBillNo}
                    onChange={handleChange}
                    // className="border rounded px-3 py-2 w-full"
                    readOnly={!isEditing}
                    className={`mt-1 block w-full py-2 px-2 border border-gray-300 rounded-md shadow-sm
                                                    focus:border-gray-500 focus:ring focus:ring-gray-500 focus:ring-opacity-50
                                                    ${!isEditing ? 'bg-gray-200' : 'bg-white'}`}
                  />
                </div>
                {/* eWayExpiry*/}
                <div className="flex items-center">
                  <label className="text-sm font-semibold mr-4 w-24">eWayExpiry:</label>
                  <input
                    type="text"
                    name="eWayExpireDate"
                    value={lrEntryData.eWayExpireDate}
                    onChange={handleChange}
                    // className="border rounded px-3 py-2 w-full"
                    readOnly={!isEditing}
                    className={`mt-1 block w-full py-2 px-2 border border-gray-300 rounded-md shadow-sm
                                                    focus:border-gray-500 focus:ring focus:ring-gray-500 focus:ring-opacity-50
                                                    ${!isEditing ? 'bg-gray-200' : 'bg-white'}`}
                  />
                </div>

              </div>
              <div className="grid grid-cols-1 gap-4 mb-4">


                <div className="flex items-center">
                  <label className="text-sm font-semibold mr-4 w-24">LR Remarks</label>
                  <textarea type="text"
                    // className="border rounded px-3 py-2 w-full"
                    name="lrRemarks"
                    value={lrEntryData.lrRemarks}
                    onChange={handleChange}
                    readOnly={!isEditing}
                    className={`mt-1 block w-full py-2 px-2 border border-gray-300 rounded-md shadow-sm 
                                                    focus:border-gray-500 focus:ring focus:ring-gray-500 focus:ring-opacity-50 
                                                    ${!isEditing ? 'bg-gray-200' : 'bg-white'}`}
                  >

                  </textarea>

                </div>
              </div>

            </div>


          </div>



          <div className='border border-b-1 border-gray-100'></div>
          <div className='flex justify-start items-start'>

            <button
              onClick={handleAddRowClick}

              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-2"
            >
              Add
            </button>

          </div>
          {/* print row Data start*/}
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="py-2 px-4 border-b border-gray-300 text-left">Ledger Name</th>
                  <th className="py-2 px-4 border-b border-gray-300 text-left">Amount</th>
                  <th className="py-2 px-4 border-b border-gray-300 text-left">Date</th>
                  <th className="py-2 px-4 border-b border-gray-300 text-left">Bank</th>
                  {/* <th className="py-2 px-4 border-b border-gray-300 text-left">Narration</th> */}
                </tr>
              </thead>
              <tbody>
                {lrEntryData.rows.map((row, index) => (
                  <tr key={index} className="hover:bg-gray-100 m-8">
                    <td className="py-2 px-4 border-b border-gray-300">{row.ledgerName}</td>
                    <td className="py-2 px-4 border-b border-gray-300">{row.amount}</td>
                    <td className="py-2 px-4 border-b border-gray-300">{row.rowdate}</td>
                    <td className="py-2 px-4 border-b border-gray-300">{row.bank}</td>
                    {/* <td className="py-2 px-4 border-b border-gray-300">{row.narration}</td> */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="grid grid-cols-1 gap-4 mb-4">


            <div className=" items-center">
              <label className="text-sm font-semibold mr-4 ">Balance</label>
              <textarea type="text"
                // className="border rounded px-3 py-2 w-full"
                // name="lrRemarks"
                // value={lrEntryData.lrRemarks}
                // onChange={handleChange}
                // readOnly={!isEditing}
                className={`mt-1 block w-full px-2 border border-gray-300 rounded-md shadow-sm 
                                                    focus:border-gray-500 focus:ring focus:ring-gray-500 focus:ring-opacity-50 
                                                   `}
              >

              </textarea>

            </div>
          </div>
          {/* print row Data End*/}
          <div className='flex flex-wrap'>
            {/* <div className="w-full lg:w-3/4"> Responsive width adjustment */}
            <div className=""> {/* Responsive width adjustment */}

              <div className="relative overflow-x-auto mr-4 max-h-[300px] overflow-y-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3">Ledger name</th>
                      <th scope="col" className="px-6 py-3">Amount</th>
                      <th scope="col" className="px-6 py-3">Date</th>
                      <th scope="col" className="px-6 py-3">Bank</th>
                      <th scope="col" className="px-6 py-3">Narration</th>
                      <th scope="col" className="px-6 py-3"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {lrEntryData?.rows?.map((row, index) => (
                      <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td className="px-2 py-4">
                          <input
                            type="text"
                            value={row.ledgerName}
                            readOnly={!isEditing}
                            onChange={(e) => handleInputChange(index, 'ledgerName', e.target.value)}
                            placeholder='Enter Ledger Name'
                            className={`px-2 py-1 w-32 border-gray-300 rounded-md shadow-sm
                                focus:border-gray-500 focus:ring focus:ring-gray-500 focus:ring-opacity-50
                                ${!isEditing ? 'bg-gray-200' : 'bg-white'}`}
                          />
                        </td>

                        <td className="px-2 py-4">
                          <input
                            type="text"
                            value={row.amount}
                            onChange={(e) => handleInputChange(index, 'amount', e.target.value)}
                            className={`px-2 py-1 w-32 border-gray-300 rounded-md shadow-sm
                                focus:border-gray-500 focus:ring focus:ring-gray-500 focus:ring-opacity-50
                                ${!isEditing ? 'bg-gray-200' : 'bg-white'}`}
                          />
                        </td>
                        <td className="px-2 py-4">
                          <input
                            type="text"
                            value={row.rowdate}
                            onChange={(e) => handleInputChange(index, 'rowdate', e.target.value)}
                            className={`px-2 py-1 w-32 border-gray-300 rounded-md shadow-sm
                                focus:border-gray-500 focus:ring focus:ring-gray-500 focus:ring-opacity-50
                                ${!isEditing ? 'bg-gray-200' : 'bg-white'}`}
                          />
                        </td>
                        <td className="px-2 py-4">
                          <input
                            type="text"
                            value={row.bank}
                            readOnly={!isEditing}
                            onChange={(e) => handleInputChange(index, 'bank', e.target.value)}
                            className={`px-2 py-1 w-32 border-gray-300 rounded-md shadow-sm
                                focus:border-gray-500 focus:ring focus:ring-gray-500 focus:ring-opacity-50
                                ${!isEditing ? 'bg-gray-200' : 'bg-white'}`}
                          />
                        </td>

                        <td className="px-2 py-4">
                          <input
                            type="text"
                            value={row.narration}
                            readOnly={!isEditing}
                            onChange={(e) => handleInputChange(index, 'narration', e.target.value)}
                            className={`px-2 py-1 w-32 border-gray-300 rounded-md shadow-sm
                                focus:border-gray-500 focus:ring focus:ring-gray-500 focus:ring-opacity-50
                                ${!isEditing ? 'bg-gray-200' : 'bg-white'}`}
                          />
                        </td>
                        <td className="px-6 py-4">
                          <button
                            onClick={() => handleDeleteRowClick(index)}
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                    <h2 className='font-bold mt-4'>Total Sum: {totalSum}</h2>
                  </tbody>
                </table>
              </div>

            </div>


          </div>
          {/* Buttons Section */}
          <div className="w-full  flex  space-x-2 sticky top-0"> {/* Stack buttons on smaller screens */}
            {isEditing && buttonText && (
              <button
                className="bg-gray-500 hover:bg-gray-700 text-center border border-white w-full text-white px-2 py-2 rounded-md"
                onClick={handleSaveLRClick}
              >
                {buttonText}
              </button>
            )}

            <button
              className="bg-gray-500 hover:bg-gray-700 text-center border border-white w-full text-white px-2 py-2 rounded-md"
              onClick={() => handleEditClick()}
            >
              Edit
            </button>

            <button
              className="bg-gray-500 hover:bg-gray-700 text-center border border-white w-full text-white px-2 py-2 rounded-md"
              onClick={handleAddNewClick}

            >
              Add new LR
            </button>

            <button className="bg-gray-500 hover:bg-gray-700 text-center border border-white w-full text-white px-2 py-2 rounded-md">
              Remove
            </button>
            <button className="bg-gray-500 hover:bg-gray-700 text-center border border-white w-full text-white px-2 py-2 rounded-md">
              Exit
            </button>
            <button className="bg-gray-500 hover:bg-gray-700 text-center border border-white w-full text-white px-2 py-2 rounded-md"
              onClick={handlePrint}>
              LR Print
            </button>
            {/* <LRPrint ref={componentRef} allLRSData={allLRSData} /> */}
            <button className="bg-gray-500 hover:bg-gray-700 text-center border border-white w-full text-white px-2 py-2 rounded-md">
              AdvanceD
            </button>
          </div>
        </div>
        {/* Extra table */}
        <div className="grid grid-cols-4 gap-4 mb-4 mt-8 bg-slate-500 px-4">



          {/* LR No Input */}
          <div className="flex items-center">
            <label className="text-sm font-semibold mr-1 w-24">LRcreat</label>
            <input
              type="number"
              id="lrNo"
              name="lrNo"
              // value={lrEntryData.lrNo}
              // onChange={handleChange}
              // readOnly={!isEditing}
              className={`mt-1 block w-full py-2 px-2 border border-gray-300 rounded-md shadow-sm 
                                                    focus:border-gray-500 focus:ring focus:ring-gray-500 focus:ring-opacity-50 
                                                    `}
            // className="mt-1 block w-full py-2 px-2 border border-gray-300 rounded-md shadow-sm focus:border-gray-500 focus:ring focus:ring-gray-500 focus:ring-opacity-50"
            />
          </div>

          {/* LR Date Input */}
          <div className="flex items-center">
            <label htmlFor="lrDate" className="text-sm font-semibold mr-1 w-24">LR Date:</label>
            <input
              type="date"
              id="lrDate"
              name="lrDate"
              // value={lrEntryData.lrDate}
              // value={lrEntryData.lrDate.split('T')[0]}
              // value={lrEntryData?.lrDate ? lrEntryData?.lrDate?.split('T')[0] : ''}
              // onChange={handleChange}
              // readOnly={!isEditing} // Make field read-only if not editing
              className={`mt-1 block w-full py-2 px-2 border border-gray-300 rounded-md shadow-sm 
                                                    focus:border-gray-500 focus:ring focus:ring-gray-500 focus:ring-opacity-50 
                                                `}
            // className="mt-1 block w-full py-2 px-2 border border-gray-300 rounded-md shadow-sm focus:border-gray-500 focus:ring focus:ring-gray-500 focus:ring-opacity-50"
            />
          </div>

          {/* Vehicle No Dropdown */}
          <div className="flex items-center">
            <label htmlFor="vehNo" className="text-sm font-semibold mr-1 w-24">LR Edit:</label>
            <select
              id="vehNo"
              name="vehNo"
              // value={lrEntryData.vehNo}
              // onChange={handleChange}
              // readOnly={!isEditing}
              className={`mt-1 block w-full py-2 px-2 border border-gray-300 rounded-md shadow-sm 
                                                    focus:border-gray-500 focus:ring focus:ring-gray-500 focus:ring-opacity-50 
                                                    `}
            // className="mt-1 block w-full py-2 px-2 border border-gray-300 rounded-md shadow-sm focus:border-gray-500 focus:ring focus:ring-gray-500 focus:ring-opacity-50"
            >
              <option value="">Select Vehicle No</option>
              <option value="MH21">MH21</option>
              <option value="MH20">MH20</option>
            </select>
          </div>
          <div className="flex items-center">
            <label className="text-sm font-semibold mr-1 w-24">Date:</label>
            <input

              id="vehType"
              name="vehType"
              // value={lrEntryData.vehType}
              // onChange={handleChange}
              // readOnly={!isEditing}
              className={`mt-1 block w-full py-2 px-2 border border-gray-300 rounded-md shadow-sm 
                                                    focus:border-gray-500 focus:ring focus:ring-gray-500 focus:ring-opacity-50 
                                                   `}
            // className="mt-1 block w-full py-2 px-2 border border-gray-300 rounded-md shadow-sm focus:border-gray-500 focus:ring focus:ring-gray-500 focus:ring-opacity-50"
            />
          </div>
        </div>
      </div>


    </>
  );
};

export default LREntryForm;

