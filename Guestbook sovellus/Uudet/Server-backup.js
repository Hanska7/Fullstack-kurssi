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



} else if (request.url === "/guestbook") {
    
// Valitaan Content-type tarjoiltavan sisällön suhteen
response.writeHead(200, { "Content-Type": "text/html" });
response.write("Olet saapunut informatiiviselle tietosivulle. \n");

var file = require('./data.json'); 

console.log("Luettu tiedostosta:");
/* console.log(file.toString()); */

var results ='<table border="1"> ';

// Parse the results into a variable
 
/*  for (var i=0; i < data.length; i++){
   results +=
   '<tr>'+
   '<td>'+data[i].Name+'</td>'+
   '<td>'+data[i].Email+'</td>'+
   '</tr>';
 } */


for (var i = 0; i < file.length; i++) {
            
results +=

"<tr>" +
"<td>" +
file[i].nimi +
"</td>" +
"<td>" +
file[i].maa +
"</td>" +
"<td>" +
file[i].viesti +
"</td>" +
"</tr>";

/* console.log(results) */
}

/* var data = JSON.stringify(results, "", 1); // Parametreilla "" ja 1 saadaan kaunis tulostus */
response.write(results)





} else if (request.url === "/newmessage") {
    
// Valitaan Content-type tarjoiltavan sisällön suhteen
response.writeHead(200, { "Content-Type": "text/html" });

response.write("Olet saapunut palvelimen uteliaalle kysyjäsivulle.");

var html3 = fs.readFileSync('Kysyjäsivu.html');
response.write(html3)

    

}

else if (request.url === "/ajaxmessage") {
    
// Valitaan Content-type tarjoiltavan sisällön suhteen
response.writeHead(200, { "Content-Type": "text/html" });
            
response.write("Olet saapunut palvelimen monimutkaiselle Ajaxsivulle.");
  





  
}


else if (request.url === "/kirjaudu") {
    
    // Valitaan Content-type tarjoiltavan sisällön suhteen
    response.writeHead(200, { "Content-Type": "text/html" });
                
    response.write("Olet saapunut lähettänyt uuden viestin JSONille.");
      
    
    var data = 

    // Kirjoitetaan lopuksi tiedosto levylle JSON-muodossa, eli sellaisenaan
    fs.writeFileSync("data.json", data);
    response.write(JSON.stringify(data));


}





else if (request.url === "/kirjaudu2") {
    
    // Valitaan Content-type tarjoiltavan sisällön suhteen
    response.writeHead(200, { "Content-Type": "text/html" });
                
    response.write("Olet lähettänyt uuden viestin Ajaxille.");
      



}

console.log('Palvelin kuuntelee portissa ' +port)

response.end(); //HTTP vastaus päättyy



})



.listen(port); // palvelin kuuntelee joko pilvipalvelun porttia tai paikallista porttia nro 3000