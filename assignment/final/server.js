let express = require('express');
let app = express();
let server = app.listen(process.env.PORT || 3000, listen)

function listen() {
	var host = server.address().address;
	var port = server.address().port;
	console.log('Example app listening at http://' + host + ':' + port);
  }
  
app.use(express.static('public'));
let socket = require('socket.io')
let io = socket(server);



/* this part to emit data */
io.sockets.on('connection', newConnection)
function newConnection(socket){
	console.log('connected:', socket.id);

	socket.on('disconnect', function(){
		console.log('user disconnected !')
	})

	socket.on('mouse', mouseMsg);
	function mouseMsg(data) {
		socket.broadcast.emit('mouse', data)
		//console.log(data)
	}
}