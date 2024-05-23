let ipCodigo = document.querySelector("#ipCodigo");
let btBuscar = document.querySelector("#btBuscar");
let resultado = document.querySelector("#resultado");

function buscarCodigo(){

    if (String (ipCodigo.value) == "001"){
        resultado.textContent = "Parafuso";
    }
    else if (String (ipCodigo.value) == "002"){
        resultado.textContent = "Porca"; 
    }
    else if (String (ipCodigo.value) == "003"){
        resultado.textContent = "Prego";
    }
    else{
        resultado.textContent = "Diversos";
    }

}
btBuscar.onclick = function(){
    buscarCodigo();
}