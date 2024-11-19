do{
    pedirDatos();
    if(confirmacion()){
        alertaIngreso();
    } else{
        alertaBorrado();
    }
    confirmacion2 = confirm("Desea ingresar mas datos?");
}while(confirmacion2);
despedida();

function pedirDatos(){
    let datos = prompt("Bienvenido, ingrese su nombre y su actividad favorita: ");
}

function confirmacion(){
    let confirmacion = confirm("Los datos que ingreso son correctos?");
    return confirmacion;
}

function alertaIngreso(){
    alert("Los datos ingresados se guardaron correctamente");
}

function alertaBorrado(){
    alert("Se borraron los datos");
}

function confirmacion2(){
    confirm("Desea ingresar mas datos?");
}

function despedida(){
    alert("Todos los datos se ingresaron correctamente, fin de ejecucion UwU");
}