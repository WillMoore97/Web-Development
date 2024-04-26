const mongoose = require("mongoose");
const charSchema = new mongoose.Schema({
    nameCharacter: {
        type: String,
        required: true
    },
    raceName: {
        type: String,
        required: true
    },
    className: {
        type: String,
        required: true
    }
});

const character = mongoose.model("character", charSchema, "character");
module.exports = character;
