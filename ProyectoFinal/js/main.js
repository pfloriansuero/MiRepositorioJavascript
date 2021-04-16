window.addEventListener('load', () => {

const lista = document.getElementById("listado")
const form = document.getElementById("mi-formulario")
const btn = document.getElementById("button")
// let tareas = [];
const getTareas = () => {
    let tareas = JSON.parse(localStorage.getItem("tareas"))
    if (!tareas) {
        localStorage.setItem("tareas", JSON.stringify([]))
        tareas = JSON.parse(localStorage.getItem("tareas"))
    }
    return tareas
}
// let index = 0;

let tareas = getTareas()

const renderizarLista = function()  {
    // lista.innerHTML = "";
    limpiarLista()
    

    tareas.forEach((tarea, i) => {

        //Crear elementos de forma dinamica
        const item= document.createElement("li")
        item.classList.add("list-group-item", "py-1");
        

        const p1 = document.createElement("p")
        p1.innerText = tarea.titulo
        p1.classList.add("h4")

        const p2 = document.createElement("p")
        p2.innerText = tarea.descripcion


        //Creando botones dinamicos interactivos
        const button = document.createElement("button");
        button.classList.add("btn","btn-warning", "me-3")
        button.innerText = "Modificar" 
       
        button.addEventListener('click', () => {
            modificarTarea(tarea);
        });
        
        

        const button2 = document.createElement("button");
        button2.classList.add("btn","btn-danger")
        button2.innerText = "Eliminar"
        // item.dataset.id = index
        button2.addEventListener('click', () => {
           eliminarTarea(i);
        });

        
        item.append(p1);
        item.append(p2);
        item.append(button);
        item.append(button2);

        
      
        //Agrego elementos hacia un elemento que los contiene (contenedor)
        lista.append(item)
      
      
    });
    
};

//Limpio la lista cada vez que creo un listado
const limpiarLista = function () {
    let hijos = document.querySelectorAll("li")
    if (hijos.length > 0) {
        for (let i = 0; i < hijos.length; i++) {
            lista.removeChild(hijos[i])
        }
    }
}


//Funcion para boton de editar una tarea
const modificarTarea = (tarea) => {
    
    
    form.elements["id"].value = tarea.id;
    form.elements["titulo"].value = tarea.titulo;
    form.elements["descripcion"].value = tarea.descripcion;
  
    btn.innerText = "Modificar";

};

//Funcion para boton de eliminar una tarea
const eliminarTarea = function(i) {

    let respuesta = confirm("Desea eliminar esta tarea");
    

    if(respuesta){
        tareas.splice(i, 1);
        actualizarStorage()
    renderizarLista();
    }
  
    

   
    
}

const actualizarStorage = () => localStorage.setItem("tareas", JSON.stringify(tareas))

const accionFormulario = function (event) {
    event.preventDefault();
    btn.innerText = "Agregar";

    let tarea;
    if (event.target.id.value) {
        tarea = tareas.find(function (tar) {
            return tar.id === event.target.id.value
        })

        tarea.titulo = event.target.titulo.value;
        tarea.descripcion = event.target.descripcion.value

        tareas = tareas.filter(function (tar) {
            return tar.id !== tarea.id
        });
           

    } else {
        tarea = {
            
            titulo: event.target.titulo.value,
            descripcion: event.target.descripcion.value,
            id: uuidv4()
        }
    }

    tareas.push(tarea)
    actualizarStorage()
    form.reset()
   

    // renderizar la lista
    renderizarLista()

}






form.addEventListener("submit", accionFormulario)

renderizarLista()

})