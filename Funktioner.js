console.log ("FUNKTIONER")
console.log ("Opgave 5.1");

function myFunction() {
    console.log("Hello Universe")
   }

console.log ("Opgave 5.2");

function addnumber (a, b) {
    return a + b;
}

let sum1 = addnumber (7,8);

let sum2 = addnumber (14,6);

console.log(sum1);

console.log(sum2);

console.log ("Opgave 5.3")

function isJa (inputTekst){
    return inputTekst ==="Ja";
    }
    
    
    let inputTekst = prompt("Ja eller nej Kaj?"); //prombt er til brugeres input
    let resultat = isJa(inputTekst);
    
    
    if (resultat) {
    console.log(true);
    } else {
    console.log(false);
    }
    
console.log ("Opgave 5.4");


function passwordChecker (inputPassword) {
    const correctPassWord = "GF2 Online";
    if(inputPassword === correctPassWord) {
        return true;
    } else {
        console.log(false);
        }

    } 
    
    const indtastKode = prompt ("Hint - Det er vores Holdnavn")
    const resultat2 = passwordChecker (indtastKode);

    if (resultat) {
        console.log (true);
    } else {
        console.log (false);
    }

console.log ("Opgave 5.5");

function erBrugerNavnKorrekt (inputBrugernavn, gemtBrugernavn){
    return inputBrugernavn.toLowerCase() === gemtBrugernavn.toLowerCase();
}

const gemtBrugernavn = "Mikkelkonyher";
const inputBrugernavn = prompt("Login med brugernavn: ");

if (erBrugerNavnKorrekt (inputBrugernavn, gemtBrugernavn)) {
    console.log(true);
}else {
    console.log(false);
}



