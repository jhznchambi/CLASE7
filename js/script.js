/*const nombre = prompt("como te llamas???");
const edad = Number(prompt("cual es tu edad???"));
alert("hola " + nombre + " tienes " + edad);
console.log("hola" + nombre + "tienes " + edad);

function saludar(nombre2){
    return "hola  " + nombre2;
}
const mensaje = saludar("dann");
console.log(mensaje);
const mensaje2 = saludar(prompt("cual es tu nombre"));
console.log(mensaje2);
const titulo = document.querySelector("h1");

console.log(titulo.textContent);

console.log(titulo);

titulo.textContent = "hola clase estamos modificando desde java"

const caja = document.querySelector("#caja");
caja.innerHTML = "<h1>Hola desde JavaScript</h1>"

const cargaImagen = document.querySelector("#logo");
cargaImagen.src = "../img/shin.jpg";*/

const boton = document.querySelector("#saludar");

boton.addEventListener("click",
    function (){
        document.querySelector("h4").textContent = "hola desde un lugar oculto de javascript";
    }
)
const form = document.querySelector("form");

form.addEventListener("submit", function (evento){
    evento.preventDefault();
    const nombre = document.querySelector("#nombre").value;
    document.querySelector("#respuesta").textContent = "gracias por escribir" + nombre ;
})