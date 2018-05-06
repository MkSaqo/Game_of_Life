var express = require('express');
var path = require('path');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var KendaniEak = require("./public/KendaniEak.js");
var Grass = require("./public/Grass.js");
var Xotaker = require("./public/Xotaker.js");
var Pat = require("./public/Pat.js");
var Script = require("./public/script.js");
var Xotakeraker = require("./public/Xotakeraker.js");
var Carukyan = require("./public/Carukyan.js");


var grassArr = [];
var patArr = [];
var xkArr = [];
var xotakerakerArr = [];
var carukyanArr = [];
var matrix = matrica(15,15);
app.use(express.static('.'));

app.get('/', function(req, res) {
    res.redirect('/public/index.html');
})

server.listen(3000, function() {
    console.log("Nikol Varchapet");
})

io.on('connection', function (socket) {   
    // socket.on("send message", function (data) {
    //     messages.push(data)
    
    socket.emit("display message", matrix);
    // })

});






function matrica(n, m) {
        var matrix = [];
        for (var i = 0; i < n; i++) {
            matrix.push([]);
            for (var j = 0; j < m; j++) {
                matrix[i][j] = Math.floor(Math.random() * 2);
            }
        }

        matrix[Math.floor(Math.random() * matrix.length)][Math.floor(Math.random() * matrix[0].length)] = 2;
        matrix[Math.floor(Math.random() * matrix.length)][Math.floor(Math.random() * matrix[0].length)] = 2;
        matrix[Math.floor(Math.random() * matrix.length)][Math.floor(Math.random() * matrix[0].length)] = 2;
        matrix[Math.floor(Math.random() * matrix.length)][Math.floor(Math.random() * matrix[0].length)] = 2;
        matrix[Math.floor(Math.random() * matrix.length)][Math.floor(Math.random() * matrix[0].length)] = 3;
        matrix[Math.floor(Math.random() * matrix.length)][Math.floor(Math.random() * matrix[0].length)] = 5;
        matrix[Math.floor(Math.random() * matrix.length)][Math.floor(Math.random() * matrix[0].length)] = 5;
        matrix[Math.floor(Math.random() * matrix.length)][Math.floor(Math.random() * matrix[0].length)] = 5;
        matrix[Math.floor(matrix.length / 4)][Math.floor(Math.random() * matrix[0].length)] = 4;
        matrix[Math.floor(matrix.length - 3)][Math.floor(Math.random() * matrix[0].length)] = 4;
        matrix[Math.floor(matrix.length - 7)][Math.floor(Math.random() * matrix[0].length)] = 4;
        return matrix;
    }