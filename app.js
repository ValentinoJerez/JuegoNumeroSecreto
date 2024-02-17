let numeroSecreto = generarNumeroSecreto();
let intentos = 1;

let titulo = document.querySelector('h1');
titulo.innerHTML =  'Juego del Numero Secreto';

let parrafo = document.querySelector('p');
parrafo.innerHTML = "Indica un numero entre 1 y 10";

function textoAElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto
}

function verificarIntento(){
    let numeroDeUsuario = document.getElementById('valorUsuario').value
    if (numeroDeUsuario === numeroSecreto){
        textoAElemento('p', `Acertaste el numero en ${intentos} ${intentos == 1 ? 'intento' : 'intentos'}`);
    } else {
        if(numeroDeUsuario > numeroSecreto){
            textoAElemento('p','El numero es menor')
        }else{
            textoAElemento( 'p' , 'El numero es mayor')
        }
        intentos++;
    }
    return;
}

function generarNumeroSecreto(){
    let numeroSecreto = Math.floor(Math.random()*10)+1;
    return numeroSecreto;
}

textoAElemento('h1', 'Juego del Numero Secreto');