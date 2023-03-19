const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const passport = require("passport");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

const postsRouter = require("./routes/posts");
const loginRouter = require("./routes/login");
require("./middleware/passport");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: "*" }));
app.use(passport.initialize());

app.use("/api/v1/posts", postsRouter);
app.use("/login", loginRouter);

const start = async () => {
    mongoose.set("strictQuery", false);
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to database.");
        app.listen(port, () => console.log(`Server is listening on port ${port}...`));
    } catch (err) {
        console.log(err);
    }
};

start();
