// models/Consigner.js
const mongoose = require('mongoose');

const BrokerSchema = new mongoose.Schema({
    brokerName: {
        type: String,
        // required: true,
    },
    contactPerson: {
        type: String,
        // required: true,
    },
    address: {
        type: String,
        // required: true,
    },
    panNo: {
        type: String,
        // required: true,
    },

}, {
    timestamps: true,
});

module.exports = mongoose.models.Broker || mongoose.model('Broker', BrokerSchema);
