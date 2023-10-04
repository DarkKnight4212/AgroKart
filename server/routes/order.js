const express=require('express');
const router=express.Router();
const orderController=require('../controllers/orderController');

router.post('/checkout',orderController.checkout);
router.post('/verify',orderController.verify);
router.post('/place',orderController.placeOrder);
router.post('/getOrders',orderController.getOrders);
router.post('/getImage',orderController.getImage);

module.exports=router;
