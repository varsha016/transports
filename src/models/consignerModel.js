// models/Consigner.js
const mongoose = require('mongoose');

const ConsignerSchema = new mongoose.Schema({
    consignerName: {
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
    town1: {
        type: String,
        // required: true,
    },
    town2: {
        type: String,
        // required: true,
    },
}, {
    timestamps: true,
});

module.exports = mongoose.models.Consigner || mongoose.model('Consigner', ConsignerSchema);
