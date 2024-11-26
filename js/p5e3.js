let Numeros = [];
let Confirmacion;
do{
    Numeros.push(prompt("Ingrese un numero: "));
    Confirmacion = confirm("Desea Ingresar mas numeros?");
}while(Confirmacion);
alert("Los numeros ingresados son: " + Numeros.join(", ") + " y la suma de estos es: " + Suma());
function Suma(){
    let Sumita = 0;
    for(let Numerito of Numeros){
        Sumita = Sumita + Number(Numerito);
    }
    return Sumita;
}