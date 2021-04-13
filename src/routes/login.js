const routes = require('express').Router();
const login = require('../controllers/login');
var jwt = require('jsonwebtoken');

const key = "xpt2000";
routes.post('/', (req, res, next) => {
    var auth = login.login(req.body.user, req.body.pass);
    res.send(auth);

    /*
    //esse teste abaixo deve ser feito no seu banco de dados
    if (auth) {   
      const id = 1; //esse id viria do banco de dados
      const token = jwt.sign({ id }, key, {
        expiresIn: 300 // expires in 5min
      });
      return res.json({ auth: true, token: token });
    }    
    res.status(500).json({message: 'Login inválido!'});
    */
})

module.exports = routes;