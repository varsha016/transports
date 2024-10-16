// models/branchModel.js

import mongoose from 'mongoose';

const BranchSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['Branch', 'Godown'],
        // required: true,
    },
    type1: {
        type: String,
        enum: ['Branch', 'Godown'],
        // required: true,
    },
    branchName: {
        type: String,
        // required: true,
        trim: true,
    },
    contactPerson: {
        type: String,
        trim: true,
    },
    address: {
        type: String,
        // required: true,
        trim: true,
    },
    location: {
        type: String,
        trim: true,
    },
}, {
    timestamps: true, // Adds createdAt and updatedAt fields
});

const Branch = mongoose.models.Branch || mongoose.model('Branch', BranchSchema);

export default Branch;
