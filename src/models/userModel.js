// import mongoose from "mongoose"
// const userSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: [true,"name is required"],
//         unique: true
//     },
//     email: {
//         type: String,
//         required: [true,"email is required"],
//         unique: true
//     },
//     password: {
//         type: String,
//         required: [true,"password is required"],
       
//     },
//     isVerified: {
//         type: Boolean,
//         default: true
       
//     },
//      userType: {
//     type: String,
//          enum: [ "1", "2", "3"],
        
//         required: [true, "userType is required"]
//   },
//   cid: {
//         type: mongoose.Types.ObjectId,
//         required: true,
//         ref: "companies"
//     },
//     forgotpasswordToken:String,
//     forgotpasswordTokenExpiry:Date,
//     verifyToken:String,
//     verifyTokenExpiry:Date
// })
// const User= mongoose.models.user || mongoose.model("user", userSchema)
// export default User


import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  isVerified: {
    type: Boolean,
    default: true,
  },
  userType: {
    type: String,
      // enum: ["1", "2", "3"],
    //   enum: ["admin", "cadmin", "cuser"],
    required: [true, "UserType is required"],
  },
  cid: {
    type: String,
    // ref: "companies",
    // Custom validation to conditionally require 'cid'
    // validate: {
    //   validator: function(value) {
    //     // 'this' refers to the document being validated
    //     if (this.userType === "1") {
    //       // 'cid' should be undefined if 'userType' is "1"
    //       return value === undefined || value === null;
    //     }
    //     // 'cid' is required for other userType values
    //     return value !== undefined && value !== null;
    //   },
    //   message: "cid is required for this userType",
    // },
  },
  forgotpasswordToken: String,
  forgotpasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
});

const User = mongoose.models.user || mongoose.model("user", userSchema);
export default User;
