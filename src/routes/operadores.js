const routes = require('express').Router();
const operadores = require('../controllers/operadores');

routes.get("/:id",  async function(req, res) { 
    const id = req.params.id;   
    const result = await operadores.RetornaPorID(id);
    res.send(result);
})

routes.post('/insert', async function(req, res) {
    const data = await operadores.Inserir(req.body);
    if (data > 0) {
        res.send("Operador cadastrado!")
    }
    else {
        res.send("Erro!")        
    }    
})

module.exports = routes;