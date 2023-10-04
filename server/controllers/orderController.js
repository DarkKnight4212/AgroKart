const RazorPay=require('razorpay');
const crypto=require('crypto');
const db=require('../config/firebase');

module.exports.checkout=async function(req,res){
var instance = new RazorPay({
    key_id: process.env.KEY_ID,
    key_secret: process.env.KEY_SECRET,
  });
 
  console.log(req.body.amount);
  var options = {
    amount: req.body.amount*100,  // amount in the smallest currency unit
    currency: "INR"
  };
  instance.orders.create(options, function(err, order) {
    if(err){
        res.json({
            message:err
        })
    }
    return res.json({
        message:'order Created',
        order:order
    })
  });
}

module.exports.verify=async function(req,res){
    let body = req.body.response.razorpay_order_id + "|" + req.body.response.razorpay_payment_id;

    var expectedSignature = crypto.createHmac('sha256', 'YWoIvlPh0VmVlAVAKIE0Xjmk')
        .update(body.toString())
        .digest('hex');

    if (expectedSignature === req.body.response.razorpay_signature) {
        res.send({ code: 200, message: 'Sign Valid' });
    } else {

        res.send({ code: 500, message: 'Sign Invalid' });
    }
}

module.exports.placeOrder=async function(req,res){
try {
  const resp=await db.collection('users').where('email','==',req.body.email).get();
 const user=await resp.docs[0].data();
 var orderArray=user.orderArray;
 if(orderArray==undefined){
     orderArray=[];
 }
  // console.log(req.body.data,"data");
 const data=await req.body.data.cart;
 await data.map((item)=>{
      orderArray.push({...item,orderDate:new Date().toLocaleDateString()});
  });
  const resp1=await db.collection('users').doc(resp.docs[0].id).update({orderArray:orderArray,cartArray:[]
  });
  if(resp1){
      return res.status(200).json({
          message:'Order Placed'
      })
  }
  
} catch (error) {
  console.log(error);
}

}

module.exports.getOrders=async function(req,res){
    try {
        const email=await req.body.email;
        // console.log(email);
        const resp=await db.collection('users').where('email','==',email).get();
        const user=await resp.docs[0].data();
        const orderArray=user.orderArray;
        if(orderArray==undefined){
            return res.status(200).json({
                message:'No Orders'
            })
        }
        // console.log(orderArray);
        return res.status(200).json({
            message:'Orders',
            data:orderArray
        })
    } catch (error) {
        console.log(error);
    }
} 

module.exports.getImage=async function(req,res){
    try {
        const orderArray=await req.body.orders;
        var temp = [];
        if(orderArray==undefined){
            return res.status(200).json({
                message:'No Orders',
                data:temp
            })
        }

        for (let i = 0; i < orderArray.length; i++) {
            const snapsh = db.collection("products");
            var ref = await snapsh.where("id", "==", `${orderArray[i].id}`).get();
            var temp1 = ref.docs[0];
            var array = await temp1?.data()?.ip;
            // console.log(array);
            temp.push(array);
        }
        return res.status(200).json({
            message: 'Orders',
            data: temp
        })
       

    } catch (error) {
        console.log(error);
    }
}