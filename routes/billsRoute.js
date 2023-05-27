const express = require("express");
const {
  getBillsController,
  addBillsController,
 

} = require("../controllers/billsController");

const router = express.Router();

//routes


//Method - get
router.get("/get-bills", getBillsController);

//Method - Post
router.post("/add-bills", addBillsController);



module.exports = router;
