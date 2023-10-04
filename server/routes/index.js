const express = require("express");
const router = express.Router();

router.use("/user", require("./user"));
router.use("/product", require("./product"));
router.use("/cart",require("./cart"));
router.use('/order',require('./order'));
router.use('/rent',require('./rent'));

module.exports = router;

// const express=require('express');
// const router=express.Router();

// module.exports=router;
