let cantidad1 = 0;

document.getElementById("boton-sumar1").addEventListener("click", () => {
  cantidad1 = cantidad1 + 1;
  document.getElementById("cantidad1").textContent = "Cantidad: " + cantidad1;
});

document.getElementById("boton-comprar1").addEventListener("click", () => {
  document.getElementById("mensaje1").textContent =
    "Compraste " + cantidad1 + " macetitaaaaas!";
});
let cantidad2 = 0;

document.getElementById("boton-sumar2").addEventListener("click", () => {
  cantidad2 = cantidad2 + 1;
  document.getElementById("cantidad2").textContent = "Cantidadd: " + cantidad2;
});

document.getElementById("boton-comprar2").addEventListener("click", () => {
  document.getElementById("mensaje2").textContent =
    "Compraste " + cantidad2 + " macetitaaaaas!";
});
