var express = require('express'),
    app = express(),
	http = require('http'),
	server = http.createServer(app);

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};

app.use(express.methodOverride());
app.use(allowCrossDomain);

app.use(express.static(__dirname + '/public'));

app.get('/taxdata', function (req, res) {
  res.sendfile(__dirname + '/taxdata.json');
});

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

var port = process.env.PORT || 5000;

server.listen(port);