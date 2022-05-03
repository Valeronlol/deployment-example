const express = require("express");
const router = express.Router();
const controller = require("../controller/user");

router.post("/registration", controller.registration);

router.post("/login", controller.login);

router.get("/userAct", controller.getQuery);

module.exports = router;
