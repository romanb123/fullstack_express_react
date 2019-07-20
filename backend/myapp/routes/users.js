var express = require('express');
var router = express.Router();
var mysql = require('mysql');
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'node-app',
  password: 'qwert%$#@!'
});
router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/* GET users listing. */
router.get("/", function (req, res) {
  pool.query("SELECT * FROM products", function (err, data) {
    if (err) return console.log(err);
    res.send(data);
  });
});

router.post('/', function (req, res) {
  console.log(req.body);
});
module.exports = router;
