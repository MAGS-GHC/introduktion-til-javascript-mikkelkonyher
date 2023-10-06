console.log("Opgave 6.1");

const talRække4 = [0, 12, 0, 22, 300, 4, 5]

sum = 0;

for(let i  = 0; i < talRække4.length; i++) {
    sum += talRække4[i];
}

console.log("Summen er: " + sum);

console.log ("Opgave 6.2");

const talRække5 = [0, 12, 0, 22, 300, 4, 5];

talRække5.forEach(function(element) {
    console.log(element);
});