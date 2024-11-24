const $form = document.querySelector('#form')

$form.addEventListener('submit', handleSumbit)

function handleSumbit(event){
    event.preventDefault()
    const form = new FormData(this)
    if(confirm("Los datos ingresados son correctos?")){
        let calificaciones = {
            cal1 : "",
            cal2 : "",
            cal3 : "",
            cal4 : "",
            cal5 : "",
            cal6 : "",
            cal7 : "",
            suma : function(){
                let suma = (Number(this.cal1) + Number(this.cal2) + Number(this.cal3) + Number(this.cal4) + Number(this.cal5) + Number(this.cal6) + Number(this.cal7));
                return suma;
            },
            promedio : function(){
                let promedio = (this.suma())/7;
                let resultadoSuma = document.getElementById('suma');
                resultadoSuma.innerHTML = "Suma: " + this.suma();
                let resultado = document.getElementById('promedio');
                resultado.innerHTML = "Promedio: "+ promedio
            }
        }
        calificaciones.cal1 = document.getElementById('c1').value
        calificaciones.cal2 = document.getElementById('c2').value
        calificaciones.cal3 = document.getElementById('c3').value
        calificaciones.cal4 = document.getElementById('c4').value
        calificaciones.cal5 = document.getElementById('c5').value
        calificaciones.cal6 = document.getElementById('c6').value
        calificaciones.cal7 = document.getElementById('c7').value
        calificaciones.promedio()

    }else{
        alert("Ejecucion cancelada")
    }
}