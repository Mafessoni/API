const conexao = require('../config/conexao');

module.exports = {
    async RetornaPorID(id) {        
      const sql = `SELECT * FROM OPERADORES WHERE ID = ${id}`;
  
      const result = await conexao.qry(sql);
    
      return result.recordset;
    },

    async Inserir(obj){
      const nome = (obj.user) ? obj.user : 'null';
      const senha = (obj.pass) ? obj.pass : 'null';
      const gerencial = (obj.gerencial) ? obj.gerencial : 'null';
      
      const sql = `INSERT INTO OPERADORES (NOME, SENHA, NIVELGERENCIAL) VALUES ('${nome}','${senha}',${gerencial})`;
      const result = await conexao.qry(sql);
      return result.rowsAffected;
    }
  };