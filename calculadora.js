

var n1 = document.querySelector('#n1')
var n2 = document.querySelector('#n2')
var total = document.querySelector("#total")    
var result = document.querySelector('#resultado')
result.addEventListener("click",resultado)
var operacaoMatematica = document.querySelector("#operacaoMatematica")
var sinalDeIgual = document.querySelector('#sinalDeIgual')
    

function limparResultado(){
    primeiroValor = ""
    segundoValor = ""
    n1.innerHTML = "" 
    n2.innerHTML = ""
    total.innerHTML = ""
    trocar = true
    operacaoMatematica.innerHTML = ""
    sinalDeIgual.innerHTML = ""
}



function resultado(){
    var subtotal = ""

    sinalDeIgual.innerHTML = "="

    if(operador == "+" ){
       subtotal = Number(primeiroValor) + Number(segundoValor)  
       total.innerHTML = subtotal


    }

    if(operador == "-"){
        subtotal = Number(primeiroValor) - Number(segundoValor)
        total.innerHTML = subtotal

    }

    if(operador == "*"){
        subtotal = Number(primeiroValor) * Number(segundoValor)
        total.innerHTML = subtotal
    }

    if(operador == "/"){
        subtotal = Number(primeiroValor) / Number(segundoValor)
        total.innerHTML = subtotal


    }



}

    


var trocar = true

 
var operador = ""

function somar(){ 

    operador = "+" 
    trocar = false
    operacaoMatematica.innerHTML = "+"
    

}

function multiplicar(){

    operador = "*"
    trocar = false
    operacaoMatematica.innerHTML = "*"

}

function subtrair(){
    
    operador = "-"
    trocar = false
    operacaoMatematica.innerHTML = "-"
}

function dividir(){
   
    operador = "/"
    trocar = false
    operacaoMatematica.innerHTML = "/"
}

var numbers = document.querySelectorAll(".number")
    

var primeiroValor = ""

var segundoValor = ""
    

function addnumber(valor){

    if(trocar === true){
        primeiroValor = primeiroValor + valor
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

