// /models/stateModel.js
import mongoose from 'mongoose';

const stateSchema = new mongoose.Schema({
  _id: {
    // type: mongoose.Schema.Types.ObjectId,
    type: String
    // required: true,
  },
  id: {
    type: String,
    required: true,
  },
  // cid: {
  //   type: String,
  //   required: true,
  // },
  name: {
    type: String,
    required: true,
  }
});

// Avoid redefining the model if it already exists
const State = mongoose.models.State || mongoose.model('State', stateSchema);

export default State;
