const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const { catchErrors, routeNoteFound } = require("./errors/errors.handler");

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());
//
app.use("/api/products", require("./routes/products.routes"));
app.use("/api/auth", require("./routes/auth.routes"));
app.get("/api/protected", require("./guards/jwt-auth.guard"), (req, res) =>
  res.json(req.user)
);

app.use(routeNoteFound);
app.use(catchErrors);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
