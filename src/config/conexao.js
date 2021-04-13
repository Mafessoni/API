const sql = require("mssql");
require("dotenv").config();
const config = {    
  user: "SA",
  password: process.env.PASSWORD,
  server: process.env.SERVIDOR,
  database: process.env.DATABASE,
  options: {
    encrypt: false,
    enableArithAbort: true,
  },  
};
const db = {
    pool: null,
    async init() {        
      db.pool = await sql.connect(config);
      console.log('Conexão com o banco de dados bem sucedida!');
    },
    async qry(sql) {
      return db.pool.request().query(sql);
    },
  };
  
  module.exports = db;