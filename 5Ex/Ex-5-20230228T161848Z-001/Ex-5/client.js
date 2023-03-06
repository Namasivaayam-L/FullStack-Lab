var http = require('http');
var options = {
host: 'localhost', port: '4000', path: '/home.html' 
};
var callback = function (response) {
        var body = '';
        response.on('data', function (data) {
        body += data;
});
response.on('end',function(){
    console.log(body);
});

response.on('error', (error)=> {
    console.error(error);
});
};
var req = http.request(options, callback);
req.end();