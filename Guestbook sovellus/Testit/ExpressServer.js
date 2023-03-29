var express = require('express');
const { get } = require('express/lib/response');
var fs = require('fs');

var app = express();
var portti = 8084




//Serving a static file instead of a written message
app.get('/', function (req, res) {
   res.sendFile(__dirname + './ExpressHTMLEtusivu.html');
});









// Or we can parse out the details

app.get('/ExpressHTMLLista.html', function (req, res) {
    var data = require("./data.json");


    // Parse the results into a variable
    var results ='<table border="1"> ';

for (var i=0; i < data.length; i++){
   results +=
   '<tr>'+
   '<td>'+data[i].nimi+'</td>'+
   '<td>'+data[i].osoite+'</td>'+
   '<td>'+data[i].viesti+'</td>'+
   '</tr>';
}

    res.send(results);
});




// Add data
app.get('/ExpressHTMLKysyjä.html', function (req, res) {


}



app.listen(portti, function () {
  console.log('Example app listening on port '+portti);
});
