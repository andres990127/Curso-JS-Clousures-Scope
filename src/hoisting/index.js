// Variables
console.log(nameOfDog); // Undefined
var nameOfDog = 'Elmo';

console.log(nameOfCat); // Error
let nameOfCat = 'Lulu';

console.log(nameOfBird); // Error
const nameOfBird = 'Pepe';

// Funciones
getDogsName(); // Las funciones declarativas se pueden llamar antes de ser declaradas

function getDogsName(){ 
    console.log('Elmo');
}

