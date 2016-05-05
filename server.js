//NPM packages
//============================================================
var express = require('express');
var bodyParser = require('body-parser');
var path= require('path');

//Express Start-up
//=====================================================
var app = express(); 
var PORT = process.env.PORT || 2350; 


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));


//routes
//===================================================
require('./routing/api-routes.js')(app); 
require('./routing/html-routes.js')(app);

//Listener
//====================================================
app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});