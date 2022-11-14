var firstName; // Undefined
firstName = 'Andrés';
console.log(firstName);

var lastName = 'Mauricio'; // Declarar y asignar
lastName = 'Gutierrez'; // Reasignar
console.log(lastName); 

var secondName = 'David'; // Declarar y asignar
var secondName = 'Ana'; // Redeclarar y Reasignar
console.log(secondName);

// Error
let fruit = 'Apple'; // Declarar y asignar
//let fruit = 'Pear'; // Redeclarar y Reasignar
console.log(fruit);

// Error
const car = 'Toyota'; // Declarar y asignar
//const car = 'Tesla'; // Redeclarar y Reasignar
console.log(secondNcarme);

// Los arrays en const se les puede modificar su contenido
const vehicles = [];
vehicles.push('Car');
console.log(vehicles);
vehicles.pop();
console.log(vehicles);