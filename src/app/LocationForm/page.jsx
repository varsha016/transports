// components/LocationForm.js
"use client"
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addLocationAction, getLocationAction } from '../lib/features/users/usersSlice';

const LocationForm = () => {
    const dispatch = useDispatch()
    const [getLocation, setGetLocation] = useState()
    const [location, setLocation] = useState({
        state: '',
        locationName: '',
        subLocation: ''
    });



    const handleChange = (e) => {
        const { name, value } = e.target;
        setLocation((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission
        const data = await dispatch(addLocationAction(location))
        return data

    };
    const [state, setState] = useState([]);
    const handleStateData = async () => {
        try {
            const { data: { data } } = await axios.get("https://countriesnow.space/api/v0.1/countries/states");

            // Find the country data for India directly
            const countryData = data.find(item => item.name === "India");

            // Check if countryData is found and has states, then map to get state names
            if (countryData && countryData.states) {
                setState(countryData.states.map(item => item.name));
            } else {
                console.error("No states found for India.");
            }
        } catch (error) {
            console.error("Error fetching states:", error);
        }
    };


    const getLocations = async () => {
        const data = await dispatch(getLocationAction())
        console.log(data, "getLocation");

        setGetLocation(data.payload.data)
    }

    useEffect(() => {
        handleStateData()
        getLocations()
    }, [])
    return (
        <div className="container mx-auto bg-slate-400 mt-4">
            {/* <pre>{JSON.stringify(getLocation, null, 2)}</pre> */}
            <h1 className="text-2xl font-bold mb-4  bg-gray-800 text-white rounded-sm rounded-b-lg py-2 px-4">Locations</h1>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
                <input
                    type="text"
                    name="locationName"
                    placeholder="Location Name"
                    value={location.locationName}
                    onChange={handleChange}
                    className="border rounded p-2"
                />
                {/* <input
                    type="text"
                    value={location.state}
                    onChange={handleChange}
                    className="border rounded p-2"
                /> */}
                <select
                    name="state"
                    id="state"
                    value={location.state}
                    onChange={handleChange}
                    // className='border rounded p-2'
                    className="w-full max-w-md p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                    <option value="">-- Select a State --</option>
                    {state?.map((state) => (
                        <option key={state.id} value={state} >
                            {state}
                        </option>
                    ))}
                </select>
                <input
                    type="text"
                    name="subLocation"
                    placeholder="Sub Location"
                    value={location.subLocation}
                    onChange={handleChange}
                    className="border rounded p-2"
                />
                <button
                    type="submit"
                    className="bg-gray-800 hover:bg-gray-900 text-white p-2 rounded col-span-1 md:col-span-1"
                >
                    Add Location
                </button>
            </form>

            <div className="mt-4 p-4">
                <h2 className="text-xl font-semibold">Location List</h2>
                <table className="min-w-full border mt-2">
                    <thead>
                        <tr>
                            <th className="border border-black p-2">S.No</th>
                            <th className="border border-black p-2">Location Name</th>
                            <th className="border border-black p-2">State Name</th>
                            <th className="border border-black p-2">Sub Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        {getLocation?.length === 0 ? (
                            <tr>
                                <td colSpan="4" className="border p-2 text-center">No locations added yet.</td>
                            </tr>
                        ) : (
                            getLocation?.map((loc, index) => (
                                <tr key={index} className="hover:bg-gray-100">
                                    <td className="border border-black p-2">{index + 1}</td>
                                    <td className="border border-black p-2">{loc.locationName}</td>
                                    <td className="border border-black p-2">{loc.state}</td>
                                    <td className="border border-black p-2">{loc.subLocation}</td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default LocationForm;
