const { faker } = require("@faker-js/faker");
const mongoose = require("mongoose");
require("dotenv").config();

const Post = require("./models/post");
const Comment = require("./models/comment");

const connect = async () => {
    mongoose.set("strictQuery", false);
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to database.");
    } catch (err) {
        console.log(err);
    }
};

connect();

const newPostGenerator = () => {
    return {
        title: faker.lorem.sentence(),
        text: faker.lorem.paragraph(),
        timestamp: faker.date.past(),
        isPublished: false,
    };
};

const newCommentGenerator = () => {
    return {
        username: faker.internet.userName(),
        text: faker.lorem.sentence(),
        timestamp: faker.date.past(),
        belongsTo: "640d0c5fbed826d23ca6c48c",
    };
};

const populate = async () => {
    try {
        for (let index = 1; index < 6; index++) {
            const post = newPostGenerator();
            const comment = newCommentGenerator();
            await Post.create(post);
            await Comment.create(comment);
            console.log(`Content ${index} is created.`);
        }
        console.log("Populated.");
        process.exit(0);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

populate();
