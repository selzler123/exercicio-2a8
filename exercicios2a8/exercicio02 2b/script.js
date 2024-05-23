let valorQuilo = document.querySelector("#valorQuilo");
let quantidadeQuilos = document.querySelector("#quantidadeQuilos");
let btCalcular = document.querySelector("#btCalcular");
let resultado = document.querySelector("#resultado");

function quilos(){
    resultado.textContent = Number(valorQuilo.value) * Number(quantidadeQuilos.value);
}

btCalcular.onclick = function(){
    quilos()
}