// Object.preventExtensions()
// Permite fazer modificações nos atributos objeto, permite deletar atributos, não permite adicionar novos atributos
const produtos = Object.preventExtensions({
    nome:'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log(Object.isExtensible(produtos)) // Método para verificar se o Objeto pode ser extendido

produtos.nome = 'Borracha'
produtos.descricao = 'Borracha macia e durável' // Não permite
delete produtos.tag

console.log(produtos)

//Object.seal()
// Permite fazer modificações nos atributos objeto, não permite deletar atributos, não permite adicionar novos atributos
const pessoa = {
    nome:'Bianco', idade: 32
}

Object.seal(pessoa)
console.log(Object.isSealed(pessoa)) // Método usado para verificar se o Objeto foi selado

pessoa.nome = 'Rodrigo'
pessoa.sobrenome = 'Dos Santos' // Não permite
delete pessoa.idade // Não pemite

console.log(pessoa)

//Object.freeze() => Object.seal + atributos constantes (Veja mais sobre em "constObjetos.js")