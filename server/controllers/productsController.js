const db = require("../config/firebase");

module.exports.create = async function (req, res) {
  try {
    const data = req.body.postData;
    const email=req.body.postData.userEmail;
    // console.log(data);
    //get id from email
    const userCollection = db.collection("users");
    const userData = await userCollection.where("email", "==", email).get();
    var id;
    userData.forEach((doc) => {
      id = doc.id;
    });
    console.log(id);
    const collection = db.collection("products");
    //add id with data
    const temp = await collection.add(data);
    // console.log(temp.id);
    await collection.doc(temp.id).update({
      id: temp.id,
      userId: id,
    });
    return res.json({
      message: "data added successfully",
    });
    // console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};
module.exports.getAllProducts = async function (req, res) {
  try {
    const collection = db.collection("products");
    const data = await collection.get();
    var list = [];
    data.forEach((doc) => {
      if(doc.data().species===doc.data().product){

        list.push({
          _id: doc.id,
          descricption: doc.data().descricption,
          ip: doc.data().ip,
          category: doc.data().category,
          //code for species is equal to product then show only product
          name: `${doc.data().species}`,
          maxQuantity: doc.data().maxQuantity,
          minQuantity: doc.data().minQuantity,
          price: doc.data().price,
          quantity: doc.data().quantity,
        });
      }
      else{
        list.push({
          _id: doc.id,
          descricption: doc.data().descricption,
          ip: doc.data().ip,
          category: doc.data().category,
          //code for species is equal to product then show only product
          name: `${doc.data().species}  ${doc.data().product}`,
          maxQuantity: doc.data().maxQuantity,
          minQuantity: doc.data().minQuantity,
          price: doc.data().price,
          quantity: doc.data().quantity,
        });
      }
      
      // console.log(list)
    });
    return res.json({
      message: "success",
      data: list,
    });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports.getProduct = async function (req, res) {
  try {
    const id = req.params.id;
    const collection = db.collection("products");
    const data = await collection.doc(id).get();
    return res.json({
      message: "success",
      product: { ...data.data(), id },
    });
  } catch (error) {
    console.log(error.message);
  }
};
