let text = '{"event": "Conference", "date": "2026-09-07T11:28:00.000Z"}';
let text2 = '{"event": "Conference", "date": "2026-09-07"}';
let text3 = '{"event": "Conference", "date": "2026-09-07"}';


const myObject = JSON.parse(text, (key, value) => {
  // Convert the date to a Date object
  if (key === "date") {
    return new Date(value);
  }
  // Return the other keys/values unchanged
  return value;
});

const myObject2 = JSON.parse(text2, (key, value) => {
  // Convert the date to a Date object
  if (key === "date") {
    return new Date(value);
  }
  // Return the other keys/values unchanged
  return value;
});

const myObject3 = JSON.parse(text3, (key, value) => {
  // Convert the date to a Date object
  if (key === "date") {
    return new Date(value);
  }
  // Return the other keys/values unchanged
  return value;
});

document.getElementById("demo").innerHTML = typeof myObject.date + " " + myObject.date.toLocaleString();

document.getElementById("Dato").innerHTML = typeof myObject2.date + " " + myObject2.date.toLocaleDateString();

document.getElementById("DatoOgEvent").innerHTML = myObject3.event + ": " + myObject3.date.toLocaleDateString();