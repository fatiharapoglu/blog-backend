const Comment = require("../models/comment");

const getAllComments = async (req, res) => {
    try {
        const comments = await Comment.find().sort({ timestamp: -1 });
        res.status(200).json({ comments });
    } catch (err) {
        res.status(400).json({ msg: "Error while fetching comments, please try again." });
    }
};

const createComment = async (req, res) => {
    try {
        await Comment.create(req.body);
        res.status(201);
    } catch (err) {
        res.status(400).json({ msg: "Error while creating the comment, please try again." });
    }
};

const editComment = async (req, res) => {
    try {
        const { commentID } = req.params;
        await Comment.findOneAndUpdate({ _id: commentID }, req.body, {
            new: true,
            runValidators: true,
        });
        res.status(200);
    } catch (err) {
        res.status(400).json({ msg: "Error while editing the comment, please try again." });
    }
};

const deleteComment = async (req, res) => {
    try {
        const { commentID } = req.params;
        await Comment.findOneAndDelete({ _id: commentID });
        res.status(200);
    } catch (err) {
        res.status(400).json({ msg: "Error while deleting the comment, please try again." });
    }
};

module.exports = {
    getAllComments,
    createComment,
    editComment,
    deleteComment,
};
