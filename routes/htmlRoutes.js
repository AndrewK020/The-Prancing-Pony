var db = require("../models");
var express = require("express");
var path = require("path");
var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


module.exports = function(app) {

  app.get("/", function(req,res){
    res.sendfile((path.join(__dirname, "../public/html", "index.html")));
  });

  app.get("/rooms", function(req,res){
    res.sendfile((path.join(__dirname, "../public/html", "rooms.html")));
  });

  app.get("/book", function(req,res){
    res.sendfile((path.join(__dirname, "../public/html", "booknow.html")));
  });

  app.get("/contact", function(req,res){
    res.sendfile((path.join(__dirname, "../public/html", "contact.html")));
  });

  app.get("/dashboard", function(req, res) {
    res.sendfile((path.join(__dirname, "../dashboard", "dashboard.html")));
  });

  app.get("*", function(req, res) {
    res.render("404");
  });
};
