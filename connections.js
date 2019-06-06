const mysql = require("mysql");
// require("./config.js")
let pool = mysql.createPool({
  connectionLimit: 10,
  port: 8889,
  host: "localhost",
  user: "admin",
  password: "password",
  database: "BaseballStatDataBase",
});
  
  
  
  


module.exports.pool = pool;