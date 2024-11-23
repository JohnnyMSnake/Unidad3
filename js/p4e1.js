const $form = document.querySelector('#form')

$form.addEventListener('submit', handleSumbit)

function handleSumbit(event){
    event.preventDefault()
    if(confirm("Esta seguro de que estan bien los datos que ingreso?")){
        const form = new FormData(this)
        let Horario = {
            Materia1 : "Lenguajes y Automatas",
            Materia2 : "Arquitectura de computadoras",
            Materia3 : "Fundamentos de Telecomunicaciones",
            Materia4 : "Taller de Base de Datos",
            Materia5 : "Fundamentos de Ingenieria de Software",
            Materia6 : "Sistemas Operativos",
            Materia7 : "Programacion Web",
            Imprimir : function(){
                const primerCelda = document.getElementById('dato1')
                primerCelda.textContent = Horario.Materia1
                const segundaCelda = document.getElementById('dato2')
                segundaCelda.textContent = Horario.Materia2
                const tercerCelda = document.getElementById('dato3')
                tercerCelda.textContent = Horario.Materia3
                const cuartaCelda = document.getElementById('dato4')
                cuartaCelda.textContent = Horario.Materia4
                const quintaCelda = document.getElementById('dato5')
                quintaCelda.textContent = Horario.Materia5
                const sextaCelda = document.getElementById('dato6')
                sextaCelda.textContent = Horario.Materia6
                const septimaCelda = document.getElementById('dato7')
                septimaCelda.textContent = Horario.Materia7
            }
        }
        alert("Objeto creado")
        Horario.Materia1 = document.getElementById('Materia1').value
        Horario.Materia2 = document.getElementById('Materia2').value
        Horario.Materia3 = document.getElementById('Materia3').value
        Horario.Materia4 = document.getElementById('Materia4').value
        Horario.Materia5 = document.getElementById('Materia5').value
        Horario.Materia6 = document.getElementById('Materia6').value
        Horario.Materia7 = document.getElementById('Materia7').value
        Horario.Imprimir()

    }else{
        alert("No se ingresaron los datos")
    }
}