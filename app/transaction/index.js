const {
  findTransaction,
  saveTransaction,
} = require("./transaction.controller");
const prices = require("../helpers/prices.json")
const verifyReceipt = async (req, res) => {
  const { transactionId } = req.params;
  const transaction = await findTransaction(transactionId);
  if (!transaction)
    return res.status(404).send("No transaction found");
  const isValid =
    transaction &&
    transaction.isTwoWay &&
    transaction.createdAt.getTime() < Date.now();
  return res.send({ isValid });
};

const verifyRequest = (req, res, next) => {
  const { vehicleNumber, vehicleType } = req.body;
  if (!vehicleNumber || !vehicleType) {
    return res.status(400).send("Incorrect transaction details");
  }
  return next();
};

const verifyId = (req, res, next) => {
  const { transactionId } = req.params;
  const checkForHexRegExp = new RegExp("^[0-9a-fA-F]{24}$");
  if (!transactionId || !checkForHexRegExp.test(transactionId)) {
    return res.status(400).send("Incorrect transaction ID");
  }
  return next();
};

const addTransaction = async (req, res) => {
  const requestObj = req.body;
  try {
    prices.forEach((type) => {
      if (type.vehicleType === requestObj.vehicleType) {
        requestObj['price'] = requestObj.isTwoWay ? type.twoWay : type.oneWay
      }
    })
    const transaction = await saveTransaction(requestObj);
    const receipt = {
      receiptNumber: transaction._id,
      vehicleNumber: transaction.vehicleNumber,
      vehicleType: transaction.vehicleType,
      amount: transaction.price,
      transactionTime: transaction.createdAt
    }
    return res.status(201).send({ receipt });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error.message)
  }

};

module.exports = {
  verifyReceipt,
  addTransaction,
  verifyRequest,
  verifyId,
};
