let inputValor1 = document.querySelector("#valor1");
let inputValor2 = document.querySelector("#valor2");
let inputValor3 = document.querySelector("#valor3");
let inputValor4 = document.querySelector("#valor4");
let btCalcular = document.querySelector("#btCalcular");
let resultado = document.querySelector("#resultado");

function menorNumero(){
    let valor1 = Number(inputValor1.value);
    let valor2 = Number(inputValor2.value);
    let valor3 = Number(inputValor3.value);
    let valor4 = Number(inputValor4.value);

    let menorValor = Math.min(valor1, valor2, valor3, valor4);

    document.getElementById("resultado").innerText = "O menor valor é: " + menorValor;
    
}

btCalcular.onclick = function(){
    menorNumero()
}
