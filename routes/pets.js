const express = require("express");
const router = express.Router();
const controller = require("../controller/pets");

router.get("/images", controller.getAllImagesArr);

module.exports = router;
