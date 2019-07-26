var express = require('express');
var router = express.Router();
var mysql = require('mysql2');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('node-app', 'root', 'qwert%$#@!', {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  // SQLite only
  storage: 'path/to/database.sqlite',

  // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
  operatorsAliases: false
});
const User = sequelize.define('users', {
  username: Sequelize.STRING,
  lastname: Sequelize.STRING
});

router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/* GET users listing. */
router.get("/", function (req, res) {
  sequelize
    .query('SELECT * FROM users')
    .then(projects => {
      // Each record will now be mapped to the project's model.
      console.log(typeof projects);
      res.send(projects)
    })
});
router.post('/', function (req, res) {
  sequelize.sync()
    .then(() => User.create({
      username: req.body.firstname,
      lastname: req.body.firstname
    }))
    .then(() => {
      res.send("got");
    });
});
module.exports = router;
