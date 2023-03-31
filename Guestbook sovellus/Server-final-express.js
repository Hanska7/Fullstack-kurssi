var express = require('express');
var fs = require('fs');
var app = express();
const portti = process.env.PORT || 8080;
var bodyParser = require("body-parser");

var data = fs.readFileSync('./data.json', 'utf8');
var lista = JSON.parse(data);






app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



// Luodaan reitit ja niiden toiminnallisuudet
app.get("/", function(req, res) {

/* res.send("Olet saapunut palvelimen kauniille etusivulle."); */    
    
var etusivu = fs.readFileSync('./index.html');
res.send(etusivu.toString());




});


app.get("/Listasivu", function(req, res) {


/* res.send(listasivu.toString()); */
/* res.send("Olet saapunut informatiiviselle tietosivulle. \n"); */
 
/* var listasivu = fs.readFileSync('./Listasivu.html'); */
    

var file = require('./data.json'); 
/* var file = fs.writeFileSync('data.json') */

console.log("Luettu tiedostosta:");
/* console.log(file.toString()); */

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


}
console.log(results)
res.send(results)




});


app.get("/Kysyjäsivu.html", function(req, res) {
    
/* res.send("Olet saapunut palvelimen uteliaalle kysyjäsivulle."); */


var kysyjäsivu = fs.readFileSync('./Kysyjäsivu');
res.send(kysyjäsivu.toString());





});



app.get("/Ajaxsivu.html", function(req, res) {
    
/* res.send("Olet saapunut palvelimen monimutkaiselle Ajaxsivulle."); */



var ajaxsivu = fs.readFileSync('./Ajaxsivu');
res.send(ajaxsivu.toString());




});



// Oletusreitti joka tarjoillaan, mikäli muihin ei päädytty.
app.get("*", function(req, res) {
  res.send("Käytä toimivaa URL", 404);
});




app.post('/newmessage', function(req, res) {
    var postaus = fs.readFileSync('data.json', 'utf8');
    
    var postaus = JSON.parse(postaus);
        postaus_json.push(req.body);

    var postaus_str = JSON.stringify(postaus_json);

    fs.writeFileSync('data.json', postaus_str);
    console.log("Kirjoitettu tiedostoon");

    res.send(postaus_str)
    res.redirect('/Listasivu')

});





app.post('/ajaxmessage', function(req, res) {
    var postaus2 = fs.readFileSync('data.json', 'utf8');
    
    var postaus2_json = JSON.parse(postaus2);
        postaus2_json.push(req.body);

    var postaus2_str = JSON.stringify(postaus2_json);

    fs.writeFileSync('data.json', postaus2_str);
    console.log("Kirjoitettu Ajax");

    /* Muotoile */


    res.send(postaus2_str);
    res.redirect('/Listasivu')





// Web-palvelimen luonti Expressin avulla
app.listen(portti, function() {
  console.log("Example app listening on port "+portti);
});



});

app.listen(8080);
