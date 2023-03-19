const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const helmet = require("helmet");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

const postsRouter = require("./routes/posts");
const loginRouter = require("./routes/login");
const indexRouter = require("./routes/index");
const notFound = require("./middleware/404");
require("./middleware/passport");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(cors({ origin: "*" }));
app.use(passport.initialize());

app.use("/", indexRouter);
app.use("/api/v1/posts", postsRouter);
app.use("/login", loginRouter);
app.use(notFound);

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
