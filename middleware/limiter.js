const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
    windowMs: 10000, // 10 seconds
    max: 1, // limit each IP to 1 request per windowMs
    message: "Too many requests, please try again later.",
});

module.exports = limiter;
