const foodModel = require("../models/food.model.js");
const storageService = require("../services/storage.service.js");
const { v4: uuid } = require("uuid");

async function createFood(req, res) {
//   console.log(req.foodPartner);
//   console.log(req.body)
//   console.log(req.file)
//   console.log(req.file.size);

const result = await storageService.uploadFile(req.file.buffer, uuid());
console.log(result)
console.log(req.body.name)
console.log(req.body.description)


const foodItem = await foodModel.create({
        name: req.body.name,
        description: req.body.description,
        video: result.url,
        foodPartner: req.foodPartner._id,
      });
    
    // res.send("item is added")
  res.status(201).json({
    message: "food created successfully",
    food: foodItem,
  });
}
async function getFoodItems(req, res) {
    const foodItems = await foodModel.find({})
    res.status(200).json({
        message: "Food items fetched successfully",
        foodItems
    })
}

module.exports = { createFood,getFoodItems };
