var inputTarea = document.getElementById('ingreso');
var botonAgregar = document.getElementById('boton');
var contenedorTareas = document.querySelector('.tareas');

function crearTarea(nombreTarea) {
  var nuevaTarea = document.createElement('div');
  nuevaTarea.classList.add('tarea');

  var checkboxSeleccion = document.createElement('input');
  checkboxSeleccion.type = 'checkbox';
  checkboxSeleccion.classList.add('checkbox-tarea');

  var etiquetaTarea = document.createElement('label');
  etiquetaTarea.textContent = nombreTarea;

  var imagenEliminar = document.createElement('img');
  imagenEliminar.src = '/semanaDW/5_Lista_de_tareas/media/caneca.svg';
  imagenEliminar.alt = 'Eliminar';
  imagenEliminar.classList.add('imagen-tarea');

  imagenEliminar.addEventListener('click', function() {
    contenedorTareas.removeChild(nuevaTarea);
  });


  
imagenEliminar.addEventListener('click', function() {
  var checkboxes = document.getElementsByClassName('checkbox-tarea');
  var tareasAEliminar = [];

  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      var tarea = checkboxes[i].parentNode;
      tareasAEliminar.push(tarea);
    }
  }

  for (var j = 0; j < tareasAEliminar.length; j++) {
    var tareaAEliminar = tareasAEliminar[j];
    contenedorTareas.removeChild(tareaAEliminar)
  }
});




  nuevaTarea.appendChild(checkboxSeleccion);
  nuevaTarea.appendChild(etiquetaTarea);
  nuevaTarea.appendChild(imagenEliminar);

  return nuevaTarea;
}

inputTarea.addEventListener('keypress', function(event) {
  if (event.keyCode === 13) {
    event.preventDefault(); 
    agregarTarea(); 
  }
});

function agregarTarea() {
  var tareaTexto = inputTarea.value;

  if (tareaTexto.trim() !== '') {
    var nuevaTarea = crearTarea(tareaTexto);

    contenedorTareas.appendChild(nuevaTarea);

    inputTarea.value = '';
  }
}

botonAgregar.addEventListener('click', agregarTarea);

var botonSeleccionar = document.getElementById('botonSeleccionar');

botonSeleccionar.addEventListener('click', function() {
  var checkboxes = document.getElementsByClassName('checkbox-tarea');

  for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].checked = true;
  }
});




