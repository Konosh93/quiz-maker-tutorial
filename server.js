var express = require('express');
var port = 3001;

var app = express();

app.listen(port, () => console.log('Listening at port ' + port))