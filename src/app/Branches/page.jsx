// components/Branches.js
"use client"
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBranchAction, getBranchAction } from '../lib/features/users/usersSlice';

const Branches = () => {
    const allBranches = useSelector(state => state.users.allBranches)
    const dispatch = useDispatch()
    const [branches, setBranches] = useState([]);
    // [
    //     { id: 1, name: 'Ahmednagar Branch', address: 'MIDC' },
    //     { id: 2, name: 'Aurangabad Branch', address: 'Waluj, Mondha Road' },
    //     { id: 3, name: 'Mumbai Branch', address: 'Sakinaka, Byculla Office, Vashi' },
    //     { id: 4, name: 'Pune Branch', address: '7, Pushkraj Apartment' },
    // ]
    const [formData, setFormData] = useState({
        type: '',
        type1: '',
        branchName: '',
        contactPerson: '',
        address: '',
        location: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleAddBranch = async () => {
        const data = await dispatch(addBranchAction(formData))
        setFormData({
            type: '',
            type1: '',
            branchName: '',
            contactPerson: '',
            address: '',
            location: '',
        });
    };
    useEffect(() => {
        const fetchAllBranches = async () => {
            const { payload } = await dispatch(getBranchAction())
            console.log(payload.data);

            setBranches(payload.data)
        }
        fetchAllBranches()
        return () => {

        }
    }, [allBranches])


    return (
        <div className="p-4 bg-gray-100 rounded-lg">
            <h2 className="text-2xl text-center font-bold mb-4 w-full mt-2  bg-gray-800 text-white rounded-sm rounded-b-lg px-4 py-2">Branches/Godowns</h2>
            <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                    <label className="block mb-2">Type</label>
                    <div className='flex gap-2'>

                        <select
                            name="type"
                            value={formData.type}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded"
                        >
                            <option value="">Select Type</option>
                            <option value="Branch">Branch</option>
                            <option value="Godown">Godown</option>
                        </select>
                        <select
                            name="type1"
                            value={formData.type1}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded"
                        >
                            <option value="">Select Type</option>
                            <option value="Branch">Branch2</option>
                            <option value="Godown">Godown2</option>
                        </select>
                    </div>
                </div>
                <div>
                    <label className="block mb-2">Branch Name</label>
                    <input
                        type="text"
                        name="branchName"
                        value={formData.branchName}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div>
                    <label className="block mb-2">Contact Person</label>
                    <input
                        type="text"
                        name="contactPerson"
                        value={formData.contactPerson}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div>
                    <label className="block mb-2">Address</label>
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div>
                    <label className="block mb-2">Branch/Godown Location</label>
                    <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
            </div>
            <button
                onClick={handleAddBranch}
                className="px-4 py-2 bg-gray-500  text-white rounded hover:bg-gray-600"
            >
                Add Branch
            </button>

            <div className="mt-6">
                <h3 className="text-lg font-bold mb-2">Branch List</h3>
                <table className="min-w-full bg-white border border-gray-300">
                    <thead className='bg-gray-700 text-white hover:bg-gray-900'>
                        <tr>
                            <th className="py-2 px-4 border-b">Sn. No.</th>
                            <th className="py-2 px-4 border-b">Branch Name</th>
                            <th className="py-2 px-4 border-b">Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {branches.map((branch, index) => (
                            <tr key={branch.id} className="text-center">
                                <td className="py-2 px-4 border-b border-r">{index + 1}</td>
                                <td className="py-2 px-4 border-b border-r">{branch.branchName}</td>
                                <td className="py-2 px-4 border-b border-r">{branch.address}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Branches;
