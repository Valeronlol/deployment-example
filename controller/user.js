const userModel = require("../model/user");
const { v4: uuidv4 } = require("uuid");
const { createPasswordHash } = require("../utils/passwordHash");
const { userVerification } = require("../utils/userVerification");

exports.registration = async (req, res) => {
  const newUserBody = req.body;

  const candidate = {
    id: uuidv4(),
    name: newUserBody.username,
    lastname: newUserBody.lastname,
    bithday: new Date(newUserBody["date-picker"]).toLocaleDateString("ru-RU"),
    email: newUserBody.email,
    password: await createPasswordHash(newUserBody.password),
    role: "USER",
    activationLink: uuidv4(),
  };

  const result = await userModel.addNewUser(req, res, candidate);

  res.end(JSON.stringify(result));
};

exports.getQuery = async (req, res) => {
  const actId = req.query.id;
  await userModel.getQuery(actId);
  return res.end(JSON.stringify({ code: 200, message: "user confirmed" }));
};

exports.login = async (req, res) => {
  const candidate = req.body;
  const allUsers = await userModel.login();

  const result = await userVerification(candidate, allUsers, res);
  res.end(JSON.stringify(result));
};
