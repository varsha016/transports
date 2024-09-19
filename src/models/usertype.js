import mongoose from "mongoose";

const usertypeSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    auto: true, // Automatically generates the ObjectId if not provided
  },
  id: {
    type: String,
    required: [true, "ID is required"],
    unique: true, // Ensures the ID is unique
  },
  type: {
    type: String,
      required: [true, "Type is required"],
    
    // enum: ["admin", "cadmin", "cuser"], // Optional: Restrict type to specific values
  },
});

const usertype = mongoose.models.usertype || mongoose.model("usertype", usertypeSchema);
export default usertype;
