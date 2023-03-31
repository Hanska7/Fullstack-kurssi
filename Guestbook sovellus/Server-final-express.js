var express = require('express');
var fs = require('fs');
var app = express();
const portti = process.env.PORT || 8080;
var bodyParser = require("body-parser");


app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



// Luodaan reitit ja niiden toiminnallisuudet
app.get("/", function(req, res) {

    
    var etusivu = fs.readFileSync('./index.html');
    res.send(etusivu.toString());


/*     res.send("Olet saapunut palvelimen kauniille etusivulle."); */

});


app.get("/guestbook", function(req, res) {
    
    
    var listasivu = fs.readFileSync('./Listasivu.html');
    res.send(listasivu.toString());


    /* res.send("Olet saapunut informatiiviselle tietosivulle. \n"); */



});



app.get("/newmessage", function(req, res) {
    
    

    var kysyjäsivu = fs.readFileSync('./Kysyjäsivu.html');
    res.send(kysyjäsivu.toString());


/*     res.send("Olet saapunut palvelimen uteliaalle kysyjäsivulle."); */

});



app.get("/ajaxmessage", function(req, res) {
    

    var ajaxsivu = fs.readFileSync('./Ajaxsivu.html');
    res.send(ajaxsivu.toString());


   /*  res.send("Olet saapunut palvelimen monimutkaiselle Ajaxsivulle."); */

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

    fs.writeFileSync('guestbook.json', postaus_str);
    console.log("Kirjoitettu tiedostoon");

    res.send(postaus_str)
    res.redirect('/guestbook')

});


app.post('/ajaxmessage', function(req, res) {
    var postaus2 = fs.readFileSync('data.json', 'utf8');
    
    var postaus2_json = JSON.parse(postaus2);
        postaus2_json.push(req.body);

    var postaus2_str = JSON.stringify(postaus2_json);

    fs.writeFileSync('guestbook.json', postaus2_str);
    console.log("Kirjoitettu Ajax");

    /* Muotoile */


    res.send(postaus2_str);
    res.redirect('/ajaxmessage')



    

// Web-palvelimen luonti Expressin avulla
app.listen(portti, function() {
  console.log("Example app listening on port "+portti);
});



});

app.listen(8080);
