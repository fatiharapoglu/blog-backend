const Post = require("../models/post");

const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find().sort({ timestamp: -1 });
        res.status(200).json({ posts });
    } catch (err) {
        res.status(400).json({ msg: "Error while fetching posts, please try again." });
    }
};

const getPublishedPosts = async (req, res) => {
    try {
        const posts = await Post.find({ isPublished: true }).sort({ timestamp: -1 });
        res.status(200).json({ posts });
    } catch (err) {
        res.status(400).json({ msg: "Error while fetching posts, please try again." });
    }
};

const getUnpublishedPosts = async (req, res) => {
    try {
        const posts = await Post.find({ isPublished: false }).sort({ timestamp: -1 });
        res.status(200).json({ posts });
    } catch (err) {
        res.status(400).json({ msg: "Error while fetching posts, please try again." });
    }
};

const getLatestPosts = async (req, res) => {
    try {
        const posts = await Post.find({ isPublished: true }).sort({ timestamp: -1 }).limit(3);
        res.status(200).json({ posts });
    } catch (err) {
        res.status(400).json({ msg: "Error while fetching posts, please try again." });
    }
};

const getSinglePost = async (req, res) => {
    try {
        const { postID } = req.params;
        const post = await Post.findById({ _id: postID });
        res.status(200).json({ post });
    } catch (err) {
        res.status(400).json({ msg: "Error while fetching the post, please try again." });
    }
};

const createPost = async (req, res) => {
    try {
        await Post.create(req.body);
        res.status(201).json({ msg: "Created." });
    } catch (err) {
        res.status(400).json({ msg: "Error while creating the post, please try again." });
    }
};

const editPost = async (req, res) => {
    try {
        const { postID } = req.params;
        await Post.findOneAndUpdate({ _id: postID }, req.body, {
            new: true,
            runValidators: true,
        });
        res.status(200).json({ msg: "Edited." });
    } catch (err) {
        res.status(400).json({ msg: "Error while editing the post, please try again." });
    }
};

const deletePost = async (req, res) => {
    try {
        const { postID } = req.params;
        await Post.findOneAndDelete({ _id: postID });
        res.status(200).json({ msg: "Deleted." });
    } catch (err) {
        res.status(400).json({ msg: "Error while deleting the post, please try again." });
    }
};

module.exports = {
    getAllPosts,
    createPost,
    editPost,
    deletePost,
    getSinglePost,
    getPublishedPosts,
    getUnpublishedPosts,
    getLatestPosts,
};
