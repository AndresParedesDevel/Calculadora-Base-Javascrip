//Esto agrega a la pantalla, el boton que toquemos a la calculadora.
function agregar(valor){
    document.getElementById("pantalla").value += valor
}
//Borramos lo escrito en la pantalla.
function borrar(valor){
    document.getElementById("pantalla").value = " "
}
//Agregamos el resultado a la pantalla.
function calcular(valor){
    const valorPantalla = document.getElementById("pantalla").value
    const resultado = eval(valorPantalla)
    document.getElementById("pantalla").value = resultado
}