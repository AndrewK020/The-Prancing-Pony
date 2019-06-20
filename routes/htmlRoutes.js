var db = require("../models");
var express = require("express");
var path = require("path");
var app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


module.exports = function(app) {
  // Load index page
  //app.get("/", function(req, res) {
    //db.Rooms.findAll({}).then(function(dbExamples) {
      //res.render("index", {
        //msg: "Welcome!",
        //examples: dbExamples
      //});
    //});
  //});

  app.get("/", function(req,res){
    res.sendfile((path.join(__dirname, "../public/html", "index.html")));
  })

  // Load example page and pass in an example by id
  // app.get("/example/:id", function(req, res) {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.render("example", {
  //       example: dbExample
  //     });
  //   });
  // });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
