let numeroSecreto;
let intentos;
let numerosSorteados = [];
let numeroMaximo = 10;
console.log(numeroSecreto)
function asignarTextoElemento(elemento, texto){
    let elemetoHTML = document.querySelector(elemento)
elemetoHTML.innerHTML = texto

}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value)
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento("p", `Acertaste el número en ${intentos} ${(intentos===1)? "vez": "veces"}`)
        document.getElementById("reiniciar").removeAttribute("disabled")
    }else{
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento("p", "El número secreto es menor")

        }else{
            asignarTextoElemento("p", "El número secreto es mayor")
        }
        intentos++
        limpiarCaja()
    }
}

function limpiarCaja(){
    document.querySelector("#valorUsuario").value="";

}
function condicionesIniciales(){
    asignarTextoElemento("h1", "Juego del número secreto")
    asignarTextoElemento("p",`Indica un numero del 1 al ${numeroMaximo}` )
    intentos = 1
    numeroSecreto = generarNumeroSecreto()
}


function generarNumeroSecreto(){
    let numeroGenerado= Math.floor(Math.random()*`${numeroMaximo}`+1) 
    console.log(numerosSorteados, numeroGenerado)
    
    if(numerosSorteados.length == numeroMaximo){
        asignarTextoElemento("p", "Ya se sortearon todos los números posibles")
    }else{
    
    if(numerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto()
    }else{
       numerosSorteados.push(numeroGenerado)
       return numeroGenerado 
    }}
}

function reiniciarJuego(){
    limpiarCaja()
    condicionesIniciales()
    document.querySelector("#reiniciar").setAttribute("disabled", true)
   
}
condicionesIniciales()