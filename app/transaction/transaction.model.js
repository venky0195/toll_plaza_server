const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  vehicleNumber: String,
  isTwoWay: { type: Boolean, default: false },
}, { timestamps: true });

module.exports = mongoose.model("Transactions", transactionSchema);
