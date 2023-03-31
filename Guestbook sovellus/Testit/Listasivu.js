/* 
var fs = require("fs");
var filu = fs.readFileSync("data.json");

console.log("Luettu tiedostosta:");
console.log(filu.toString());

var results = ''


for (var i = 0; i < 10; i++) {
            
results +=

"<tr>" +
"<td>" +
filu[i].nimi +
"</td>" +
"<td>" +
filu[i].maa +
"</td>" +
"<td>" +
filu[i].viesti +
"</td>" +
"</tr>";


}

response.write(results) */