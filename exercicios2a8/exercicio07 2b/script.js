let btCalcular = document.querySelector("#btCalcular");
let resultado = document.querySelector("#resultado");
let valor1 = document.querySelector("#valor1");

function numeroImpar(){

    if (Number (valor1.value % 2 === 1)) {
        alert('O número é impar');
    } else {
        alert('O número é par');
    }
}

btCalcular.onclick = function(){
    numeroImpar()
}
