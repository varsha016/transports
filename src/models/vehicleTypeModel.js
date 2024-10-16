// models/vehicleModel.js
import mongoose from "mongoose";

const VehicleSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
        unique: true,
    }
});

const Vehicle = mongoose.models.Vehicle || mongoose.model("Vehicle", VehicleSchema);
export default Vehicle;
