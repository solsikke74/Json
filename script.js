
// JSON text
const Navn = '{"name":"John", "age":30, "city":"New York"}';

// Parse the JSON text
const person = JSON.parse(Navn);

document.getElementById("NavnUtskrift").textContent =
person.name + ", " + person.age + ", " + person.city;


 

 
