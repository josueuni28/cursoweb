/*
  Função em JS é First-Class Object (Citizens)
  Higher-order function
*/

// Declarando função de forma literal
function fun1(){ }

// Declarando em uma variável
const fun2 = function(){ }

// Armazenar em um Array
const arr = [function(a, b){ return console.log(a + b) }, 'Outra coisa...']

arr[0](2, 5)

// Armazenar em um Objeto
const obj = {}

obj.falar = function(){
    return 'Olá Mundo'
}

console.log(obj.falar())

// Passar uma Função como parâmetro
function run(func){
    func()
}

console.log( run(function(){ console.log('Opa!') }) )

// Uma Função pode Retornar/Conter outra Função
function soma(a,b){
    return function(c){
        console.log(a + b + c)
    }
}

soma(2,3)(4)

const doisMais = soma(1,1)

doisMais(8)

