//Obtengo referencia con su identificador unico gracias a el id (en este caso)
const tagBody = document.getElementById("body");
const btnCambiarColor = document.getElementById("btn-cambiar-color");
const btnCambiarLongitudes = document.getElementById("btn-cambiar-longitudes");


const accion = function (event) {
    tagBody.classList.add("cambio-del-fondo")

}

const accion2 = function (evet) {
    tagBody.classList.add("cambio-de-longitudes")
}

btnCambiarColor.addEventListener("click", accion);
btnCambiarLongitudes.addEventListener("click", accion2)

const tagformulario = document.getElementById("formulario");

const accion3 = function (event) {

    event.preventDefault()

    console.log(event.target.Nombre.value)
    console.log(event.target.Apellido.value)
    console.log(event.target.opcion.value)
}

tagformulario.addEventListener("submit", accion3)