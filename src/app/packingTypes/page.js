

"use client"
import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPackingTypesAction } from "../lib/features/users/usersSlice";


const PackingTypes = () => {
    const dispatch = useDispatch()
    const allPackingTypes = useSelector(state => state.users.allPackingTypes)
    const [packingType, setPackingType] = useState("");
    const [packingList, setPackingList] = useState([]);
    const fetchPackingTypes = async () => {
        try {
            const response = await axios.get("/api/getPackingType");
            // const result = await response.json();
            console.log(response.data, "response");

            if (response.data.success) {
                setPackingList(response.data.data);
            } else {
                console.error("Failed to fetch packing types");
            }
        } catch (error) {
            console.error("Error fetching packing types:", error);
        }
    };

    useEffect(() => {
        // Fetch vehicle types from the API


        fetchPackingTypes();
    }, [allPackingTypes]);

    const addPackingType = async () => {
        const data = await dispatch(addPackingTypesAction(packingType))
        console.log(data);

    }

    // const addPackingType = () => {
    //     if (packingType.trim() === "") return;
    //     const newVehicle = { id: packingList.length + 1, type: packingType };
    //     setPackingList([...packingList, newVehicle]);
    //     setPackingType("");
    // };

    return (
        <div className="flex flex-col items-center  bg-gray-100 rounded-md shadow-md">

            <h2 className="text-2xl font-bold mb-4 w-full mt-2  bg-gray-800 text-white rounded-sm rounded-b-lg px-4 py-2">Packing Types</h2>
            <div className="w-full flex gap-2 max-w-2xl p-6">
                <input
                    type="text"
                    value={packingType}
                    onChange={(e) => setPackingType(e.target.value)}
                    placeholder="Enter packing Type"
                    className="w-full p-2  border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                />
                <button
                    onClick={addPackingType}
                    className="w-full bg-gray-600 text-white p-2 rounded-md hover:bg-gray-700 transition-colors"
                >
                    Add Packing Type
                </button>
            </div>
            <div className="mt-6 w-full max-w-2xl p-6">
                <table className="w-full border-collapse bg-white shadow-lg rounded-md">
                    <thead>
                        <tr className="bg-gray-800 text-white">
                            <th className="p-2 border">S.No</th>
                            <th className="p-2 border">Packing Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {packingList.map((packing, index) => (
                            <tr key={packing._id} className="hover:bg-gray-100">
                                <td className="p-2 border text-center">{index + 1}</td>
                                <td className="p-2 border">{packing.type}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PackingTypes;
