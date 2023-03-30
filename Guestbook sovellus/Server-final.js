var http = require("http");
var fs = require("fs");
const port = process.env.PORT || 8080;



var express = require('express');

// Otetaan body-parser -moduuli käyttöön
var bodyParser = require("body-parser");


var app = express();
app.use(express.static("./"));

// Otetaan se käyttöön app-nimisessä express-sovelluksessa
app.use(bodyParser.urlencoded({ extended: true }));




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
console.log(file.toString());

var results ='<table border="1"> ';



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

console.log(results)
}

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


var html4 = fs.readFileSync('Ajaxsivu.html');
response.write(html4)




  
}


else if (request.url === "/kirjaudu") {
    
    // Valitaan Content-type tarjoiltavan sisällön suhteen
    response.writeHead(200, { "Content-Type": "text/json" });
    response.write('Lähetit lomakkeen JSONille')
    
}


else if (request.url === "/kirjaudu2") {
    
    // Valitaan Content-type tarjoiltavan sisällön suhteen
    response.writeHead(200, { "Content-Type": "text/json" });
    response.write("Olet lähettänyt uuden viestin Ajaxille.");

}





// Uusi POST-tyyppiseen sivupyyntöön reagoiva reitti

app.post("/kirjaudu", function(req, res) {
    
app.use(bodyParser.json());

console.log(req.body);
var email = req.body.email;
var pass = req.body.pass;
var viesti = req.body.viesti;
    

console.log("Lähetit lomakkeen! Email: " + email + " Password: " + pass, " Viesti: " + viesti);
/* res.send("Lähetit lomakkeen! Email: " + email + " Password: " + pass, " Viesti: " + viesti); */

var data1 = ("Email: " + email + " Password: " + pass, "Viesti: " + viesti)
console.log(data1);

// Kirjoitetaan lopuksi tiedosto levylle JSON-muodossa, eli sellaisenaan

var data2 = JSON.stringify(data1, "", 1); // Parametreilla "" ja 1 saadaan kaunis tulostus



fs.writeFileSync("data.json", data2);

res.write(data2);
res.write("Viesti tallennettu JSONille.");


});



app.post("/kirjaudu2", function(req, res) {

    console.log(req.body);
    var email = req.body.email;
    var pass = req.body.pass;
    var viesti = req.body.viesti;

    app.use(bodyParser.json());
    var data3 = ("Email: " + email + " Password: " + pass, "Viesti: " + viesti)

    var data4 = JSON.stringify(data3, "", 1); // Parametreilla "" ja 1 saadaan kaunis tulostus
    
    console.log(data4);

    fs.writeFileSync("data.json", data4);

    res.write(data4);
    res.write("Viesti tallennettu Ajaxille.");

    res.send("Lähetit lomakkeen! Email: " + email + " Password: " + pass, " Viesti: " + viesti);
});
    

     
console.log('Palvelin kuuntelee portissa ' +port)

response.end(); //HTTP vastaus päättyy



})




.listen(port); // palvelin kuuntelee joko pilvipalvelun porttia tai paikallista porttia nro 3000
