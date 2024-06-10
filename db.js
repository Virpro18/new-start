const sql = require("mysql");

let conn = sql.createConnection({
  socketPath: "/var/run/mysqld/mysqld.sock",
  host: "localhost",
  user: "root",
  password: "",
  database: "flow",
});

module.exports = conn;
