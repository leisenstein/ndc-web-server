var express = require('express');
var app = express(0);
var PORT = 3000;


var middleware = require('./middleware');
app.use(middleware.logger);


// called before routes defined; putting here adds to all routes below
///app.use(middleware.requireAuthentication);

// route, function
// req holds data sent from user
// url, json data, cookies
// res is what you want to send back

// get corresponsds to http method
// only require Auth for this route
app.get('/about', middleware.requireAuthentication,function(req, res) {
   res.send('About Us!');
});


app.use(express.static(__dirname + '/public'));
app.listen(PORT, function() {
	console.log('Express Server started and listening on Port: ' + PORT)
});