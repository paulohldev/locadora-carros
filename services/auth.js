module.exports = function (passport) {
  const operations = require("../database/dao");
  const LocalStrategy = require("passport-local").Strategy;

  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function (id, done) {
    operations
      .findUserById(id)
      .then(([rows]) => {
        let user = rows[0];
        return done(null, user);
      })
      .catch((err) => {
        return done(err, null);
      });
  });

  let strategyConfig = {
    usernameField: "username",
    passwordField: "password",
  };
  passport.use(
    new LocalStrategy(strategyConfig, function (username, password, done) {
      operations
        .findByUsername(username)
        .then(([rows]) => {
          if (rows.length == 0) {
            return done(null, false);
          }

          let user = rows[0];
          if (user.password != password) {
            return done(null, false);
          } else {
            return done(null, user);
          }
        })
        .catch((err) => {
          console.log(err);
          return done(err, null);
        });
    })
  );
};
