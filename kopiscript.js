let dato = new Date();

document.getElementById("Dato").textContent = dato.toJSON();
document.getElementById("DatoUtenKlokkeslett").textContent =
  dato.toLocaleDateString();