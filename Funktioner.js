console.log ("FUNKTIONER")
console.log ("Opgave 5.1");

function myFunction() {
    console.log("Hello World")
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

let inputTekst = prompt("Ja eller nej Kaj?"); // Brug prompt til at få brugerens input
let resultat = isJa(inputTekst);

if (resultat) {
    console.log("True");
} else {
    console.log("false");
}


