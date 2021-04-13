const conexao = require('../config/conexao');

module.exports = {
    async login(user, pass) {            
    
    let a = user;
    let b = pass;
    console.log(a +" - "+ b);
      //const sql = `SELECT ID, NOME, SENHA FROM OPERADORES WHERE NOME = ${user} AND SENHA = ${pass}`;
  
      //const result = await conexao.qry(sql);

      
      //return result[0].ID.toString();
    },
  };