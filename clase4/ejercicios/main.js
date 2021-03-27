const lista = document.getElementById("listado")
const form = document.getElementById("mi-formulario")
let tareas = [];
let index = 0;

const renderizarLista = function()  {
    

    tareas.forEach((tarea, i) => {

        //Crear elementos de forma dinamica
        const item= document.createElement("li")
        item.classList.add("list-group-item", "py-4");
        

        const p1 = document.createElement("p")
        p1.innerText = tarea.titulo
        p1.classList.add("h4")

        const p2 = document.createElement("p")
        p2.innerText = tarea.descripcion

        
        item.append(p1);
        item.append(p2);

        
      
        //Agrego elementos hacia un elemento que los contiene (contenedor)
        lista.append(item)
      
      
    });
    
};

const accionFormulario = function(event) {
    event.preventDefault()

    //agregar un elemento al final del array
    let tarea = {
        titulo: event.target.titulo.value,
        descripcion: event.target.descripcion.value,
    }


    tareas.push(tarea) 

    //renderizar la lista op
    renderizarLista()
}

form.addEventListener("submit", accionFormulario)






