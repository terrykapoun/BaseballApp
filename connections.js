const mysql = require("mysql");
// require("./config.js")
let pool = mysql.createPool({
  connectionLimit: 10,
  port: 3306,
  host: "sql9.freemysqlhosting.net",
  user: "sql9296608",
  password: "JH9aDuSamn",
  database: "sql9296608",
  
  
  
  
  // port: 8889,
  // host: "localhost",
  // user: "admin",
  // password: "password",
  // database: "BaseballStatDataBase",
});
  
  
  
  


module.exports.pool = pool;