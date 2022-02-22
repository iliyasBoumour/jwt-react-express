const login = (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(400);
    throw new Error("bad credentials");
  }
};

module.exports = { login };
