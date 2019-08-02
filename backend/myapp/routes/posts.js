var express = require('express');
var router = express.Router();
var mysql = require('mysql2');
const Sequelize = require('sequelize');
const sequelize = require('../database/sequilize');
const User = require('./users');
var user = User.user.findByPk(1).then(tt => {
  return tt;
})

router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

class Posts extends Sequelize.Model { }
Posts.init({
  postname: Sequelize.STRING,
  postbody: Sequelize.STRING,
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
}, { sequelize, modelName: 'posts' });








/* GET users listing. */
router.get("/", function (req, res) {
  // Each record will now be mapped to the project's model.
  user.createPost({
    postname: "eer",
    postbody: "eeteetteeeeee",
  })
    .then(() => {
      console.log("User.oneuser");
      console.log("User.oneuser");
      console.log("User.oneuser");
      console.log("User.oneuser");
      console.log("User.oneuser");
      console.log(user);
      res.send("got");
    })
});

router.post('/', function (req, res) {
  Posts.create({
    postname: "eer",
    postbody: "eeteetteeeeee",
  })
    .then(() => {
      res.send("got");
    });
});
exports.router = router;
exports.Posts = Posts;



