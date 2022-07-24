function meuObjeto() {}

console.log(meuObjeto.prototype) // As funções também tem protótipos

const obj1 = new meuObjeto
const obj2 = new meuObjeto

console.log(obj1.__proto__ === obj2.__proto__) // Ambos objetos apontam para o mesmo lugar/herança
// Nesse caso apontam para o protótipo da função "meuObjeto"
console.log(obj1.__proto__ === meuObjeto.prototype)

meuObjeto.prototype.nome = 'Ana'
meuObjeto.prototype.falar = function(){ console.log(`Meu nome é ${this.nome}.`) }
/* É possível adicionar novos atributos e funções por meio do atributo "prototype" da função.
   Assim todos os objetos que herdam dele também receberam essas novas adições automatícamente */

/* Importante: Quando for criar novas funções, não criar com Arrow, se não o "this" não vai referênciar o
               outro objeto e vai ficar undefined, porque o Arrow não deixa o "this" fugir do escopo */

obj1.falar()

obj2.nome = 'Bruna'
obj2.falar()

const novoObj = {}
// Outra forma de passar herança
novoObj.__proto__ = meuObjeto.prototype
// Agora o "novoObj" vai receber todos os "protótipos" de "meuObjeto"

novoObj.nome = 'Lucas'
novoObj.falar()

/**
 * RESUMINDO A HIERARQUIA DE HERANÇA
 */
console.log(Object.prototype.__proto__ === null) // Não tem mais nenhum protótipo acima de Object.prototype
// Ele é a hierarquia mais alta

console.log(Function.prototype.__proto__ === Object.prototype)
console.log(meuObjeto.__proto__ === Function.prototype)
console.log((new meuObjeto).__proto__ === meuObjeto.prototype)