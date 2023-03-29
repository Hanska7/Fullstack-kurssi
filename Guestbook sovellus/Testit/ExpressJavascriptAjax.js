
var express = require("express");
var bodyParser = require("body-parser");
var fs = require("fs");
var app = express();
var portti = 8082



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

<script>
window.onload = event => {
    //   console.log("page is fully loaded");

    var nappi = document.getElementById("button1");

    // Lisätään nappiin kuuntelija, joka hakee kenttien tiedot klikattaessa
    nappi.addEventListener("click", () => {
      var email = document.getElementById("email").value;
      var pass = document.getElementById("pass").value;
      console.log(email, pass);


    // Luodaan AJAX olio joka palauttaa vastauksensa status-kenttään     
     var xmlhttp = new XMLHttpRequest();
     xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          document.getElementById("status").innerHTML = this.responseText;
          console.log(this.responseText);
        }
      };
      
    // Lähetetään AJAX pyyntö, tyyppiä POST osoitteeseen /kirjaudu
      xmlhttp.open("POST", "/kirjaudu", true);
      // Liitetään AJAX pyyntöön lomakkeen kenttien datat
      xmlhttp.setRequestHeader(
        "Content-type",
        "application/x-www-form-urlencoded"
      );
      xmlhttp.send("email=" + email + "&pass=" + pass);
    });
  };

</script>

















javascript
      xmlhttp.open("POST", "/kirjaudu", true);
      xmlhttp.setRequestHeader("Content-type", "application/json");
    
        // Kootaan kenttien tiedot data-muuttujaan
          var data = {
            email: email,
            pass: pass
          };
          // Lähetetään data-muuttuja merkkijonona palvelimelle


Mikäli data lähetetään JSON-muodossa, palvelimen Express-koodiin täytyy lisätä seraava rivi jotta sen vastaanotto onnistuu:

javascript
// Lomakkeen käsittelyä varten
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


### Lopullinen koodi

Alla vielä JavaScript koodi kokonaisuudessaan.



markup
<!-- Tästä alkaa JavaScript -koodit -->

    <script>
      // Varmistetaan että sivu on ladattu kokonaan ennenkuin lisäillään kuuntelijoita
      

### AJAX-pyynnön vastaanottaminen Nodessa

Node-palvelimella AJAX pyynnön käsittely ei juuri eroa tavanomaisesta POST-tyyppisestä HTTP-pyynnöstä. Muuttujien arvot saadaan esiin samaan tapaan kuin tavanomaisessakin pyynnössä. 

javascript
// POST-tyyppiseen sivupyyntöön reagoiva reitti
app.post("/kirjaudu", function(req, res) {
  console.log(req.body);
  var email = req.body.email;
  var pass = req.body.pass;

  res.send("Lähetit lomakkeen! Email: " + email + " Password: " + pass);
});


Palvelimen lähettämä vastaus välitetään AJAX-olion reponse-kentässä takaisin selaimelle. Selaimessa JavaScript-koodi puolestaan asettaa sen näkyviin status-nimiseen div-lohkoon.

![Kuva: Palvelimen vastaus p&#xE4;ivitet&#xE4;&#xE4;n HTML-sivun status-lohkoon.](../.gitbook/assets/image%20%2818%29.png)

Selaimista löytyvien kehittäjän työkalujen \(F12\) avulla voi olla mielenkiintoista seurata AJAX-pyynnön sielunelämää. Työkaluista tulee valita aktiiviseksi "Network" -välilehti.

![Kuva: Kehitt&#xE4;j&#xE4;n ty&#xF6;kalut Chromessa.](../.gitbook/assets/image%20%2822%29.png)

Headers-välilehden alta löytyvät sekä lähetetty data että saapuneen vastauksen sisältö.

![Kuva: AJAX-pyyn&#xF6;n mukana l&#xE4;hetetty data.](../.gitbook/assets/image%20%2836%29.png)

![Kuva: AJAX-pyynn&#xF6;n palauttama vastaus.](../.gitbook/assets/image%20%2820%29.png)

Koko HTML-sivu JavaScript-koodin kera löytyy vielä alta.

markup
<html>
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
    integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
    crossorigin="anonymous"
  />
  <style>
    div {
      margin: 10px;
    }
    form {
      border: 1px solid lightgrey;
      padding: 10px;
    }
  </style>
  <body>
    <div>
      <form method="POST" action="/kirjaudu">
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            name="email"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="pass"
            placeholder="Password"
            name="pass"
          />
        </div>

        <button type="button" id="button1" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
    <div id="status"></div>

    <script>
      // Varmistetaan että sivu on ladattu kokonaan ennenkuin lisäillään kuuntelijoita
      window.onload = event => {
        //   console.log("page is fully loaded");

        var nappi = document.getElementById("button1");

        nappi.addEventListener("click", () => {
          var email = document.getElementById("email").value;
          var pass = document.getElementById("pass").value;
          //alert(email);
          console.log(email, pass);

  // Luodaan AJAX olio joka palauttaa vastauksensa status-kenttään 
  
          var xmlhttp = new XMLHttpRequest();

          xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
              document.getElementById("status").innerHTML = this.responseText;
              console.log(this.responseText);
            }
          };
 // Lähetetään AJAX pyyntö, tyyppiä POST osoitteeseen /kirjaudu
 
          xmlhttp.open("POST", "/kirjaudu", true);
          // This is for the form data
          xmlhttp.setRequestHeader(
            "Content-type",
            "application/x-www-form-urlencoded"
          );
          xmlhttp.send("email=" + email + "&pass=" + pass);
        });
      };
    </script>
  </body>
</html>
