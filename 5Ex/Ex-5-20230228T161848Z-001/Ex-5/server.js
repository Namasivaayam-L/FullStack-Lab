var http = require('http');
var fs = require('fs');
var url = require('url');
http.createServer(function (request, response) {
    // var text = "Hello World";
    // var count = text.split(' ').length;
    // response.write(count);
    // console.log("length of the Sentence : " +text.split(' ').length);
    var value = "Inish Raj@9099";
    var reg = new RegExp("[0-9@]{5}");
    var mat = value.replace(reg,"")
    console.log(value.replace(reg,""));
    response.write(mat);
    response.end();
}).listen(4000);
console.log('Server running at localhost:4000');