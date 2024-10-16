// models/packingTypeModel.js
import mongoose from "mongoose";

const PackingTypeSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
        unique: true,
    }
});

const packing = mongoose.models.packing || mongoose.model("packing", PackingTypeSchema);
export default packing;
