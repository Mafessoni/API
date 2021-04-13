const express = require('express');
const bodyParser = require('body-parser');

const db = require('./config/conexao');
const operadores = require('./routes/operadores');
const login = require('./routes/login');
const app = express();
const port = 4000;


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.sendFile("D:/Projetos/API/interface/partial/login/index.html");
    //res.send('Conectado!')
})

/* Lista das rotas */
app.use('/operadores', operadores);
app.use('/login', login);


/* Inicia a conexão com o banco de dados */
db.init();

app.listen(port, () => {
    console.log(`Trabalhando aqui... http://localhost:${port}`)
})