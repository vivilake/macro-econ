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

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/taxdata.json');
});

server.listen(8080);