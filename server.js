// Dependencies
// =============================================================
var express = require("express");

var db = require("./models");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Static directory to be served
app.use(express.static("public"));

// Routes
// =============================================================
require("./routes/burger.js")(app);

// // Here we introduce HTML routing to serve different HTML files
// require("./app/routes/html-routes.js")(app);

// Starts the server to begin listening
// =============================================================
db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
});