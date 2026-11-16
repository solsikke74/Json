async function sokForfatter() {

    const response = await fetch("data.json");
    const data = await response.json();

    const valgtForfatter =
        document.getElementById("forfatter").value;

    let tekst = "";

    for (let bok of data.boker) {

        if (
            bok.forfattar.toLowerCase().includes(
                valgtForfatter.toLowerCase()
            )
        ) {

            tekst += `
                <p>
                    <strong>${bok.tittel}</strong>
                    (${bok.år})<br>
                    ${bok.forfattar}
                </p>
            `;
        }
    }

    if (tekst === "") {
        tekst = "<p>Ingen bøker funnet.</p>";
    }

    document.getElementById("resultat").innerHTML = tekst;
}