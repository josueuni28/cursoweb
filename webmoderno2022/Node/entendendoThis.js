console.log(this === global)
console.log(this === module.exports)
// Fora de uma função o "this" aponta para "module.exports"

function oThis() {
    console.log('Dentro de um função...')

    console.log(this === module.exports)
    console.log(this === global)
    // Dentro de um função o "this" aponta para o Objeto global do Node
    /* Deve-se ter cuidado em usar o this dentro de uma função comum e em arrows
       porque o que você colocar dentro dele, poderá ser acessado pelo Objeto global */

    this.olaMundo = 'Olá Mundo' // Isso ficará exposto
    console.log(this)
}

oThis()

console.log(global.olaMundo) // acessando o "olaMundo" que foi definido dentro de uma função