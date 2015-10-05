var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// app.set('port', process.env.PORT || 7050);
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function(req, res) {
	res.render('index');
});

var port = process.env.PORT || 7050;

var server = app.listen(port, function() {
	console.log('Express server listening on port ' + server.address().port);
});
