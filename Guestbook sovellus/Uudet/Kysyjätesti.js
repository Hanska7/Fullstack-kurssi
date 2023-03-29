var http = require("http");
var fs = require("fs");
var json = require("./data.json");

console.log("Taulukon koko: " + json.length);



var newitem = {
  age: 65,
  eyeColor: "Brown",
  gender: "Male",
  email: "James@mi6.com",
  name: "James Bond",
};

// Lisätään olio taulukon loppuun push()-funktiolla
json.push(newitem);

// Lisätään olio taulukon alkuun unshift()-funktiolla
json.unshift(newitem);

// Tulostetaan taulukon koko
console.log("Taulukon koko: " + json.length);


// Kirjoitetaan lopuksi tiedosto levylle JSON-muodossa, eli sellaisenaan
var data = JSON.stringify(json, "", 1); // Parametreilla "" ja 1 saadaan kaunis tulostus

// Kirjoitetaan lopuksi tiedosto levylle JSON-muodossa, eli sellaisenaan
fs.writeFileSync("./data.json", data);
