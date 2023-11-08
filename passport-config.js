const LocalStrategy = require("passport-local").Strategy;

const user = {
  id: 1,
  username: "robin",
  password: "password",
};
module.exports = function (passport) {
  passport.use(
    new LocalStrategy((username, password, done) => {
      if (username === user.username && password === user.password) {
        return done(null, user);
      } else {
        return done(null, false, { message: "Invalid Credentials" });
      }
    })
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((user, done) => {
    if (id === user.id) {
      done(null, user);
    } else {
      done({ message: "User not found" }, null);
    }
  });
};
