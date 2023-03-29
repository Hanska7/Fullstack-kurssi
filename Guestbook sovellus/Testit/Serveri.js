
var http = require("http");
var fs = require("fs");


// const { json } = require("stream/consumers");

var json = require("./data.json");


//create a server object:
http.createServer(function(request, response) {
   

    if (request.url === "/"){
        response.writeHead(200, { "Content-Type": "text/html" });

        response.write("Olet saapunut palvelimen juureen.");
        } 
        else if (request.url === "/helloworld"){
            response.writeHead(200, { "Content-Type": "text/html" });
        
            var html = fs.readFileSync('HTML etusivu.html');
        
            response.write(html);
        } 

        else if (request.url === "/json"){
            response.writeHead(200, { "Content-Type": "text/json" });
            var json = require('./data.json');
        

            response.write("Olet saapunut Jsonin ääreen.\n");
            console.log("Olet saapunut Jsonin ääreen.")

            response.write(JSON.stringify(json));

        } 


        var uusi = {
            
            kommentti:'Tästä alkaa Json',

        }

        
        //json.unshift(uusi);
        json.push(uusi);



        console.log(uusi);

        fs.writeFileSync("./data.json", uusi);
        
        console.log(json[0].kommentti);


        response.end(); //end the response




  })
  .listen(8080); //the server object listens on port 8080


