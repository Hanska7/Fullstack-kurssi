
// Tuodaan filesystem-moduuli ohjelmaan
var fs = require("fs");

// Luetaan tiedoston sisältö muuttujiin
var data = fs.readFileSync("data.json");
 
// Tulostetaan tiedoston sisältö ruudulle
console.log("Luettu tiedostosta:");
console.log(data.toString());

var results = ''

for (var i = 0; i < json.length; i++) {
            
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

console.log(results)
}

response.write(results)