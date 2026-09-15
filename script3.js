async function loadJSON() {
  const response = await fetch("data.json"); //nå venter vi på at fetch() henter data fra data.json
  const data = await response.json(); //nå venter vi på at data.json blir konvertert til et JavaScript-objekt

  const tabellKropp = document.getElementById("tabellKropp");// Henter tabellkroppen der vi skal legge til rader
  
  // Tømmer tabellen før ny utskrift
  tabellKropp.innerHTML = "";

  // Går gjennom hver elev og oppretter en tabellrad
  data.elevar.forEach(elev => { // For hver elev i data.elevar, gjør følgende:
    tabellKropp.innerHTML += `   
      <tr>
        <td>${elev.namn}</td>
        <td>${elev.alder}</td>
        <td>${elev.klasse}</td>
      </tr>
    `;
  });
}

loadJSON();

async function loadJSONmath() {
  const response = await fetch("data.json");
  const data = await response.json();

  const alders = data.elevar.map(elev => elev.alder);
  document.getElementById("EldsteElev").innerHTML = myArrayMax(alders);
  document.getElementById("AntallElever").innerHTML = data.elevar.length;

  function myArrayMax(arr) {
  return Math.max.apply(null, arr);
    }
}
loadJSONmath();