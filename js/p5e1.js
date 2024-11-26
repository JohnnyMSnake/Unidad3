let confirmacion;
let Frutas = [];
do{
    Frutas.push(prompt("Ingrese una fruta: "));
    confirmacion = confirm("Desea agregar mas frutas?");
}while(confirmacion);
alert("Las frutas que ingreso son: " + Frutas.join(", "));