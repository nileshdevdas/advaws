var port = process.env.PORT || 3000;
var http = require("http");

///
var server = http.createServer(function (req, res) {
    console.log("here....");
    res.write("Hello WOrld");
    res.end();
});

server.listen(port);
