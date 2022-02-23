const jwt = require("jsonwebtoken");

const login = (req, res) => {
  const { id, role } = req.user;
  let token = jwt.sign({ id, role }, process.env.JWT_TOKEN, {
    expiresIn: "1d",
  });
  token = `Bearer ${token}`;
  res.header("Authorization", token).json({ token });
};

module.exports = { login };
