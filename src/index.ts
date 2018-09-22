import * as express from 'express'
import * as socket from 'socket.io'

//App Setup

let app = express.default();
let server = app.listen(4000, () => {
    console.log('Server started on port 4000.');
});

//Static files
app.use(express.static('public'));

//Socket setup
let io = socket.default(server);

io.on('connection', (socket) => {
    console.log('**** Socket connection is made to the server ****', socket.id);

    socket.on('chat', (data) => {
        //console.log(JSON.stringify(data));
        io.sockets.emit('chat', data)
    });
});