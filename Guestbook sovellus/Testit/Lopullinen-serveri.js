var http = require('http');
var filesystem = require('fs');

var port = 8083

/* var express = require('express');
var fs = require('fs');

var app = express(); */




http.createServer(function (request, response) {

    //1
    if (request.url === "/") {

        response.writeHead(200, { "Content-Type": "text/html" });
        var html = filesystem.readFileSync('./ExpressHTMLEtusivu.html');
        response.write("Olet saapunut palvelimen kauniille etusivulle.");
        response.write(html)

    }

   //2
    else if (request.url === "/guestbook") {

        response.writeHead(200, { "Content-Type": "text/html" });
        var html2 = filesystem.readFileSync('./ExpressHTMLEtusivu.html');
        response.write("Olet saapunut palvelimen tietosivulle.");
        
    
        var json = require('./data.json')

        

        for (var i = 0; i < json.length; i++) {
                
                results = ''
                
                results +=

                "<tr>" +
                "<td>" +
                json[i].nimi +
                "</td>" +
                "<td>" +
                json[i].maa +
                "</td>" +
                "<td>" +
                json[i].viesti +
                "</td>" +
                "</tr>";

            }

            console.log('Listaaja ajettu')
            console.log(results)
            response.write(JSON.stringify(json));
            response.write(html2)

    }

    //3
    else if (request.url === "/newmessage") {


        response.writeHead(200, { "Content-Type": "text/html" });
        var html3 = filesystem.readFileSync('./ExpressHTMLKysyjä.html');
        response.write("Olet saapunut palvelimen tietosivulle.");
        response.write(html3)

    }

        

    //4



    else if (request.url === "/ajaxmessage") {

        response.writeHead(200, { "Content-Type": "text/json" });
        var html4 = filesystem.readFileSync('./Ajaxsivu.html');
        response.write(html4)


    }

//???


//5

else {

    request.url === '*'
    response.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    response.write("Valitse joku neljästä toimivasta URL \n '/' \n '/guestbook' \n '/newmessage' \n '/ajaxmessage");
    }
    
    response.end(); //HTTP vastaus päättyy





console.log('Palvelin auki portissa '+port)

.listen(port)

})