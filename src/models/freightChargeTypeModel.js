// models/FreightChargeTypeModel.js
import mongoose from "mongoose";

const FreightChargeSchema = new mongoose.Schema({
    chargeType: {
        type: String,

    },
    capacity: {
        type: String,

    },
    dependentOn: {
        type: String,

    },

});

const FreightCharge = mongoose.models.FreightCharge || mongoose.model("FreightCharge", FreightChargeSchema);
export default FreightCharge;
