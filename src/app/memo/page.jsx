'use client';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { useRouter } from 'next/router';
import { useRouter } from 'next/navigation';
// import { addMemoAction } from '../lib/features/users/loginSlice';
import { fetchAllLRsAction } from '../lib/features/users/usersSlice';
import axios from 'axios';





const AddMemoForm = () => {
    const router = useRouter();

    const handleExit = () => {
        router.push('/home');
    };

    const [allLRs, setAllLRs] = useState([])
    const [formValues, setFormValues] = useState({
        memoNo: '',
        date: '',
        vehicleType: '',
        branch: '',
        type: '',
        vehicleNo: '',
        from: '',
        to: '',
        vehicleOwner: '',
        telephoneNo: '',
        driverName: '',
        drivingLicNo: '',
        engineNo: '',
        chassisNo: '',
        octroiAgent: '',
        selfLRs: '',
        // totalLRs: '',
        // toBeBilledLRs: '',
        // total: '',
        // paidLRs: '',
        // toPayLRs: '',
        // branch: '',
        // party: '',
        advancePaidDate: '',
        amount: '',
        payableAt: '',
        advanceThrough: '',
        remark: '',
        advance: '',
        narration: ''
    });



    const handleChange = (e) => {
        const { name, value } = e.target;

        // Update form values for regular inputs
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value
        }));

        // If the user selects an invoice, find the corresponding details
        if (name === 'selfLRs') {
            const selectedInvoice = allLRs.find(item => item.lrNo === value);

            // If an invoice is found, update the selected invoice details
            if (selectedInvoice) {
                setFormValues((prevValues) => ({
                    ...prevValues,
                    // Update the form values with the selected invoice data
                    amount: selectedInvoice.amount,
                    destination: selectedInvoice.destination,
                    lrNo: selectedInvoice.lrNo,
                    lrDate: selectedInvoice.lrDate,
                    consignee: selectedInvoice.consignee,
                    qty: selectedInvoice.qty,
                    weight: selectedInvoice.weight,
                    lrType: selectedInvoice.lrType,
                    delivery: selectedInvoice.delivery,
                    // Add more fields as needed based on your invoice data
                }));
            }
        }
    };

    const filteredLRs = allLRs.filter(lr => lr.lrNo === formValues.selfLRs);
    console.log(filteredLRs, "filteredLRs");

    const dispatch = useDispatch()
    const handleAddMemo = async (e) => {
        // e.preventDefault();
        console.log('Form Submitted', formValues);
        // dispatch(addMemoAction(formValues))


    };

    const fetchAllLRs = async () => {
        const response = await axios.get('/api/getLREntry')
        // const data = await response.json()
        console.log(response.data, 'data')
        setAllLRs(response.data?.data)
        // setLoading(true)
    }
    useEffect(() => {
        fetchAllLRs()

        return () => {

        }
    }, [])



    useEffect(() => {
        if (allLRs && allLRs?.length > 0) {
            console.log(allLRs, 'allLRs data');
            const filteredRecord = allLRs?.find((lr) => lr?.vehNo === "MH20");
            console.log(filteredRecord, 'filteredRecord');

            if (filteredRecord) {
                setFormValues((prevValues) => ({
                    ...prevValues,
                    from: filteredRecord.from || "",
                    to: filteredRecord.to || "",
                    vehicleNo: filteredRecord.vehNo || "",
                    // Bind other fields as necessary
                    // vehicleOwner: filteredRecord.vehicleOwner || "",
                    // driverName: filteredRecord.driverName || "",
                    // Add more fields if needed
                }));
            }
        }
    }, [allLRs]);


    const handlePrintMemo = () => {
        const printWindow = window.open('', '_blank');
        printWindow.document.write(`
            <html>
                <head>
                    <title>Print Memo</title>
                    <style>
                        body { font-family: Arial, sans-serif; margin: 20px; }
                        table { width: 100%; border-collapse: collapse; }
                        th, td { border: 1px solid #ddd; padding: 8px; }
                        th { background-color: #f2f2f2; }
                    </style>
                </head>
                <body>
                    <h2>Memo Details</h2>
                    <table>
                        <tr>
                            <th>Memo Type</th>
                            <td>${formValues.memoNo}</td>
                        </tr>
                        <tr>
                            <th>Date</th>
                            <td>${formValues.date}</td>
                        </tr>
                        <tr>
                            <th>Vehicle Type</th>
                            <td>${formValues.vehicleType}</td>
                        </tr>
                        <tr>
                            <th>From</th>
                            <td>${formValues.from}</td>
                        </tr>
                        <tr>
                            <th>To</th>
                            <td>${formValues.to}</td>
                        </tr>
                        <tr>
                            <th>Vehicle No</th>
                            <td>${formValues.vehicleNo}</td>
                        </tr>
                        <tr>
                            <th>Driver Name</th>
                            <td>${formValues.driverName}</td>
                        </tr>
                        <tr>
                            <th>Advance</th>
                            <td>${formValues.advance}</td>
                        </tr>
                    </table>
                </body>
            </html>
        `);
        printWindow.document.close();
        printWindow.focus();
        printWindow.print();
        printWindow.close();
    };





    return (

        <div className="max-w-4xl mx-auto p-6 bg-gray-200 rounded-lg">
            {/* <pre> {JSON.stringify(allLRs, null, 2)}</pre> */}
            <h2 className="text-2xl font-bold text-center mb-6 text-white bg-gray-500 rounded-sm p-2">
                Memo Form
            </h2>
            <p>It&apos;s a beautiful day!</p>
            {/* Memo Type */}
            <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex items-center">
                    <label className="text-sm font-semibold mr-4 w-24">Memo Type:</label>
                    <input
                        type="text"
                        name="memoNo"
                        value={formValues.memoNo}
                        onChange={handleChange}
                        placeholder="Enter Memo Type"
                        className="border rounded px-3 py-2 w-full"
                    />
                </div>

                {/* Date */}
                <div className="flex items-center">
                    <label className="text-sm font-semibold mr-4 w-24">Date:</label>
                    <input
                        type="date"
                        name="date"
                        value={formValues.date}
                        onChange={handleChange}
                        className="border rounded px-3 py-2 w-full"
                    />
                </div>
            </div>

            {/* Vehicle Type and Type */}
            <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex items-center">
                    <label className="text-sm font-semibold mr-4 w-24">Vehicle Type:</label>
                    <select
                        name="vehicleType"
                        value={formValues.vehicleType}
                        onChange={handleChange}
                        className="border rounded px-3 py-2 w-full"
                    >
                        <option value="">Select Vehicle Type</option>
                        <option value="Truck">Truck</option>
                        <option value="Van">Van</option>
                        <option value="Car">Car</option>
                    </select>
                </div>

                {/* <div className="flex items-center">
                    <label className="text-sm font-semibold mr-4 w-24">Type:</label>
                    <select
                        name="type"
                        value={formValues.type}
                        onChange={handleChange}
                        className="border rounded px-3 py-2 w-full"
                    >
                        <option value="">Select Type</option>
                        <option value="Type1">Type 1</option>
                        <option value="Type2">Type 2</option>
                        <option value="Type3">Type 3</option>
                    </select>
                </div> */}
                <div className="flex items-center">
                    <label className="text-sm font-semibold mr-4 w-24">Branch :</label>
                    <input
                        type="branch"
                        name="branch"
                        value={formValues.branch}
                        onChange={handleChange}
                        className="border rounded px-3 py-2 w-full"
                    />
                </div>
            </div>

            {/* Transport and Vehicle No */}
            <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex items-center">
                    <label className="text-sm font-semibold mr-4 w-24"></label>
                    <select
                        name="type"
                        value={formValues.type}
                        onChange={handleChange}
                        className="border rounded px-3 py-2 w-full"
                    >
                        <option value="">Select Types</option>
                        <option value="Transport1">pune 1</option>
                        <option value="Transport2">pune 2</option>
                        <option value="Transport3">pune 3</option>
                    </select>
                </div>

                <div className="flex items-center">
                    <label className="text-sm font-semibold mr-4 w-24">Vehicle No:</label>
                    <input
                        type="text"
                        name="vehicleNo"
                        value={formValues.vehicleNo}
                        onChange={handleChange}

                        placeholder="Enter Vehicle No"
                        className="border rounded px-3 py-2 w-full"
                    />
                </div>
            </div>

            {/* From and To */}
            <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex items-center">
                    <label className="text-sm font-semibold mr-4 w-24">From:</label>
                    <input
                        type="text"
                        name="from"
                        value={formValues.from}
                        onChange={handleChange}
                        placeholder="From"
                        className="border rounded px-3 py-2 w-full"
                    />
                </div>

                <div className="flex items-center">
                    <label className="text-sm font-semibold mr-4 w-24">To:</label>
                    <input
                        type="text"
                        name="to"
                        value={formValues.to}
                        onChange={handleChange}
                        placeholder="To"
                        className="border rounded px-3 py-2 w-full"
                    />
                </div>
            </div>
            {/* Vehicle Owner's and Telephone No */}
            <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex items-center">
                    <label className="text-sm font-semibold mr-4 w-24">Vehicle Owner's:</label>
                    <input
                        type="text"
                        name="vehicleOwner"
                        value={formValues.vehicleOwner}
                        onChange={handleChange}
                        placeholder="Enter Vehicle Owner's Name"
                        className="border rounded px-3 py-2 w-full"
                    />
                </div>

                <div className="flex items-center">
                    <label className="text-sm font-semibold mr-4 w-24">Telephone No:</label>
                    <input
                        type="text"
                        name="telephoneNo"
                        value={formValues.telephoneNo}
                        onChange={handleChange}
                        placeholder="Enter Telephone No"
                        className="border rounded px-3 py-2 w-full"
                    />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex items-center">
                    <label className="text-sm font-semibold mr-4 w-24">Driver Name :</label>
                    <input
                        type="text"
                        name="driverName"
                        value={formValues.driverName}
                        onChange={handleChange}
                        placeholder="Enter Vehicle Owner's Name"
                        className="border rounded px-3 py-2 w-full"
                    />
                </div>

                <div className="flex items-center">
                    <label className="text-sm font-semibold mr-4 w-24">DrivingLic No :</label>
                    <input
                        type="text"
                        name="drivingLicNo"
                        value={formValues.drivingLicNo}
                        onChange={handleChange}
                        placeholder="Enter drivingLicNo No"
                        className="border rounded px-3 py-2 w-full"
                    />
                </div>

            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex items-center">
                    <label className="text-sm font-semibold mr-4 w-24">EngineNo:</label>
                    <input
                        type="text"
                        name="engineNo"
                        value={formValues.engineNo}
                        onChange={handleChange}
                        placeholder="Enter engineNo No"
                        className="border rounded px-3 py-2 w-full"
                    />
                </div>
                <div className="flex items-center">
                    <label className="text-sm font-semibold mr-4 w-24">ChassisNo:</label>
                    <input
                        type="text"
                        name="chassisNo"
                        value={formValues.chassisNo}
                        onChange={handleChange}
                        placeholder="Enter chassisNo No"
                        className="border rounded px-3 py-2 w-full"
                    />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">

                <div className="flex items-center">
                    <label className="text-sm font-semibold mr-4 w-24">OctroiAgent:</label>
                    <select
                        name="octroiAgent"
                        value={formValues.octroiAgent}
                        onChange={handleChange}
                        className="border rounded px-3 py-2 w-full"
                    >
                        <option value="">Select Transport</option>
                        <option value="Transport1">Transport 1</option>
                        <option value="Transport2">Transport 2</option>
                        <option value="Transport3">Transport 3</option>
                    </select>
                </div>

                <div className="flex items-center">
                    <label className="text-sm font-semibold mr-4 w-24">selfLRs:</label>
                    <select
                        name="selfLRs"
                        value={formValues.selfLRs}
                        onChange={handleChange}
                        className="border rounded px-3 py-2 w-full"
                    >
                        <option value="">Select Transport</option>
                        {allLRs.map((lr, index) => (
                            <option key={index} value={lr.lrNo}>
                                {lr.lrNo}
                            </option>
                        ))}
                    </select>
                    {/* <label className="text-sm font-semibold mr-4 w-24">selfLRs:</label>
                    <select
                        name="selfLRs"
                        value={formValues.selfLRs}
                        onChange={handleChange}
                        className="border rounded px-3 py-2 w-full"
                    >
                        <option value="">Select Transport</option>
                        {allLRs.map(item => <>
                            <option value="">{item.invoiceNo}</option>
                        </>)}

                    </select> */}
                </div>

            </div>


            {/* Advance Paid Date and Amount */}
            <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex items-center">
                    <label className="text-sm font-semibold mr-4 w-24">Advance Paid Date:</label>
                    <input
                        type="date"
                        name="advancePaidDate"
                        value={formValues.advancePaidDate}
                        onChange={handleChange}
                        className="border rounded px-3 py-2 w-full"
                    />
                </div>

                <div className="flex items-center">
                    <label className="text-sm font-semibold mr-4 w-24">Amount:</label>
                    <input
                        type="number"
                        name="amount"
                        value={formValues.amount}
                        onChange={handleChange}
                        placeholder="Enter Amount"
                        className="border rounded px-3 py-2 w-full"
                    />
                </div>
            </div>

            {/* Payable At and Advance Through */}
            <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex items-center">
                    <label className="text-sm font-semibold mr-4 w-24">Payable At:</label>
                    <input
                        type="text"
                        name="payableAt"
                        value={formValues.payableAt}
                        onChange={handleChange}
                        placeholder="Enter Payable At"
                        className="border rounded px-3 py-2 w-full"
                    />
                </div>

                <div className="flex items-center">
                    <label className="text-sm font-semibold mr-4 w-24">Advance Through:</label>
                    <input
                        type="text"
                        name="advanceThrough"
                        value={formValues.advanceThrough}
                        onChange={handleChange}
                        placeholder="Enter Advance Through"
                        className="border rounded px-3 py-2 w-full"
                    />
                </div>
            </div>

            {/* Remark and Advance */}
            <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex items-center">
                    <label className="text-sm font-semibold mr-4 w-24">Remark:</label>
                    <input
                        type="text"
                        name="remark"
                        value={formValues.remark}
                        onChange={handleChange}
                        placeholder="Enter Remark"
                        className="border rounded px-3 py-2 w-full"
                    />
                </div>

                <div className="flex items-center">
                    <label className="text-sm font-semibold mr-4 w-24">Advance:</label>
                    <input
                        type="number"
                        name="advance"
                        value={formValues.advance}
                        onChange={handleChange}
                        placeholder="Enter Advance"
                        className="border rounded px-3 py-2 w-full"
                    />
                </div>
            </div>

            {/* Narration */}
            <div className="grid grid-cols-1 gap-4 mb-4">
                <div className="flex items-center">
                    <label className="text-sm font-semibold mr-4 w-24">Narration:</label>
                    <input
                        type="text"
                        name="narration"
                        value={formValues.narration}
                        onChange={handleChange}
                        placeholder="Enter Narration"
                        className="border rounded px-3 py-2 w-full"
                    />
                </div>
            </div>



            <div className="ml-24 m-2">
                <table className="table-auto w-[200px] py-0 border border-gray-300">
                    <thead className="bg-gray-900">
                        <tr>
                            <th className="px-2 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-500">Sr No</th>
                            <th className="px-2 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-500">LR Name</th>
                            <th className="px-2 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-500">Destination</th>
                            <th className="px-2 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-500">LR No</th>
                            <th className="px-2 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-500">LR Date</th>
                            <th className="px-2 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-500">Consignee</th>
                            <th className="px-2 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-500">Qty</th>
                            <th className="px-2 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-500">Weight</th>
                            {/* <th className="px-2 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-500">Amount</th> */}
                            {/* <th className="px-2 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-500">Delivery</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {/* Dynamically render table rows based on filtered data */}
                        {filteredLRs.map((lr, index) => (
                            <tr key={index}>
                                <td className="px-2 py-1 border border-gray-500">{index + 1}</td>
                                <td className="px-2 py-1 border border-gray-500">{lr.branch}</td>
                                <td className="px-2 py-1 border border-gray-500">{lr.placeOfLoading}</td>
                                <td className="px-2 py-1 border border-gray-500">{lr.lrNo}</td>
                                <td className="px-2 py-1 border border-gray-500">{lr.lrDate}</td>
                                <td className="px-2 py-1 border border-gray-500">{lr.consigneeName}</td>
                                <td className="px-2 py-1 border border-gray-500">{lr.quantity}</td>
                                <td className="px-2 py-1 border border-gray-500">{lr.actualWeight}</td>
                                {/* <td className="px-2 py-1 border border-gray-500">{lr.amount}</td> */}
                                {/* <td className="px-2 py-1 border border-gray-500">{lr.delivery}</td> */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/* </table> */}

            <div className="flex space-y-1 items-start space-x-2 ml-24">
                <button className="bg-gray-500 hover:bg-gray-700 text-center border border-white w-[100px]  my-2  text-white px-2 py-2  rounded-md" onClick={handleAddMemo}>Add</button>
                <button className="bg-gray-500 hover:bg-gray-700 text-center border border-white w-[100px]  my-2  text-white px-2 py-2  rounded-md">Change</button>
                <button className="bg-gray-500 hover:bg-gray-700 text-center border border-white w-[100px]  my-2  text-white px-2 py-2  rounded-md">Remove</button>
                <button className="bg-gray-500 hover:bg-gray-700 text-center border border-white w-[100px]  my-2  text-white px-2 py-2  rounded-md" onClick={handleExit} >Exit</button>
                <button className="bg-gray-500 hover:bg-gray-700 text-center border border-white w-[110px]  my-2  text-white px-2 py-2  rounded-md" onClick={handlePrintMemo}>Memo Print</button>
                <button className="bg-gray-500 hover:bg-gray-700 text-center border border-white w-[110px]  my-2  text-white px-2 py-2  rounded-md">AdvanceD</button>
            </div>
        </div>
    );
};

export default AddMemoForm;

