/* JQuery */

const traslacion = () => {
  $("#num3").mouseover(() => {
    //$("#num3").click(() => {
    $("#num1").toggleClass("traslado1");
    $("#num2").toggleClass("traslado2");
    $("#num3").toggleClass("ocultar");
  });
};
traslacion();

/*------------------------------------------*/

/* JavaScript */
/*
let divnum1 = document.querySelector("#num1");
let divnum2 = document.querySelector("#num2");
let divnum3 = document.querySelector("#num3");

const traslacion = () => {
  //divnum3.addEventListener("mouseover", () => {
  divnum3.addEventListener("click", () => {
    divnum1.classList.toggle("traslado1");
    divnum2.classList.toggle("traslado2");
    divnum3.classList.toggle("ocultar");
  });
};
traslacion();
*/

/* metodo con css

 $("#num3").click(() => {
    $("#num1").css({
      transform: "translateY(104px)",
      "transition-property": "transform",
      "transition-duration": "1s",
      "transition-delay": "2s",
    });
  }); 
*/

/*---------------------*/

/* let divnum1 = $("#num1"); //Jquery
let divnum2 = $("#num2");
let divnum3 = $("#num3");
*/
/*
let divnum1 = document.querySelector("#num1"); //javaScript
let divnum2 = document.querySelector("#num2");
let divnum3 = document.querySelector("#num3");
*/
