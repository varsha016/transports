// models/openingbillModel.js

import mongoose from 'mongoose';

const BillSchema = new mongoose.Schema({
    partyName: {
        type: String,
        // required: true,
        trim: true,
    },
    billType: {
        type: String,
        // enum: ['Freight', 'Service', 'Product'],
        // required: true,
    },
    billNo: {
        type: String,
        // required: true,
        trim: true,
    },
    billDate: {
        type: Date,
        // required: true,
    },
    billAmount: {
        type: Number,
        // required: true,
    },
}, {
    timestamps: true,
});

const Bill = mongoose.models.Bill || mongoose.model('Bill', BillSchema);

export default Bill;
