# Blog (Back-end / API)

MERN stack Blog project's back-end (API) repository. Created with **Express** and **mongoDB**. Deployed on [**Cyclic.sh**](https://www.cyclic.sh/).

---

This is the Back-end part of the MERN Blog Project, The other parts are:

-   [**Front-end**](https://github.com/fatiharapoglu/blog-frontend) Repository
-   [**Headless CMS**](https://github.com/fatiharapoglu/blog-cms) Repository

---

## Features

-   CRUD operations on mongoDB database with admin authorization.
-   Comments for each post.
-   Snackbar feedback.
-   Rate limiter for users to comment.

## Helper Dependencies

-   [Passport.js](https://www.passportjs.org/) for authorization
-   [Fakerjs](https://fakerjs.dev/) for mocking data in development
-   [Mongoose](https://mongoosejs.com/) for mongoDB
-   [bcryptjs](https://www.npmjs.com/package/bcryptjs) for hashing passwords
-   [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) for JWTs
-   [express-rate-limit](https://www.npmjs.com/package/express-rate-limit) for limiting the post requests per defined time
-   [cors](https://www.npmjs.com/package/cors) for enabling CORS with defined options
-   [helmet](https://www.npmjs.com/package/helmet) for security
-   [dotenv](https://www.npmjs.com/package/dotenv) for processing .env files
