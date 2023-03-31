var http = require("http");
var options = {
  host: "172.16.7.37",
  port: "3000",
  path: "/",
};
var callback = function (response) {
  var body = "";
  response.on("data", function (data) {
    body += data;
  });
  response.on("end", function () {
    console.log(body);
    console.log(body.length);
  });

  response.on("error", (error) => {
    console.error(error);
  });
};
var req = http.request(options, callback);
req.end();
