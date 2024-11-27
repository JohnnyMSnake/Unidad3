const $Submit = document.querySelector('#Submit');

$Submit.addEventListener('click', handleClick);

function handleClick(event){
    event.preventDefault();
    document.body.style.backgroundColor = getRandomColor();
    let p = document.querySelectorAll('p');
    p.forEach((ps) => {
        ps.style.color = getRandomColor(); // Cambia el color de cada <p>
    });

    let grid = document.querySelectorAll('.grid');
    grid.forEach((grids) => {
        grids.style.backgroundColor = getRandomColor(); // Cambia el color de cada <p>
    });
}

function getRandomColor() {
    const r = Math.floor(Math.random() * 256); // Rojo (0-255)
    const g = Math.floor(Math.random() * 256); // Verde (0-255)
    const b = Math.floor(Math.random() * 256); // Azul (0-255)
    return `rgb(${r}, ${g}, ${b})`; // Color en formato RGB
}

