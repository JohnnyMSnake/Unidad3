const $Suma = document.querySelector('#Boton_suma');

$Suma.addEventListener('click', sumarClick);

const $Comparar = document.querySelector('#Boton_comparar');

$Comparar.addEventListener('click', compararClick);

const $map = document.querySelector('#Boton_map');

$map.addEventListener('click', mapClick);

const $Objeto = document.querySelector('#Boton_objeto');

$Objeto.addEventListener('click', objetoClick);

function sumarClick(event){
    let numero1 = document.getElementById('Suma1').value;
    let numero2 = document.getElementById('Suma2').value;

    let suma = (num1, num2) => {
        return Number(num1) + Number(num2);
    }
    let Resultado = document.getElementById('Resultado_suma');
    Resultado.innerHTML = "Resultado: "+suma(numero1, numero2);
}

function compararClick(event){
    let comparar1 = Number(document.getElementById('Comparar1').value);

    let comparacion = (comp1) => {
        if((comp1 % 2) === 0){
            return "Es par";
        } else{
            return "Es impar";
        }
    }
    let Resultado = document.getElementById('Resultado_comparar');
    Resultado.innerHTML = "Resultado: "+comparacion(comparar1);
}

function mapClick(event){
    let arreglo = [1, 2, 3, 4];
    let numeros = arreglo.map(num => num * 2);
    let Resultado = document.getElementById('Resultado_map');
    Resultado.innerHTML = "Resultado: " + numeros;
}

function objetoClick(event){
    let objeto = [
        {
            id: 1,
            nombre: "awa"
        },
        {
            id: 2,
            nombre: "owo"
        },
        {
            id: 3,
            nombre: "ewe"
        },
        {
            id: 4,
            nombre: "uwu"
        }
    ]

    let nombres = objeto.map(obj => obj.nombre);
    let Resultado = document.getElementById('Resultado_objeto');
    Resultado.innerHTML = "Los nombres son: " + nombres;
}