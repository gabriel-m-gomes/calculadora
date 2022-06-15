

var n1 = document.querySelector('#n1')
var n2 = document.querySelector('#n2')
var resultado = document.querySelector("#resultado")
console.log(n1)

function limparResultado(){
    primeiroValor = ""
    segundoValor = ""
    n1.innerHTML = "" 
    n2.innerHTML = ""
    resultado.innerHTML = ""
    trocar = true
}

var trocar = true

 
var operador = ""

function somar(){ 

    operador = "+" 
    trocar = false

}

function multiplicar(){

    operador = "*"

}

function subtrair(){
    
    operador = "-"
}

function dividir(){
   
    operador = "/"
}

var numbers = document.querySelectorAll(".number")
    

var primeiroValor = ""

var segundoValor = ""
    

function addnumber(valor){

    if(trocar === true){
        primeiroValor += valor 
        n1.innerHTML = primeiroValor
    }
    else {

        segundoValor += valor
        n2.innerHTML = segundoValor
    }

}

for (let index = 0; index < numbers.length; index++) {
    const number= numbers[index];
    number.addEventListener("click",()=> addnumber(number.innerHTML))
    
}

