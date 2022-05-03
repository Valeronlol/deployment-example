const fs = require("fs");

const { clientPath } = require("../utils/path");

exports.getAllPetsArrModel = () => {
  const pathToImageFolder = `${clientPath()}/src/images`;

  const files = fs.readdirSync(pathToImageFolder);

  if (files[0] == ".DS_Store") {
    return files.splice(1, files.length - 1);
  }

  console.log("files", files);

  return files;
};
