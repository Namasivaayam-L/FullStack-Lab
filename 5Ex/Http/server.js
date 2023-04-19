var http = require('http');
http.createServer(function (request, response) {
    var value = "Namasivaayam L";
    var reg = new RegExp("[0-9@]{5}");
    var mat = value.replace(reg,"")
    console.log(value.replace(reg,""));
    response.write(mat);
    response.end();
}).listen(5000);
console.log('Server running at localhost:5000');