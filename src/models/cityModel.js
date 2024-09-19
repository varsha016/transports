// models/city.js
const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
  _id: {
    // type: mongoose.Schema.Types.ObjectId,
    type:String
    // required: true,
  },
  id: {
    type: String,
    required: true,
  },
  cid: {
    type: String,
    required: true,
  },
  state_id: {
    type: mongoose.Schema.Types.ObjectId,  // ObjectId reference to the State model
    ref: 'State',
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

const City = mongoose.model('City', citySchema);

module.exports = City;
