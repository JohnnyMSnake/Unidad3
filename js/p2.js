const $form = document.querySelector('#form')

$form.addEventListener('submit', handleSumbit)

function handleSumbit(event){
    event.preventDefault()
    console.log("funciona esta mierda xdxdxxdx")
    let confirmacion = prompt("Los datos que ingreso son correctos? ingrese 'si' si lo estan ")
    if(confirmacion === "si"){
        const form = new FormData(this)
        alert("hola " + form.get('nombre') + " tu edad es " + form.get('edad') + " años y tu pais de residencia es " + form.get('pais') + " UwU")
    }
}