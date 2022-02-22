const jwt = require("jsonwebtoken");

const login = (req, res) => {
  const { id, role } = req.user;
  const token = jwt.sign({ id, role }, process.env.JWT_TOKEN, {
    expiresIn: "1d",
  });
  const cookie = `Authentication=Bearer ${token}; HttpOnly; Path=/; Max-Age=1d`;
  res.setHeader("Set-Cookie", cookie).json(req.user);
};

module.exports = { login };
