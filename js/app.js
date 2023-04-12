// 3 - Crea una web con bootstrap y js, que contenga un botón input donde se pueda cargar una tarea y un botón que al ser presionado agregue dicha tarea a una lista, cada elemento ingresado en la lista debe poder ser eliminado con un botón creado para ese fin.

//Obtener los datos del form

let formulario = document.querySelector("form");

let lista = document.querySelector("ul");

formulario.addEventListener("submit", agregarTarea);

// Crear la funcion para agregar a la lista los elementos.
function agregarTarea(e) {
  e.preventDefault();
  // Obteniendo los datos de la lista.
  let tareaNueva = document.getElementById("tarea").value;

  if (tareaNueva != "") {
    //Agregar la variable tareaNueva a la ul llamada lista.
    //Crear el elemento li
    let nuevoLi = document.createElement("li");
    nuevoLi.innerHTML = tareaNueva;
    // Crear el boton cerrar
    let botonCerrar = document.createElement("button");
    botonCerrar.innerHTML = "X";
    botonCerrar.className = "btn ms-auto btnCerrar";

    // Insetar el boton dentro del li
    nuevoLi.appendChild(botonCerrar);

    botonCerrar.addEventListener("click", eliminarTarea);

    // Agregar la el elemento <li> a la lista de tareas.

    lista.appendChild(nuevoLi);

    Swal.fire({
      html: "La tarea se añadirá de su lista",
    });

    formulario.reset();
  } else {
    Swal.fire({
      html: `Por favor <b>ingrese una tarea </b> para poder agrerarla a su lista`,
    });
  }
  console.log(tareaNueva);
}

function eliminarTarea() {
  let elementoEliminado = this.parentNode;

  elementoEliminado.remove();

  tarea = this.parentNode.innerText.slice(0, -1);

  console.log(tarea);

  console.log("Tarea eliminada");
  Swal.fire({
    html: `La tarea <b> ${tarea} </b> eliminó de lista`,
  });
}
