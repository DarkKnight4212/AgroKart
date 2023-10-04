const db=require('../config/firebase');
module.exports.addFarmer=async function(req,res){
    try{
        const data=req.body;
        // find user from email
        const user=await db.collection('users').where('email','==',data.email).get();
        // console.log(user); 
        // get ip from user
        var ip=user.docs[0].data().ip;
        // console.log(ip);
        // add ip to data
        data.ip=ip;
        data.status="pending";
        data.service_provider_email="";
        // console.log(data);
        const resp=await db.collection('rent').add(data);
        data.id=resp.id;
        const resp1=await db.collection('rent').doc(resp.id).update(data);
        return res.status(200).json({
            message:"Data added successfully"
        });

    } 
    catch(err){
        console.log('Error',err);
        return res.status(500).json({
            message:"Internal Server Error"
        });
    }
} 

module.exports.getAllFarmers=async function(req,res){
    try{
        const resp=await db.collection('rent').get();
        const data=[];
        resp.forEach((doc)=>{
            data.push({_id: doc.id,
                name:doc.data().name,
                area:doc.data().area,
                price:doc.data().price,
                loc:doc.data().loc,
                date:doc.data().date,
                duration:doc.data().duration,
                service:doc.data().service,
                ip:doc.data().ip,
                Address:doc.data().Address,
                email:doc.data().email,
                status:doc.data().status,
                service_provider_email:doc.data().service_provider_email
                
            });
        });
        return res.status(200).json({
            data:data
        });
    }
    catch(err){
        console.log('Error',err);
        return res.status(500).json({
            message:"Internal Server Error"
        });
    }
} 

module.exports.addProvider=async function(req,res){
    try{
       const id=req.body.id;
         const email=req.body.email;
            const cu_email=req.body.cu_email;
            const resp=await db.collection('rent').doc(id).update({
                status:"accepted",
               service_provider_email:cu_email
            });
            //get services_given from cu_email and add id,email to it
            const user=await db.collection('users').where('email','==',cu_email).get();
            var services_given=user.docs[0].data().services_given;
            if(services_given==undefined){
            services_given=[];
            }
            services_given.push({rent_card_id:id,service_given_to:email});
            //update services_given
            const resp1=await db.collection('users').doc(user.docs[0].id).update({
                services_given:services_given
            });
            //get services_requested from email and add id,cu_email to it

            return res.status(200).json({
                message:"Data added successfully"
            });

            

    }
    catch(err){
        console.log('Error',err);
        return res.status(500).json({
            message:"Internal Server Error"
        });
    }
}

module.exports.deleteCard=async function(req,res){
    try{
        const id=req.body.id;
        const resp=await db.collection('rent').doc(id).delete();
        return res.status(200).json({
            message:"Data deleted successfully"
        });
    }
    catch(err){
        console.log('Error',err);
        return res.status(500).json({
            message:"Internal Server Error"
        });
    }
}