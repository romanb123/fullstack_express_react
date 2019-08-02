var express = require('express');
var router = express.Router();
var mysql = require('mysql2');
const Sequelize = require('sequelize');
const sequelize = require('../database/sequilize');


class User extends Sequelize.Model { }
User.init({
  username: Sequelize.STRING,
  lastname: Sequelize.STRING,
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
}, { sequelize, modelName: 'users' });
router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/* GET users listing. */
router.get("/", function (req, res) {
  // Each record will now be mapped to the project's model.
  User.findAll().then(projects => {
    res.send(projects);
  })


});
router.post('/', function (req, res) {
  User.create({
    username: req.body.firstname,
    lastname: req.body.lastname
  })
    .then(() => {
      res.send("got");
    });
});
exports.router = router;
exports.user = User;

