var express = require('express');
var fs = require('fs');
var app = express();
const portti = process.env.PORT || 8080;
var bodyParser = require("body-parser");

var data = fs.readFileSync('./data.json', 'utf8');



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

console.log("Luettu tiedostosta: "+file);
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

var listasivu = fs.readFileSync('./Listasivu.html');


console.log(results)

res.send(listasivu + results)
/* res.send(results) */





});


app.get("/Kysyjasivu", function(req, res) {
    
/* res.send("Olet saapunut palvelimen uteliaalle kysyjäsivulle."); */


var kysyjäsivu = fs.readFileSync('./Kysyjasivu.html');
res.send(kysyjäsivu.toString());





});



app.get("/Ajaxsivu", function(req, res) {
    
/* res.send("Olet saapunut palvelimen monimutkaiselle Ajaxsivulle."); */



var ajaxsivu = fs.readFileSync('./Ajaxsivu.html');
res.send(ajaxsivu.toString());




});



// Oletusreitti joka tarjoillaan, mikäli muihin ei päädytty.
app.get("*", function(req, res) {
  res.send("Käytä toimivaa URL", 404);
});




app.post('/kirjaudu1', function(req, res) {

        console.log(req.body)
        

        var data = require('./data.json')
    
        var databody = {
            nimi: req.body.email,
            maa: req.body.pass,
            viesti: req.body.viesti,
        }
    

        data.push(databody)
            
        var Str = JSON.stringify(data, "", 1)
    

        fs.writeFile('data.json', Str, (err) => {
            if (err) throw err
        })

        console.log("Lähetit: "+ Str);
        res.redirect('/Listasivu')
    

});



app.post('/kirjaudu2', function(req, res) {


console.log(req.body)


var results ='<table border="1"> ';

var nimi = req.body.email
var maa = req.body.pass
var viesti = req.body.viesti
    
    results+='<tr>'+
    '<td>' + nimi + '</td>'+
    '<td>' + maa + '</td>'+
    '<td>' + viesti + '</td>'+
    '</tr>'



/* res.send('Lähetit '+req.body) */

res.send('Tässä sinun lähettämät tietosi Ajaxilla '+results + "\n" + '"<a href="https://guestbook-qbol.onrender.com/">Etusivu</a>"');





// Web-palvelimen luonti Expressin avulla
app.listen(portti, function() {
  console.log("Example app listening on port "+portti);
});



});

app.listen(8080);
