async function loadJSON() {
  const response = await fetch("data.json"); //nå venter vi på at fetch() henter data fra data.json
  const data = await response.json(); //nå venter vi på at data.json blir konvertert til et JavaScript-objekt

  const tabellKropp = document.getElementById("tabellKropp");// Henter tabellkroppen der vi skal legge til rader
  
  // Tømmer tabellen før ny utskrift
  tabellKropp.innerHTML = "";

  // Går gjennom hver bok og oppretter en tabellrad
  data.produkt.forEach(produkt => { // For hver bok i data.bøker, gjør følgende:
    tabellKropp.innerHTML += `   
      <tr>
        <td>${produkt.namn}</td>
        <td>${produkt.pris}</td>
      </tr>
    `;
  });
}

loadJSON();

async function loadJSONmath() {
  const response = await fetch("data.json");
  const data = await response.json();

  const dyresteProdukt = data.produkt.reduce((dyreste, produkt) =>
    produkt.pris > dyreste.pris ? produkt : dyreste
  );

  document.getElementById("dyresteProdukt").textContent =
    `${dyresteProdukt.namn} koster ${dyresteProdukt.pris} kr`;
}

loadJSONmath();

fetch("data.json")
  .then(response => response.json())
  .then(data => {

    let tekst = "";

    for (let produkt of data.produkt) {

      if (produkt.pris >= 10) {

        tekst += `
          <tr>
            <td>${produkt.namn}</td>
            <td>${produkt.pris}</td>
          </tr>
        `;

      }

    }

    document.getElementById("tabellKroppover10").innerHTML = tekst;

  });