var express = require('express');
var path = require('path');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var KendaniEak = require("./public/KendaniEak.js");
var Grass = require("./public/Grass.js");
var Xotaker = require("./public/Xotaker.js");
var Pat = require("./public/Pat.js");
var Xotakeraker = require("./public/Xotakeraker.js");
var Carukyan = require("./public/Carukyan.js");
var Script = require("./public/Script.js");

// Define the port to run on
app.set('port', process.env.PORT || 3000);

app.use(express.static(path.join(__dirname, 'public')));

// Listen for requests
var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Magic happens on port ' + port);
}); 

var grassArr = [];
var patArr = [];
var xkArr = [];
var xotakerakerArr = [];
var carukyanArr = [];


io.on('connection', function (socket) {   
    console.log(12) 
    // socket.on("send message", function (data) {
        // messages.push(data)
        socket.emit("display message", data);
    // })

});

