const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    username: {
        type: String,
        required: true,
        maxLength: [25, "Username should be lower than 25 characters"],
    },
    text: {
        type: String,
        required: true,
        maxLength: [140, "Comments should be lower than 140 characters"],
    },
    timestamp: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Comment", CommentSchema);
