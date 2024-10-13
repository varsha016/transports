


import mongoose from 'mongoose';

const rowSchema = new mongoose.Schema({
  ledgerName: { type: String },
  amount: { type: String },
  rowdate: { type: String },
  bank: { type: String },
  narration: { type: String },
}, { _id: false }); // Prevent Mongoose from creating an ID for sub-documents

const lrEntrySchema = new mongoose.Schema({
  branch: { type: String, required: true },
  lrNo: { type: String, required: true },
  lrDate: { type: Date, required: true },
  vehNo: { type: String, required: true },
  vehType: { type: String, required: true },
  consignorName: { type: String, required: true },
  consigneeName: { type: String, required: true },
  // partyOfDelivery: { type: String, required: true },
  from1: { type: String },
  from2: { type: String },
  to1: { type: String },
  to2: { type: String },
  deliveryAt: { type: String },
  branchOfBilling: { type: String },
  modeOfFreight: { type: String, enum: ['Paid', 'ToPay'], default: 'Paid', required: true },
  collection: { type: String },
  placeOfCollection: { type: String },
  delivery: { type: String },
  placeOfDelivery: { type: String },
  quantity: { type: String },
  qtyPacking: { type: String },
  nos: { type: String },
  nosPacking: { type: String },
  actualWeight: { type: String },
  chargedWeight: { type: String },
  invoiceNo: { type: String },
  goodsValue: { type: Number, required: true },
  materialDesc: { type: String },
  eWayBillNo: { type: String, },
  eWayExpireDate: { type: String },
  lrRemarks: { type: String },
  ledgerName: { type: String },
  debit: { type: String },
  credit: { type: String },
  // amount: { type: Number },
  // company: { type: String },
  // details: { type: String },
  narration: { type: String },
  rows: [rowSchema], // Include rows in the schema if necessary
});

const LREntry = mongoose.models.lrEntry || mongoose.model('lrEntry', lrEntrySchema);
export default LREntry;

