const conexao = require('../config/conexao');

module.exports = {
    async RetornaPorID(id) {        
      const sql = `SELECT * FROM OPERADORES WHERE ID = ${id}`;
  
      const result = await conexao.qry(sql);
    
      return result.recordset;
    },
  };