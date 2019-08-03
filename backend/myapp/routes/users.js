var express = require('express');
var router = express.Router();
var mysql = require('mysql');
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'node-app',
  password: 'qwert%$#@!'
});
var mysql = require('mysql');


router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/* GET users listing. */
router.get("/", function (req, res) {
  con.query("SELECT * FROM users", function (err, data) {
    if (err) return console.log(err);
    res.send(data);
  });
});

router.post('/', function (req, res) {
  console.log(JSON.stringify(req.body));
  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    //Insert a record in the "customers" table:
    var sql = `INSERT INTO users (username, lastname) VALUES (${JSON.stringify(req.body.firstname)},${JSON.stringify(req.body.firstname)})`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
  });
  res.send("gotit");
});
module.exports = router;