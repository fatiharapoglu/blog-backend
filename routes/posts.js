const express = require("express");
const router = express.Router();

const requireAuth = require("../middleware/requireAuth");
const limiter = require("../middleware/limiter");
const { getAllComments, createComment, deleteComment } = require("../controllers/comments");
const {
    getAllPosts,
    createPost,
    editPost,
    deletePost,
    getSinglePost,
    getPublishedPosts,
    getUnpublishedPosts,
    getLatestPosts,
} = require("../controllers/posts");

router.get("/", requireAuth, getAllPosts);
router.get("/published", getPublishedPosts);
router.get("/unpublished", requireAuth, getUnpublishedPosts);
router.get("/latest", getLatestPosts);
router.get("/:postID", getSinglePost);
router.post("/new", requireAuth, createPost);
router.patch("/:postID", requireAuth, editPost);
router.delete("/:postID", requireAuth, deletePost);

router.get("/:postID/comments", getAllComments);
router.post("/:postID/comments/new", limiter, createComment);
router.delete("/:postID/comments/:commentID", requireAuth, deleteComment);

module.exports = router;
