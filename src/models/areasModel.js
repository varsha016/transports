const mongoose = require('mongoose');

const areaSchema = new mongoose.Schema({
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
  state_id: {
    type: mongoose.Schema.Types.ObjectId, // Assuming this is a reference to the State model
    ref: 'State',
    required: true,
  },
  city_id: {
    type: mongoose.Schema.Types.ObjectId, // Assuming this is a reference to the City model
    ref: 'City',
    required: true,
  },
  name: {
    type: String,
    required: true,
  }
});

const Area = mongoose.model('Area', areaSchema);

module.exports = Area;
