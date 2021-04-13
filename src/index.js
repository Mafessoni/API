const express = require("express");
const bodyParser = require("body-parser");
const db = require("./config/conexao");
const operadores = require("./routes/operadores");
const login = require("./routes/login");
const app = express();
const port = 8090;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var path = require("path");
app.use("/interface", express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
  res.sendFile("index.html", { root: "./interface/partial/login" });
});

/* Lista das rotas */
app.use("/operadores", operadores);
app.use("/login", login);

/* Inicia a conexão com o banco de dados */
db.init();

app.listen(port, () => {
  console.log(`Trabalhando aqui... http://localhost:${port}`);
});
