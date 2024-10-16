// models/LocationModel.js
import mongoose from "mongoose";

const LocationSchema = new mongoose.Schema({
    state: {
        type: String,

    },
    locationName: {
        type: String,

    },
    subLocation: {
        type: String,

    },

});

const Location = mongoose.models.Location || mongoose.model("Location", LocationSchema);
export default Location;
