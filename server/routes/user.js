const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router
  .post("/create", userController.create)
  .post("/getUser", userController.getUser)
  .post("/get-user-products", userController.getUserProducts)
  .post("/get-user-rent", userController.getUserRent)
  .patch("/updateUser", userController.updateUser)
  .post("/get-sevices-provided", userController.getServicesProvided)

module.exports = router;
