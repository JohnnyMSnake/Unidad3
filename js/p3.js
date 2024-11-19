do{
let datos = prompt("Ingrese su nombre y su actividad favorita: ");
let confirmacion = confirm("Los datos que ingreso son correctos?");
    if(confirmacion){
        alert("Los datos ingresados se guardaron correctamente");
        alert("La informacion que ingreso es: " + datos);
    } else{
        alert("Se borraron los datos");
    }
    confirmacion2 = confirm("Desea ingresar mas datos?");
}while(confirmacion2);