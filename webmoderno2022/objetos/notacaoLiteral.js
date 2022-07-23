const nome = 'Rodrigo'
const idade = 25
const estado = 'São Paulo'

// ES2015
const Pessoa = {nome, idade, estado} // Já passa o nome da variável como sendo o nome do atributos do objeto
// É o mesmo que:
const Pessoa2 = {nome: nome, idade: idade, estado: estado}

console.log(Pessoa, Pessoa2)

// Declaração dinâmica
const nomeAttr = 'nota'
const valorAttr = 7.8

const obj3 = {}
obj3[nomeAttr] = valorAttr

const obj4 = {[nomeAttr]: valorAttr}

console.log(obj3, obj4)

// Funções
const obj5 = {
    funcao1: function(){
        //... Forma clássica
    },
    funcao2(){
        // Forma mais prática para declarar uma função em um Objeto
    }
}

console.log(obj5)