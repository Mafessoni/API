const conexao = require("../config/conexao");

module.exports = {
  async VerificarAcesso(user, pass) {
    const sql = `SELECT ID_OPERADORES AS ID, NOME, SENHA FROM OPERADORES WHERE NOME = '${user}' AND SENHA ='${pass}'`;
    const result = await conexao.qry(sql);
    return result.recordset;
  },
};
