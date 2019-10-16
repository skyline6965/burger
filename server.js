// dependencies
var express = require("express");
var mysql = require('mysql');
var PORT = process.env.PORT || 8080;
var app = express();

require("dotenv").config();


// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));


// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// set handlebars
var exphbs = require("express-handlebars");


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burger_controller");

app.use(routes);

// listener
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
  

