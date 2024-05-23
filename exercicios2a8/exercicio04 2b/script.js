let numero1 = document.querySelector("#numero1");
let numero2 = document.querySelector("#numero2");
let numero3 = document.querySelector("#numero3");
let Rmedia = document.querySelector("#Rmedia");
let rPonderada = document.querySelector("#rPonderada");
let rSomaMedias = document.querySelector("#rSomaMedias");
let rMediaDasMedias = document.querySelector("#rMediaDasMedias");   
let btSoma = document.querySelector("#btSoma");

function calculo(){
    let media = (Number(numero1.value) + Number(numero2.value) + Number(numero3.value)) / 3;
    Rmedia.textContent = media;
    let ponderada = (Number(numero1.value * 3) + Number(numero2.value * 2) + Number(numero3.value * 5)) / 10;
    rPonderada.textContent = ponderada
    let somamedia = Number(ponderada) + Number(media);
    rSomaMedias.textContent = somamedia;
    let mediadasmedias = (Number(ponderada) +  Number(media)) / 2;
    rMediaDasMedias.textContent = mediadasmedias;
}

btSoma.onclick = function(){
    calculo()
}

//.innerHTML adiciona elementos html para o JS
