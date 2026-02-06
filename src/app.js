import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  const palosTop = ["♦", "♥", "♠", "♣"];



  function randomCards(arr) {
    let randObject = arr[Math.floor(Math.random() * arr.length)]
    let card = document.getElementById("cardValue")
    let palotop = document.getElementById("palo-top")
    let palobot = document.getElementById("palo-btmm")
    if (randObject.includes("♥") || randObject.includes("♦")) {
      card.style.cssText = "color: red !important"
      palotop.style.cssText = "color: red !important"
      palobot.style.cssText = "color: red !important"
    } else { document.getElementById("cardValue").classList.remove("text-danger") }


    return randObject
  }

  function setNewValue() {
    let paloT = randomCards(palosTop)
    // Cambia el palo del top izquierdo de la carta
    document.getElementById("palo-top").innerHTML = paloT
    // Cambia el palo de abajo derecha de la carta
    document.getElementById("palo-btmm").innerHTML = paloT
    //        Cambiar el valor de la carta
    document.getElementById("cardValue").innerHTML = randomCards(values)
  }
  setNewValue()

  // 1) BOTON: generar nueva carta
  let btnNewCard = document.getElementById("btnNewCard");
  if (btnNewCard) {
    btnNewCard.addEventListener("click", () => {
      setNewValue();
    });
  }

  // 2) TIMER: nueva carta cada 10 segundos
  setInterval(() => {
    setNewValue();
  }, 10000);

  // 3) INPUTS: cambiar width y height
  // si añadiste id="card" en el HTML, esto es perfecto:
  let cardBox = document.getElementById("card") || document.querySelector(".card");

  let inputW = document.getElementById("cardWidth");
  let inputH = document.getElementById("cardHeight");

  function applySize() {
    if (!cardBox) return;

    // toma valores; si estan vacíos no hace nada
    let w = inputW && inputW.value ? inputW.value : null;
    let h = inputH && inputH.value ? inputH.value : null;

    if (w) cardBox.style.maxWidth = w + "px";
    if (h) cardBox.style.height = h + "px";
  }

  if (inputW) inputW.addEventListener("input", applySize);
  if (inputH) inputH.addEventListener("input", applySize);

  // let boton = document.getElementById("boton")
  // boton.addEventListener("click", setNewValue)
}