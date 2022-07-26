const unidades = [1,2,3,4,5]

const novos = unidades.map(function(elemento){
    // Map é um For com objetivo...
    /* Map percorre todos os elemento do array, fazendo a alteração pedida em cada elemento
       e retona um NOVO Array com o mesmo tamanho */
    return elemento * 2
})

console.log(novos, unidades) // Não modifica o array original


const soma10 = valor => valor+10
const multiplica3 = valor => valor*3
const paraDinheiro = valor => `R$ ${parseFloat(valor).toFixed(2).replace('.', ',')}`

// Fazendo 3 modificações em sequência, passando como parâmetro as funções criadas...
const dinheiro = unidades.map(soma10).map(multiplica3).map(paraDinheiro)

console.log(dinheiro)

/* ------------------ CRIANDO SEU PRÓPRIO MAP --------------- */
Array.prototype.MeuMap = function (callback) {
    const arr = []

    for (let i = 0; i < this.length; i++) {
        arr.push( callback(this[i], i, this) )
    }

    return arr
}

const novoMap = unidades.MeuMap(function (elemento) {
    return elemento * 2
})

console.log('\nMeuMap:')
console.log(novoMap, unidades)