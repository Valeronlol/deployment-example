const path = require("path");

exports.clientPath = () => `${process.cwd()}/client`;

exports.usersPath = () => path.resolve(process.cwd(), "data/usersdb.json");
