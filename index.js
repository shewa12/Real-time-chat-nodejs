var app = require('express')();
var url = require('url');
var http = require('http').Server(app);

var io = require('socket.io')(http);
app.get('/', function(req, res){
  //including html file
  res.sendFile(__dirname + '/index.html');
});
//io content & disconnect event
io.on('connection', function(socket){
//check user connectin  
  console.log('a user connected');

//on msg event
  socket.on('chat message', function(msg){
    //console.log('message: ' + msg);
    io.emit('chat message', msg);
  });

//check user disconnection  
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});
//io content & disconnect event end
http.listen(8080);
/*
  http://192.168.91.1:8080
  http://192.168.139.1:8080
  http://192.168.11.105:8080
  http://127.0.0.1:8080
*/

  
  
