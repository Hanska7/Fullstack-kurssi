var http = require("http");
var portti = 8082



http
    .createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Moro paskoille\n");
    response.end("End of text");

    

    })



console.log('Serveri portissa '+portti)
.listen(portti);




