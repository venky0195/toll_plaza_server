const Model = require("./transaction.model");

const findTransaction = (transactionId) => Model.findById(transactionId);
const saveTransaction = (transaction) => Model.create(transaction);

module.exports = { findTransaction, saveTransaction };
