console.log(typeof Object)
console.log(typeof new Object) // Ao ser declarado instaciado como "new", passa a ser um Objeto

const Funcao = function(){}

console.log(typeof Funcao)
console.log(typeof new Funcao) // Mesma coisa do comentário acima

class Produto {}

console.log(typeof Produto)
console.log(typeof new Produto) // Também o mesmo efeito