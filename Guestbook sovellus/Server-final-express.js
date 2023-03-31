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



        var data = require('./data.json')
    
        var databody = {
            nimi: req.body.nimi,
            maa: req.body.maa,
            viesti: req.body.viesti,
        }
    
        data.push(databody)
    
        var Str = JSON.stringify(data, "", 1)
    
        fs.writeFile('data.json', Str, (err) => {
            if (err) throw err
        })

        res.send(Str);
        res.redirect('/Listasivu')


});





app.post('/kirjaudu2', function(req, res) {
    var postaus2 = fs.readFileSync('data.json', 'utf8');
    
    var postaus2_json = JSON.parse(postaus2);
        postaus2_json.push(req.body);

    var postaus2_str = JSON.stringify(postaus2_json);

    fs.writeFileSync('data.json', postaus2_str);
    console.log("Kirjoitettu Ajax");

    


    res.send(postaus2_str);
    res.redirect('/Listasivu')





// Web-palvelimen luonti Expressin avulla
app.listen(portti, function() {
  console.log("Example app listening on port "+portti);
});



});

app.listen(8080);
