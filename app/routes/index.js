const router = require("express").Router();
const {
  verifyReceipt,
  verifyRequest,
  addTransaction,
  verifyId,
} = require("../transaction");

router.get("/verifyReceipt/:transactionId", verifyId, verifyReceipt);
router.post("/add", verifyRequest, addTransaction);

module.exports = router;
