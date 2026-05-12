const foodModel=require("../models/food.model.js")

async function createFood(req,res){
    console.log(req.foodPartner)
    res.send("item is added")
    console.log(req.body)
    console.log(req.file)
}


module.exports={createFood}