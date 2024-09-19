const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  cid: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  v_no: {
    type: String,
    required: true,
  }
});

const Vehicle = mongoose.model('Vehicle', vehicleSchema);

module.exports = Vehicle;
