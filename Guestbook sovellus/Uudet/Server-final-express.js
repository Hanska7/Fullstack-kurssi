
var express = require("express");

var bodyParser = require("body-parser");

var fs = require('fs');
const { response } = require("express");

var app = express();
var portti = 8080




// Tarjoillaan staattisia sivuja tästä hakemistosta
app.use(express.static("./"));

// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: true }));

// Luodaan reitit ja niiden toiminnallisuudet
/* app.get("/", function(req, res) {
  res.send("Hello World!");
}); */



app.get("/", function(req, res) {
    var html = fs.readFileSync('./Etusivu.html');
    response.write("Olet saapunut palvelimen kauniille etusivulle.");
    response.write(html)
});



app.get("/Listasivu", (req, res) => {
    
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write("Olet saapunut palvelimen tietosivulle.");

});




app.get('/Ajaxsivu.html', (req, res) => {

res.render('Ajaxsivu.html');

});



// Oletusreitti joka tarjoillaan, mikäli muihin ei päädytty.
app.get("*", function(req, res) {
  res.send("Tee parempia valintoja", 404);
});




// Web-palvelimen luonti Expressin avulla
app.listen(portti, function() {
  console.log("Serveri kuuntelee portissa "+portti);
});