const express=require('express');
const router=express.Router();
const rentController=require("../controllers/rentController")

router.post('/add-farmer',rentController.addFarmer);
router.get('/getAllFarmers',rentController.getAllFarmers); 
router.post('/add-provider',rentController.addProvider);
router.post('/deleteCard',rentController.deleteCard);

module.exports=router;  