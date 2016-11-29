/**
 * Dependencies
 */
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var message = require("../controllers/message");

app.get('/', function(req, res){
	res.send("Hello world");
});

io.on('connection', function(socket){
	/**
	 * Authentication process should be here before listening to controllers
	 * ....
	 */

	socket.join("everybody");

	socket.on('MESSAGE_CREATE', function(payload, cb){
		message.create(payload.text).then((response) => {
			if (cb) {
				cb(response);
			}

			if (response.status) {
				io.to("everybody").emit("MESSAGE_CREATE", response);
			}
		}).catch(cb)
	});
});

http.listen(3000, function(){
	console.log('listening on *:3000');
});
