const mongoose = require('mongoose');

const memoSchema = new mongoose.Schema({
  memoNo: {
    type: String,
    // required: true,
  },
  date: {
    type: Date,
    // required: true,
  },
  vehicleType: {
    type: String,
    // required: true,
  },
  type: {
    type: String,
    // required: true,
  },
  vehicleNo: {
    type: String,
    // required: true,
  },
  from: {
    type: String,
    // required: true,
  },
  to: {
    type: String,
    // required: true,
  },
  vehicleOwner: {
    type: String,
    // required: true,
  },
  telephoneNo: {
    type: String,
    // required: true,
  },
  driverName: {
    type: String,
    // required: true,
  },
  drivingLicNo: {
    type: String,
    // required: true,
  },
  engineNo: {
    type: String,
    // required: true,
  },
  chassisNo: {
    type: String,
    // required: true,
  },
  octroiAgent: {
    type: String,
  },
  selfLRs: {
    type: String,
  },
  total: {
    type: Number,
    // required: true,
  },
  paidLRs: {
    type: Number,
  },
  toPayLRs: {
    type: Number,
  },
  branch: {
    type: String,
    // required: true,
  },
  party: {
    type: String,
    // required: true,
  },
  toBeBilledLRs: {
    type: Number,
  },
  totalLRs: {
    type: Number,
    // required: true,
  },
  advancePaidDate: {
    type: Date,
  },
  amount: {
    type: Number,
    // required: true,
  },
  payableAt: {
    type: String,
  },
  advanceThrough: {
    type: String,
  },
  remark: {
    type: String,
  },
  advance: {
    type: Number,
  },
  narration: {
    type: String,
  }
});

const Memo = mongoose.models.Memo || mongoose.model('Memo', memoSchema);
export default Memo;
