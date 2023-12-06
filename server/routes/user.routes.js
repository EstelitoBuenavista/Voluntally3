module.exports = (app) => {
  const user = require("../controllers/user.controller");
  let router = require("express").Router();

  router.post("/create", user.create);
  //   router.put("/update", user.update);
  //   router.post("/delete", user.delete);
  router.post("/login", user.login)
  router.get("/", user.findUser);
  //   router.post("/find", user.findOne);
  router.post("/findID", user.findUserID);

  app.use("/api/users", router);
};
