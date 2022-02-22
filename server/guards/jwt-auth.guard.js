const users = require("../data/users");
const jwt = require("jsonwebtoken");

const verifyJwt = (req, res, next) => {
  let token = req?.cookies?.Authentication;
  if (!token || !token.startsWith("Bearer")) {
    res.status(401);
    throw new Error("Unauthorized");
  }
  token = token.split(" ")[1];
  const { id } = jwt.verify(token, process.env.JWT_TOKEN);
  const { password, ...rest } = users.find((u) => u.id === id);
  req.user = rest;
  next();
};

module.exports = verifyJwt;
