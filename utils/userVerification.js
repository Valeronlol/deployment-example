const { comparePasswordLogin } = require("../utils/passwordHash");
const { jwtGenerate } = require("../utils/jwtGenerate");

exports.userVerification = async (candidat, allUsers, res) => {
  const loginUser = await allUsers.find(
    (user) => user.email === candidat.email
  );

  if (!loginUser) {
    res.writeHead("404");
    return { message: "no such user", code: 404 };
  }

  if (comparePasswordLogin(candidat.password, loginUser.password, res)) {
    return {
      token: jwtGenerate({ id: loginUser.id, email: loginUser.email }),
      ...loginUser,
    };
  } else {
    res.writeHead("404");
    return { message: "Incorrect password", code: 404 };
  }
};
