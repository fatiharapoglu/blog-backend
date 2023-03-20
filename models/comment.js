const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    username: {
        type: String,
        required: true,
        maxLength: [40, "Username should be lower than 40 characters"],
    },
    text: {
        type: String,
        required: true,
        maxLength: [500, "Comments should be lower than 500 characters"],
    },
    timestamp: {
        type: Date,
        default: Date.now,
    },
    belongsTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
        required: true,
    },
});

module.exports = mongoose.model("Comment", CommentSchema);
