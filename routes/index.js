const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).json({
        public: {
            published: "/api/v1/posts/published",
            latest: "/api/v1/posts/latest",
            comments: "/api/v1/posts/:postID/comments",
            newComment: "/api/v1/posts/:postID/comments/new",
        },
    });
});

module.exports = router;
