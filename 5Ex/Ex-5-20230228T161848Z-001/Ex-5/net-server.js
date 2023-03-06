var net = require("net");
var server = net.createServer(function(connection) {
    console.log('Client connected.');
    connection.on('end', function() {
        console.log('Client disconnected.');
    });
    connection.write('Hello World!\n');
    connection.pipe(connection);
});
server.listen(5000, function() {
    console.log('Server is listening.');
});
