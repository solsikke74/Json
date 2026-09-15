async function loadJSON() {
  const response = await fetch("data.json"); //nå venter vi på at fetch() henter data fra data.json
  const data = await response.json(); //nå venter vi på at data.json blir konvertert til et JavaScript-objekt

  const tabellKropp = document.getElementById("tabellKropp");// Henter tabellkroppen der vi skal legge til rader
  
  // Tømmer tabellen før ny utskrift
  tabellKropp.innerHTML = "";

  // Går gjennom hver bok og oppretter en tabellrad
  data.bøker.forEach(bøker => { // For hver bok i data.bøker, gjør følgende:
    tabellKropp.innerHTML += `   
      <tr>
        <td>${bøker.tittel}</td>
        <td>${bøker.forfattar}</td>
        <td>${bøker.år}</td>
      </tr>
    `;
  });
}

loadJSON();

async function loadJSONmath() {
  const response = await fetch("data.json");
  const data = await response.json();

  const alders = data.bøker.map(bok => bok.år); 
  document.getElementById("EldsteBok").innerHTML = myArrayMax(alders);

}
loadJSONmath();