const textWithTime = '{"event": "Conference", "date": "2026-09-07T11:28:00.000Z"}';
const textDateOnly = '{"event": "Conference", "date": "2026-09-07"}';

// Gjenbrukbar parse-funksjon som konverterer datoer
const parseDate = (key, value) => (key === "date" ? new Date(value) : value);

// Parser kun de to unike strengene
const myObject = JSON.parse(textWithTime, parseDate);
const myObject2 = JSON.parse(textDateOnly, parseDate);

// Utskrift til HTML
document.getElementById("demo").innerHTML = `${typeof myObject.date} ${myObject.date.toLocaleString()}`;
document.getElementById("Dato").innerHTML = `${typeof myObject2.date} ${myObject2.date.toLocaleDateString()}`;
document.getElementById("DatoOgEvent").innerHTML = `${myObject2.event}: ${myObject2.date.toLocaleDateString()}`;