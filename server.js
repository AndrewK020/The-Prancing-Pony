require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");

var db = require("./models");

var app = express();
var PORT = process.env.PORT || 8080;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(express.static("Dashboard"));

// Handlebars
app.engine(
   "handlebars",
   exphbs({
     defaultLayout: "main"
   })
 );
 app.set("view engine", "handlebars");

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});


module.exports = app;
