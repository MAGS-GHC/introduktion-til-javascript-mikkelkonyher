//Skriv alt jeres kode her

console.log(
  "Opgave 1.1 - Lav et program, som skriver “Hello World” i konsollen"
);
//Lav jeres svar her
console.log("hello world");
console.log("Opgave 1.2 - Lav et program, som skriver “Hello” og på næste linje skriver “World” i konsollen");
console.log("hello  \n world");
console.log ("Opgave 1.3");
console.log("*\n **\n ***\n **\n*");
console.log("opgave 1.4 ");
const catNumber = 2
console.log( typeof catNumber);
console.log("Opgave 1.5");
console.log(10-5);
console.log(25/3);
console.log(25%3);
console.log(25%2);
console.log(3**2);
console.log("Opgave 1.6");
let tekst1 = ("hello ");
let tekst2 = ("World!");
console.log(tekst1+tekst2);
console.log("opgave 1.7");
const hold = "GF2 Online";
console.log(hold.length);
console.log("Opgave 1.8");
let x = Math.floor(Math.random()*100+1)
console.log(x);
console.log ("Opgave 1.9");
let number = 23;
console.log(number)
console.log (number = "23")
console.log(number == "23")
console.log(number === "23")
console.log ("strict value");
console.log(number -= "23")
console.log(number += "23")
console.log(number += "23")
console.log(number -= "46")
console.log(number != 23)
console.log(number **= 2)
console.log("opgave 2.1");
let tal = 200;
if(tal % 2==0){
   
console.log(" det her tal er lig")  //The number is even
}
else {
  
console.log ("Det her tal er ulig")  //The number is odd
}
console.log(" Opgave 2.2");
let tal2 = 27;

if(tal2 % 5==0){
   
  console.log(" går op i")  //The number is even
  }
  else {
    
  console.log ("går ikke op i")  //The number is odd
  } 
  console.log("Opgave 2.3");

let randomTal = Math.floor(Math.random()*100+1)
console.log(randomTal);
if(randomTal % 5==0){console.log(" går op i")  //The number is even
  }else {console.log ("går ikke op i")  //The number is odd
  }
console.log("Opgave 2.4");

let a = 25;
let b = 33;
let c = 12;

if(a > b && a  > c){
  console.log("a er størst");
} else if (b > a && b > c){
  console.log("b er størst");
} else {console.log("c er størst");
}   


console.log ("Opgave 2.5");

let temp = 41;
if(temp <=0){
  console.log("Det er frostvejr");
} else if (temp >= 1 && temp <= 10){
  console.log("Det er meget koldt");
}  else if (temp >= 11 && temp <= 20){
  console.log("Det er meget koldt");
} else if (temp >= 21 && temp <= 30){
  console.log("Det er normalt vejr");
} else if (temp >= 31 && temp <= 40){
  console.log("Det er varmt");
} else if (temp >=40){
  console.log("Det er meget varmt");
}

console.log ("Opgave 2.6")

let dag = 6;

if (dag==1){
  console.log ("Mandag");
}else if (dag==2){
  console.log ("Tirsdag");
}else if (dag==3){
  console.log ("Onsdag");
}else if (dag==4){
  console.log ("torsdag");
}else if (dag==5){
  console.log ("freadag");
}else if (dag==6){
  console.log ("lørdag");
}else if (dag==7){
  console.log ("søndag");
} else {
   console.log ("Dagen er ikke en ugedag"); 
}

console.log(" Opgave 3.1");
// 3.1 lav et program der skriver alle 1-100 en efter en

for (let i = 1; i <= 100; i++) {
  console.log(i);
}


console.log ("Opgave 3.2");
//Opgave 3.2 Lav et program som skrive alle tal fra 1 til 100, på følgende måde
// O12
// 345 osv.

let line = '';

for (let i = 1; i <= 100; i++) {
  line += i + ' ';

 
  if (i % 3 === 0) {
    console.log(line);
    line = '';
  }
}

console.log ("Opgave 3.3");
// Opgave 3.3 lav spillet fizzbuzz

// for-loop

for (let i = 1; i <= 100; i++) {
  let output = "";

  if (i % 3 === 0) {
    output += "Fizz";
  }

  if (i % 5 === 0) {
    output += "Buzz";
  }

  console.log(output || i);
}

console

let i = 1;
while (i <= 100) {
  let output = "";

  if (i % 3 === 0) {
    output += "Fizz";
  }

  if (i % 5 === 0) {
    output += "Buzz";
  }

  console.log(output || i);
  i++;
}

console.log ("opgave 3.4");

console.log ("Opgave 3.5");






console.log ( "ARRAYS");

console.log ("Opgave 4.1");

let byer = ["Randers", "Viborg", "Århus", "København"];
console.log(byer[1]);


console.log ("Opgave 4.2");

let byer2 =  ["Randers", "Viborg", "Århus", "København"];
byer2.push("Skive");
console.log(byer2);

console.log("opgave 4.3");

let talRække = [0, 1, 0, 3, 4, 5, 6]