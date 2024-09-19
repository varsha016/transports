import mongoose from "mongoose";

const companiesSchema = new mongoose.Schema({
  id: {
    type: String,
    // unique: true,
    required: [true, "ID is required hh"],
  },
  name: {
    type: String,
    required: [true, "Name is required"],
  
  },
  address: {
    type: String,
  default: "",  // This will allow address to be an empty string by default
  },
});

const Company = mongoose.models.companies || mongoose.model("companies", companiesSchema);
export default Company;