const User = require("../models/user");
const passport = require("passport");
const passportJWT = require("passport-jwt");
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
require("dotenv").config();

passport.use(
    new JWTStrategy(
        {
            jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.JWT_SECRET,
        },
        async (jwtPayload, done) => {
            try {
                const user = await User.findById(jwtPayload.id);
                if (user) {
                    done(null, user);
                } else {
                    done(null, false);
                }
            } catch (err) {
                done(err, false);
            }
        }
    )
);
