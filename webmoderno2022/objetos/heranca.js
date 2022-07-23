const ferrari = {
    modelo: 'F40',
    velMax: 324
}
const volvo = {
    modelo: 'V40',
    velMax: 310
}

console.log(ferrari.__proto__)
/* Com o atributo __proto__ é possível acessar os níveis mais altos da herança para
buscar alguma metodo ou atributo que já exista em objetos pais */
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)

console.log(Object.prototype.__proto__ === null)
// Não existe nada acima de Object.prototype, ele é a hierarquia mais alta

function MeuObjeto() {
    //...
}

console.log(typeof Object,     typeof MeuObjeto,   typeof ferrari)
console.log(Object.prototype,  MeuObjeto.prototype)

console.log(ferrari.prototype) // gera undefined
// A propriedade "prototype" só está disponível em Funções