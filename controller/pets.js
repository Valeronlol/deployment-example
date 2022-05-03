const petsModel = require("../model/pets");

exports.getAllImagesArr = (req, res) => {
  res.end(JSON.stringify(petsModel.getAllPetsArrModel(req, res)));
};
