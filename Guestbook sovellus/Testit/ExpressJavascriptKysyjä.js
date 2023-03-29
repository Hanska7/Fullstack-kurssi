var express = require("express");
var bodyParser = require("body-parser");
var fs = require("fs");
var app = express();
var portti = 8082
var varasto = []


const kenttä = document.getElementsByTagName('div')
kenttä.setAttribute('id', 'kyssäri')

        const otsikko1 = document.createElement('h1')
        otsikko1.innerText = 'Tervetuloa vieraskirjaan'

        const otsikko2 = document.createElement('h2')
        otsikko2.innerText = 'Kirjoita tähän kohtaan nimesi'

        const nimittäjä = document.createElement('input')
        nimittäjä.setAttribute('id', 'nimittäjät')
        kenttä.appendChild('nimittäjä')


        const otsikko3 = document.createElement('h2')
        otsikko2.innerText = 'Kirjoita tähän kohtaan kotimaasi'

        const maa = document.createElement('input')
        maa.setAttribute('id', 'maat')
        kenttä.appendChild('maat')


        const otsikko4 = document.createElement('h2')
        otsikko2.innerText = 'Kirjoita tähän kohtaan terveisiä muille'

        const viesti = document.createElement('input')
        viesti.setAttribute('id', 'viestit')
        kenttä.appendChild('viestit')

        const otsikko5 = document.createElement('h3')
        otsikko2.innerText = 'Paina tästä kun olet valmis'

        const lähetä = createElement('button')
        lähetä.setAttribute('id', 'lähetät')
        kenttä.appendChild('lähetät')

        nappi = getElementbyID('lähetät')
        document.getElementById('lähetät').addEventListener('click', tallentajaolio());



        function lähettäjä() {

          for (let i = 0; i < 3; i++) {
      
          kohde = document.getElementById('input'[i].innerText)
          varasto[i]= kohde
          //varasto += '\n'
          console.log(varasto)
      
      }
      }


        function tallentajaolio() {
            
            lähettäjä()

            

            if (len(varasto[0] == 0)) {
                document.write('Nimi oli tyhjä')
                return false
            }
            
            else if (len(varasto[1] == 0)) {
                document.write('Osoite oli tyhjä')
                return false
            }

            else if (len(varasto[2] == 0)) {
                document.write('Viesti oli tyhjä')
                return false
            }

            else {

            var uusi = {
                nimi: varasto[0],
                maa: varasto[1],
                viesti: varasto[2]
            }
        };

        
        
        
        
        
        

        json.push(uusi);
        
        /* console.log(json); */
        /* console.log(json[0].nimi); */
 
        response.write(JSON.stringify(json));

        filesystem.writeFileSync("./data.json", uusi);
        }

        tallentajaolio()
    

    


  


function lähettäjä() {
  
  for (let i = 0; i < 3; i++) {

  kohde = document.getElementById('input'[i].innerText)
  varasto[i]= kohde
    //varasto += '\n'
  console.log(varasto)

}
}


