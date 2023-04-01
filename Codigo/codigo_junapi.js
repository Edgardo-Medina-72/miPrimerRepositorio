let posicionesTabla = document.getElementsByTagName("td");
let auxiliar;
let comprobar = false;
let tableroLog;

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
+function chequearTablero(tableroLog) {
  let fullMapa = 0;
  for (let j = 15; j >= 0; j--) {
    if (tableroLog[j] == "black") {
      fullMapa++;
    }
  }
  if (fullMapa == 16) {
    let colores = ["blue", "red"];
  }
};
/* Cambios */
