let inputValor1 = document.querySelector("#valor1");
let inputValor2 = document.querySelector("#valor2");
let btCalcular = document.querySelector("#btCalcular");
let resultado = document.querySelector("#resultado");

function maiorEntreDois(){
    let valor1 = Number(inputValor1.value);
    let valor2 = Number(inputValor2.value);

    if (isNaN(valor1) || isNaN(valor2)){
        resultado.innerHTML = "Por favor, insira números válidos.";
    } else {
        let maiorValor = valor1 > valor2 ? valor1 : valor2;
        resultado.innerHTML = "O maior valor é: " + maiorValor;
    }
}

btCalcular.onclick = function(){
    maiorEntreDois()
}
