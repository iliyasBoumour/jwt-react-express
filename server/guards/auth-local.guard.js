const users = require("../data/users");
const validateUser = (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(400);
    throw new Error("email and password are required");
  }
  const user = users.find((u) => u.name === username);
  if (!user || user.password !== password) {
    res.status(400);
    throw new Error("bad credentials");
  }
  const { password: pwd, ...rest } = user;
  req.user = rest;
  next();
};

module.exports = validateUser;
