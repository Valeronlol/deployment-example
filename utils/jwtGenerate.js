const jwt = require("jsonwebtoken");
const jwtACString = "U2WeayqfWNwF7ZnB";
const jwtRefString = "rfJa6rAc339KLyCS";
exports.jwtGenerate = (payload) => {
  const accessToken = jwt.sign(payload, jwtACString, { expiresIn: "30m" });
  const refreshToken = jwt.sign(payload, jwtRefString, { expiresIn: "30d" });
  return {
    accessToken,
    refreshToken,
  };
};
