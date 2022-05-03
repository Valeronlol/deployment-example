const bcrypt = require("bcrypt");
const saltRounds = 10;

exports.createPasswordHash = (password) => {
  const salt = bcrypt.genSaltSync(saltRounds);

  const hash = bcrypt.hashSync(password, salt);

  return hash;
};

exports.comparePasswordLogin = (password, hash) => {
  const valid = bcrypt.compareSync(password, hash);

  return valid;
};
