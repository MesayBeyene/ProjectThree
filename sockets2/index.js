
var express = require("express");
var bodyParser = require("body-parser");
var socket = require('socket.io');
var translate = require("yandex-translate")(
    "trnsl.1.1.20190829T040235Z.890db9d479f85b75.1b22e9727b69710bd1383f08aefedc29257a1853"
);

var app = express();

app.use(
    bodyParser.urlencoded({
        extended: false
    })
);

// Static files
app.use(express.static('public'));
var messageArray = []
var langArray = []

app.post("/data", function (req, res) {
    console.log(req.body);
var lang = 'ru'
var message = 'You can burn my house, steal my car, drink my liquor from an old fruitjar.'
    translate.translate(message, { to: lang }, function(err, res) {
        console.log(res.text);
      });
});



// Socket setup & pass server
var io = socket(server);
io.on('connection', function (socket) {

    console.log('made socket connection', socket.id);
    socket.on('chat', function (data) {
        io.sockets.emit('chat', data)
       
    })

    socket.on("typing", function (data) {
        socket.broadcast.emit("typing", data)
    })

});


var server = app.listen(4000, function () {
    console.log('listening for requests on port 4000,');
});
