const $form = document.querySelector('#form')

$form.addEventListener('submit', handleSumbit)

function handleSumbit(event){
    event.preventDefault()
    console.log("funciona esta mierda xdxdxxdx")
    const form = new FormData(this)
    let confirmacion = prompt("Hola " + form.get('nombre') + ", esta seguro de querer ingresar los datos ?")
    if(confirmacion === "si" || confirmacion === "Si"){
        alert("Registro guardado correctamente: NOMBRE: " + form.get('nombre') + " EDAD: " + form.get('edad') + " PAIS: " + form.get('pais'))
    } else{
        alert("Registro borrado")
    }
}