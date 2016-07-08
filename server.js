// dependancies
var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

var app = express();

var exphbs = require('express-handlebars');
var connection =require('./config/connection.js');
var path = require('path');

var PORT = process.env.PORT || 3000;
//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + '/public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static('public/assets'));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));

app.set('view engine', 'handlebars');


// port listener
app.listen(port, function) {

console.log("Please eat a burger. You are on Port: " + PORT);

});