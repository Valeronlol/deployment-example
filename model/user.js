const { writeJSONAsync } = require("../utils/recordJSON");
const { readJSONAsync } = require("../utils/readJSON");
const { usersPath } = require("../utils/path");
const { emailVerefication } = require("../services/nodemailer");

exports.addNewUser = async (req, res, newUser) => {
  const allUsers = await readJSONAsync(usersPath());

  const foundUser = allUsers.find((user) => user.email === newUser.email);

  if (foundUser) {
    return { code: 404, message: "User already registered" };
  } else {
    emailVerefication(newUser);
    allUsers.push(newUser);
    await writeJSONAsync(usersPath(), allUsers);
  }

  return { code: 200, message: "user aded" };
};

exports.getQuery = async (queryID) => {
  const allUsers = await readJSONAsync(usersPath());
  const activateUser = allUsers.find((user) => user.activationLink === queryID);

  if (activateUser) {
    const confirmedUser = {
      ...activateUser,
      confirmed: true,
    };

    const updateUsers = allUsers.filter((user) => user.id !== activateUser.id);
    updateUsers.push(confirmedUser);
    await writeJSONAsync(usersPath(), updateUsers);

    return { code: 200, message: "подтверждено" };
  }
};

exports.login = async () => await readJSONAsync(usersPath());
