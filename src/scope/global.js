// Variables

var a; // Declarar
a = 1; // Asignar

var b = 'b'; // Declarar y asignar
b = 'bb'; // Reasignar

var a = 'aa'; // Redeclaración


// Global Scope

var fruit = 'Apple'; // Global

function bestFruit(){
    console.log(fruit);
}

bestFruit();

//////

function countries(){
    country = 'Colombia'; // Global
    console.log(country);
}

countries();
console.log(country);
