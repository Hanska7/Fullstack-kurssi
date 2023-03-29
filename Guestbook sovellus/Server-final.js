var http = require("http");
var fs = require("fs");
const port = process.env.PORT || 8080;

//create a server object:

http
.createServer(function (request, response) {

if (request.url === "/") {
   
// Valitaan Content-type tarjoiltavan sisällön suhteen
response.writeHead(200, { "Content-Type": "text/html" });
response.write("Olet saapunut palvelimen kauniille etusivulle.");

var html = fs.readFileSync('Etusivu.html');
response.write(html)



} else if (request.url === "/Listasivu") {
    
// Valitaan Content-type tarjoiltavan sisällön suhteen
response.writeHead(200, { "Content-Type": "text/html" });
response.write("Olet saapunut informatiiviselle tietosivulle.");

var json = require('./data.json'); 

response.write(JSON.stringify(json));





} else if (request.url === "/Kysyjäsivu") {
    
// Valitaan Content-type tarjoiltavan sisällön suhteen
response.writeHead(200, { "Content-Type": "text/json" });

response.write("Olet saapunut palvelimen uteliaalle kysyjäsivulle.");

var html3 = fs.readFileSync('Kysyjäsivu.html');
response.write(html3)

    

}

else if (request.url === "/Ajaxsivu") {
    
// Valitaan Content-type tarjoiltavan sisällön suhteen
response.writeHead(200, { "Content-Type": "text/json" });
            
response.write("Olet saapunut palvelimen monimutkaiselle Ajaxsivulle.");
  
var html4 = fs.readFileSync('Ajaxsivu.html');
response.write(html4)
  
}
  



console.log('Palvelin kuuntelee portissa ' +port)

response.end(); //HTTP vastaus päättyy



})



.listen(port); // palvelin kuuntelee joko pilvipalvelun porttia tai paikallista porttia nro 3000