import mongoose from 'mongoose';

const lrEntrySchema = new mongoose.Schema({
  name: { type: String, required: true },
  lrNo: { type: String, required: true },
  lrDate: { type: Date, required: true },
  vehNo: { type: String, required: true },
  consignorName: { type: String, required: true },
  consigneeName: { type: String, required: true },
  modeOfFreight: { type: String, enum: ['Paid', 'ToPay'], default: 'Paid', required: true },
  octroiNaka: { type: String },  // Renamed or kept as is if no conflict
  paidBy: { type: String, default: 'BranchAgent', required: true },
  branchOfBilling: { type: String },  // Renamed or kept as is if no conflict
  octRecdFrom: { type: String },  // Renamed or kept as is if no conflict
  loadingPlace: { type: String, required: true },
  placeOfLoading: { type: String },  // Renamed or kept as is if no conflict
  formNo: { type: String },  // Renamed or kept as is if no conflict
  collectionInfo: { type: String },  // Renamed to avoid conflict
  delivery: { type: String },  // Renamed or kept as is if no conflict
  placeOfDelivery: { type: String },  // Renamed or kept as is if no conflict
  materialDescription: { type: String, required: true },
  quantity: { type: String },  // Renamed or kept as is if no conflict
  quantitySample: { type: String },  // Renamed or kept as is if no conflict
  actualWeight: { type: Number, required: true },
  chargedWeight: { type: Number, required: true },
  orderBy: { type: String },  // Renamed or kept as is if no conflict
  invoiceNo: { type: String },
  goodsValue: { type: Number, required: true },
  freightChargeType: { type: String,  default: 'WeightBasis', required: true },
  serviceTaxBy: { type: String },  // Renamed or kept as is if no conflict
  rate: { type: Number, required: true },
  grossTotal: { type: Number, required: true },
  serviceTax: { type: Number },  // Renamed or kept as is if no conflict
  educationCess: { type: String },  // Renamed or kept as is if no conflict
  netTotal: { type: Number, required: true },
  lrRemarks: { type: String }
});

const lrEntry = mongoose.models.lrEntry || mongoose.model('lrEntry', lrEntrySchema);
export default lrEntry;