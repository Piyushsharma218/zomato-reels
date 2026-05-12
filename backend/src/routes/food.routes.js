const express = require("express");
const foodController = require("../controllers/food.controller.js");
const authMiddleware = require("../middlewares/auth.middleware.js");
const router = express.Router();

router.post("/", authMiddleware.authFoodPartnerMiddleware,foodController.createFood);

module.exports = router;
