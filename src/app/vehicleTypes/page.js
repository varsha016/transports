

"use client"
import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addVehicleTypesAction } from "../lib/features/users/usersSlice";

const VehicleTypes = () => {
    const dispatch = useDispatch()
    const allVehicleTypes = useSelector(state => state.users.allVehicleTypes)
    const [vehicleType, setVehicleType] = useState("");
    const [vehicleList, setVehicleList] = useState([]);
    const fetchVehicleTypes = async () => {
        try {
            const response = await axios.get("/api/fetchVehicleType");
            // const result = await response.json();
            console.log(response.data, "response");

            if (response.data.success) {
                setVehicleList(response.data.data);
            } else {
                console.error("Failed to fetch vehicle types");
            }
        } catch (error) {
            console.error("Error fetching vehicle types:", error);
        }
    };

    useEffect(() => {
        // Fetch vehicle types from the API


        fetchVehicleTypes();
    }, [allVehicleTypes]);

    const addVehicleType = async () => {
        const data = await dispatch(addVehicleTypesAction(vehicleType))
        // console.log(data);

    }

    // const addVehicleType = () => {
    //     if (vehicleType.trim() === "") return;
    //     const newVehicle = { id: vehicleList.length + 1, type: vehicleType };
    //     setVehicleList([...vehicleList, newVehicle]);
    //     setVehicleType("");
    // };

    return (
        <div className="flex flex-col items-center  bg-gray-100 rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-4 w-full mt-2  bg-gray-800 text-white rounded-sm rounded-b-lg px-4 py-2">Vehicle Types</h2>
            <div className="w-full flex gap-2 max-w-2xl p-6">
                <input
                    type="text"
                    value={vehicleType}
                    onChange={(e) => setVehicleType(e.target.value)}
                    placeholder="Enter Vehicle Type"
                    className="w-full p-2  border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                />
                <button
                    onClick={addVehicleType}
                    className="w-full bg-gray-600 text-white p-2 rounded-md hover:bg-gray-700 transition-colors"
                >
                    Add Vehicle Type
                </button>
            </div>
            <div className="mt-6 w-full max-w-2xl p-6">
                <table className="w-full border-collapse bg-white shadow-lg rounded-md">
                    <thead>
                        <tr className="bg-gray-800 text-white">
                            <th className="p-2 border">S.No</th>
                            <th className="p-2 border">Vehicle Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {vehicleList.map((vehicle, index) => (
                            <tr key={vehicle._id} className="hover:bg-gray-100">
                                <td className="p-2 border text-center">{index + 1}</td>
                                <td className="p-2 border">{vehicle.type}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default VehicleTypes;
