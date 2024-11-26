let Calificaciones = [];
let Confirmacion;
do{
    Calificaciones.push(prompt("Ingrese una califcacion: "));
    Confirmacion = confirm("Desea agregar mas calificaciones?");
}while(Confirmacion);
alert("El promedio de las calificaciones es: " + Promedio());
function Promedio(){
    let Suma = 0;
    let Resultado = 0;
    for(let sumita of Calificaciones){
        Suma = Suma + Number(sumita);
    }
    Resultado = Suma/Calificaciones.length
    return Resultado;
}