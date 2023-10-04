const express=require('express');
const bodyParser=require("body-parser");
const cors=require("cors");
const firebase_admin=require("firebase-admin");
const app=express();

app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());
app.use(express.json());

app.use('/',require('./routes'));
 
const PORT=process.env.PORT | 8000;

app.listen(PORT,()=>{
    console.log(`Server is running on port : ${PORT} `);
})


