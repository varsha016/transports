"use client";
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFreightChargeAction, addLocationAction, getFreightChargeAction, getLocationAction } from '../lib/features/users/usersSlice';

const FreightCharge = () => {
    const dispatch = useDispatch();
    const [getFreightCharge, setGetFreightCharge] = useState();
    const [freight, setFreight] = useState({
        chargeType: '',
        capacity: '',
        dependentOn: '', // Holds the value for the radio selection
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFreight((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission
        const data = await dispatch(addFreightChargeAction(freight));
        return data;
    };

    const fetchFreightCharge = async () => {
        const data = await dispatch(getFreightChargeAction());
        console.log(data, "getFreightCharge");
        setGetFreightCharge(data.payload.data);
    };

    useEffect(() => {
        fetchFreightCharge();
    }, []);

    return (
        <div className="container mx-auto  bg-slate-400 mt-4 rounded-md">
            {/* <pre>{JSON.stringify(getFreightCharge, null, 2)}</pre> */}
            <h1 className="text-2xl font-bold mb-4 bg-gray-800 text-white rounded-sm rounded-b-lg px-4 py-2 mt-0">Freight Charge Type</h1>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
                <div className='grid grid-cols-1'>

                    <label className="">ChargeType:</label>
                    <input
                        type="text"
                        name="chargeType"
                        placeholder="Charge Type"
                        value={freight.chargeType}
                        onChange={handleChange}
                        className="border rounded p-2"
                    />
                </div>
                <div className='grid grid-cols-1'>

                    <label className="">Capacity:</label>
                    <input
                        type="text"
                        name="capacity"
                        placeholder="Capacity"
                        value={freight.capacity}
                        onChange={handleChange}
                        className="border rounded p-2"
                    />
                </div>
                {/* <div className='grid grid-cols-1'> */}

                {/* </div> */}
                <div className="col-span-1 md:col-span-3">
                    <div className="flex space-x-4">
                        <label className="">Dependent On:</label>
                        <label>
                            Weight
                            <input
                                type="radio"
                                name="dependentOn"
                                value="Weight"
                                checked={freight.dependentOn === "Weight"}
                                onChange={handleChange}
                                className="mr-2  ml-2 h-5 w-5"
                            />
                        </label>
                        <label>
                            Quantity
                            <input
                                type="radio"
                                name="dependentOn"
                                value="Quantity"
                                checked={freight.dependentOn === "Quantity"}
                                onChange={handleChange}
                                className="mr-2  ml-2 h-5 w-5"
                            />
                        </label>
                        <label>
                            Fixed
                            <input
                                type="radio"
                                name="dependentOn"
                                value="Fixed"
                                checked={freight.dependentOn === "Fixed"}
                                onChange={handleChange}
                                className="mr-2 ml-2 h-5 w-5"
                            />
                        </label>
                    </div>
                </div>
                <button
                    type="submit"
                    className="bg-gray-800 hover:bg-gray-900 text-white p-2 rounded col-span-1 md:col-span-1"
                >
                    Add Freight Charge
                </button>
            </form>

            <div className="mt-4 m-3">
                <h2 className="text-xl font-semibold">Freight Charge List</h2>
                <table className="min-w-full border mt-2 ">
                    <thead>
                        <tr>
                            <th className="border p-2">S.No</th>
                            <th className="border p-2">Vehicle Charge Type</th>

                            <th className="border p-2">Dependent On</th>
                        </tr>
                    </thead>
                    <tbody>
                        {getFreightCharge?.length === 0 ? (
                            <tr>
                                <td colSpan="4" className="border p-2 text-center">No freight charges added yet.</td>
                            </tr>
                        ) : (
                            getFreightCharge?.map((charge, index) => (
                                <tr key={index} className=" ">
                                    <td className="border p-2">{index + 1}</td>
                                    <td className="border p-2">{charge.chargeType}</td>
                                    <td className="border p-2">{charge.dependentOn}</td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default FreightCharge;
