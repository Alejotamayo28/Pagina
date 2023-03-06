alert("Click en el boton");

const boton = document.querySelector("#btn");
boton.addEventListener("click", () => {
  $(document).ready(() => {
    $("#btn").click(() => {
      console.log("Hola, estoy usando jQuery");
    });
  });
});
