var express = require('express');
const res = require('express/lib/response');
var app = express();
var port = 3000;
var filesystem = require('fs');



app.use(express.static('./public'));



app.get('/', function (request, response) {
    res.send('Tervetuloa juureen')

    
});

app.get('/html', function (request, response) {
    res.send('Tervetuloa visuaalisuuteen')

    
});

app.post('/login', function (request, response) {

    res.send('Tervetuloa kirjautumaan sähköpostilla')
    console.log/(req.body);

    var nimi = req.body.email;
    var salasana = req.body.pass;


    if (nimi in req.body.email && salasana in req.body.pass) {
        
        res.redirect('/kayttaja')}





    res.send('Käyttäjä ei löydy')

    
    
    
    


});


app.get('/kayttaja', function (req, res)

{
    
    res.send('Olet sisällä')

});


app.get('/json', function (request, response) {
    res.send('Tervetuloa dataan \n')
    var data = require(__dirname+'/data.json');
    var tulos = '<table border=1>';
    
    
    for (var i = 0; i<data.length; i++) {

        tulos +=
        '<tr>' +
        '<td>' + data[i].name + '</td>'
        '<td>' + data[i].age + '</td>'
        '<td>' + data[i].email + '</td>'
        '</tr>';

    }

    res.send(tulos)
    console.log(tulos)


});


app.get('*', function (request, response) {
// Käytä viimeisenä ja alimpana routena


    res.send('Tämä on default sivu')


});

app.listen(port, function() {
    
    console.log('Portti on: '+port)
    
});