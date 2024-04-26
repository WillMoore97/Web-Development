const express = require("express");
const feedController = require("../../controller/feed");
const router = express.Router();

router.get("/characterget", feedController.getCharacter);
router.post("/characterpost", feedController.createCharacter)

module.exports = router; 