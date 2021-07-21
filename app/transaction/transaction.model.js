const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  vehicleNumber: String,
  isTwoWay: { type: Boolean, default: false },
  price: { type: Number }
}, { timestamps: true });

module.exports = mongoose.model("Transactions", transactionSchema);
