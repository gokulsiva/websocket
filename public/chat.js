//Make connection to the socket
var socket = io.connect('http://localhost:4000');

//DOM selectors

var message = document.getElementById('message');
var handle = document.getElementById('handle');
var button = document.getElementById('send');
var output = document.getElementById('output');
var feedback = document.getElementById('feedback');

//Emit events
button.addEventListener('click', function(){
    socket.emit('chat', {
        message: message.value,
        handle: handle.value
    });
});

message.addEventListener('keypress', function(){
    socket.emit('typing', handle.value);
});

//Listen for events
socket.on('chat', function(data){
    feedback.innerHTML = '';
    output.innerHTML += '<p><strong>'+data.handle+'</strong>:'+data.message+'</p>';
});

socket.on('typing', function(data){
    console.log(data);
    feedback.innerHTML = '<p><em>'+data+' is typing...</em></p>';
});