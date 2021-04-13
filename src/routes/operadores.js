const routes = require('express').Router();
const operadores = require('../controllers/operadores');

routes.get("/:id",  async function(req, res) { 
    const id = req.params.id;   
    const result = await operadores.RetornaPorID(id);
    res.send(result);
})

routes.post('/', async function(req, res) {
    let result = (req.body);
    res.send(result);
})

module.exports = routes;