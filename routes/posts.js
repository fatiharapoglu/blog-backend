const express = require("express");
const router = express.Router();

const {
    getAllPosts,
    createPost,
    editPost,
    deletePost,
    getSinglePost,
} = require("../controllers/posts");
const {
    getAllComments,
    createComment,
    editComment,
    deleteComment,
} = require("../controllers/comments");

router.get("/", getAllPosts);
router.post("/new", createPost);
router.patch("/:postID", editPost);
router.get("/:postID", getSinglePost);
router.delete("/:postID", deletePost);

router.get("/:postID/comments", getAllComments);
router.post("/:postID/comments/new", createComment);
router.patch("/:postID/comments/:commentID", editComment);
router.delete("/:postID/comments/:commentID", deleteComment);

module.exports = router;
