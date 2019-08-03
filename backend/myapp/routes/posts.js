var express = require('express');
var router = express.Router();
var mysql = require('mysql');
const con = mysql.createConnection({
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
  con.query("SELECT * FROM posts", function (err, data) {
    if (err) return console.log(err);
    res.send(data);
  });
});

router.post('/', function (req, res) {
  console.log(JSON.stringify(req.body));
  res.send("gotit");
});
module.exports = router;