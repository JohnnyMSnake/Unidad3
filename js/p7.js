let Contenido = document.querySelector('#Contenido');

const $Agregar = document.querySelector('#Agregar');

$Agregar.addEventListener('click', agregarClick);

const $Eliminar = document.querySelector('#Eliminar');

$Eliminar.addEventListener('click', eliminarClick)

function agregarClick(event){
    event.preventDefault();
    let nombre = prompt("Ingrese el nombre de la pelicula:");
    let url = prompt("Ingrese la url de la pelicula: ");
    let div = document.createElement('div');
    div.innerHTML = "<a href='"+url+"'>"+nombre+"</a>";
    Contenido.appendChild(div);
}

function eliminarClick(event){
    event.preventDefault();
    let eliminar = document.querySelector('#Contenido').children[0];
    eliminar.remove();
}

