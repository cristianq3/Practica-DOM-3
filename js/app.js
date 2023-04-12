// 3 - Crea una web con bootstrap y js, que contenga un botón input donde se pueda cargar una tarea y un botón que al ser presionado agregue dicha tarea a una lista, cada elemento ingresado en la lista debe poder ser eliminado con un botón creado para ese fin.

//Obtener los datos del form

let formulario = document.querySelector("form");
let lista = document.getElementsByTagName("ul");
let btnEliminar = document.querySelector(".btnCerrar");

btnEliminar.addEventListener("click", eliminarTarea);

formulario.addEventListener("submit", agregarTarea);

console.log(formulario);

// Crear la funcion para agregar a la lista los elementos.
function agregarTarea(e) {
  e.preventDefault();
  // Obteniendo los datos de la lista.
  let tareaNueva = document.getElementById("tarea").value;

  //Agregar la variable tareaNueva a la ul llamada lista.






  console.log(tareaNueva);
  // Agregar la el elemento <li> a la lista de tareas.



  alert("Se agregó la tarea a la lista");
  formulario.reset();
}

function eliminarTarea() {
    console.log("Tarea eliminada")
    alert("Tarea ELiminada")
}