var http = require('http');

var server = http.createServer((req,res) => {
    console.log('Server Recieved Requested');
})
var PORT = 8080;
server.listen(PORT,() => {console.log(`Server running on ${PORT}...`)});