const routes = require("express").Router();
const login = require("../controllers/login");
var jwt = require("jsonwebtoken");

const key = process.env.key;
routes.post("/", async (req, res) => {
  var auth = await login.VerificarAcesso(req.body.user, req.body.pass);

  if (auth.length > 0) {
    const id = auth[0].ID;
    const token = jwt.sign({ id }, key, {
      expiresIn: 300, // expires in 5min
    });
    return res.json({ auth: true, token: token });
  } else {
    res.status(500).json({ message: "Login inválido!" });
  }
});

module.exports = routes;
