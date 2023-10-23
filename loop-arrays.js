console.log("Opgave 6.1"); 

const talRække4 = [0, 12, 0, 22, 300, 4, 5] //definerer talrække

sum = 0;

for(let i  = 0; i < talRække4.length; i++) { 
    sum += talRække4[i];
}

console.log("Summen er: " + sum);

console.log ("Opgave 6.2"); //grundlæggende måde at vise tal i et array på

const talRække5 = [0, 12, 0, 22, 300, 4, 5];

talRække5.forEach(function(element) {
    console.log(element);
});

console.log ("Opgave 6.3");

const talrække1 = [0, 12, 0, 22, 300, 4, 5, 12, 12, 212, 12];
const talrække2 = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 122];

function findHigestIndex(arr1, arr2) {
    let max1 = arr1[0];
    let max2 = arr2[0];
    let index1 = 0;
    let index2 = 0;
  
    for (let i = 1; i < arr1.length; i++) {
      if (arr1[i] > max1) {
        max1 = arr1[i];
        index1 = i;
      }
    }
  
    for (let i = 1; i < arr2.length; i++) {
      if (arr2[i] > max2) {
        max2 = arr2[i];
        index2 = i;
      }
    }
  
    return { index1, index2 };
  }
  
  
  const result = findHigestIndex(talrække1, talrække2);
  
  console.log("Indeks for det højeste tal i talrække1:", result.index1);
  console.log("Indeks for det højeste tal i talrække2:", result.index2);
  


console.log ("Opgave 6.4");

let talrække8 = [0, 12, 0, 22, 300, 4, 5, 12, 12, 212, 12]

antalAf12 = 0;

for( i = 0; i < talrække8.length; i++){
    if(talrække8 [i] === 12) {
        antalAf12++;
    }
}

console.log("Antallet af 12 i talrække8 12 er " + antalAf12);


console.log ("Opgave 6.6");

const talrække = [0, 12, 0, 22, 300, 4, 5, 1000, -50, 32];
let mus = 0;

// Beregn summen af alle elementerne i arrayet
for (let i = 0; i < talrække.length; i++) {
  mus += talrække[i];
}

// Beregn gennemsnittet
const gennemsnit = mus / talrække.length;

console.log("Gennemsnit:", gennemsnit);
