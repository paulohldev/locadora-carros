module.exports = function (app) {
  var indexRouter = require("./index");
  var usersRouter = require("./users");
  var veiculosRouter = require("./veiculos");
  var loginRouter = require("./login");

  let middlewareAutorization = function (req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    } else {
      res.redirect("/login");
    }
  };

  app.use("/", indexRouter);
  app.use("/users", usersRouter);
  app.use("/veiculos", middlewareAutorization, veiculosRouter);
  app.use("/login", loginRouter);
};
