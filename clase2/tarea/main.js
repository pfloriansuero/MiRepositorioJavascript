//Obtengo referencia con su identificador unico gracias a el id (en este caso)
const Body = document.getElementById("body")
const Formulario = document.getElementById("formulario")
const Console = document.getElementById("console")

//Creamos las acciones para trabajar con los botones que modifican las propiedades de el formulario
const accion = function(event){
    event.preventDefault();

    let tamanio = event.target.Letra.value;
    let altura = event.target.Altura.value;
    let Ancho = event.target.Ancho.value;
    let colorFondo = event.target.Color.value;

    
    Body.style.fontSize = tamanio + "px";
    Body.style.height = altura + "px";
    Body.style. width = Ancho + "px";
    Body.style.backgroundColor = colorFondo;
}


//Agregamos accion al evento
Formulario.addEventListener("submit",accion);

//Creamos la accion para trabajar con el formulario 
const accion2 = function (event) {

    event.preventDefault()

    //Obtenemos propiedades del evento
    console.log(event.target.Nombre.value)
    console.log(event.target.Apellido.value)
    console.log(event.target.opcion.value);
}
//Agregamos accion al evento
Console.addEventListener("submit", accion2);



