const mongoose = require("mongoose");

const poolSchema = new mongoose.Schema({
  purpose: {
    type: String,
    required: true,
  },
  level: {
    type: Number,
    min: -10,
    max: 10,
    required: true,
  },
  recordDate: {
    type: Date,
    default: Date.now(),
  },
});

const PoolContentModel = mongoose.model("PoolContentModel", poolSchema);

module.exports = PoolContentModel;
