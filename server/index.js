const express = require("express");
const app = express();
const mysql = require("mysql");
const port = 5000;

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "test",
  password: "password",
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

app.get("/api", (req, res) => {
  res.set({ "Access-Control-Allow-Origin": "*" });
  const sql = "select * from test.users";
  connection.query(sql, function(err, result, fields) {
    if (err) throw err;
    res.send(result);
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
