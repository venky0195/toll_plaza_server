const router = require("express").Router();
const {
  verifyReceipt,
  verifyRequest,
  addTransaction,
  verifyId,
} = require("../transaction");

router.get("/transactions/:transactionId", verifyId, verifyReceipt);
router.post("/transactions", verifyRequest, addTransaction);

module.exports = router;
