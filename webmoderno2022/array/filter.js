const produtos = [
    {nome: 'Notebook', preco: 3000, fragil: true},
    {nome: 'Ipad', preco: 2500, fragil: true},
    {nome: 'Copo de vidro', preco: 18.59, fragil: true},
    {nome: 'Copo de plástico', preco: 16.98, fragil: false}
]

const filtra = produtos.filter(function (elemento) {
    // Filter retorna um NOVO Array com as condições passadas VERDADEIRAS
    return elemento.preco < 2900 && elemento.fragil == true
})

console.log(filtra)

/* ----------- CRIANDO SEU O PRÓPRIO FILTER (SEMELHANTE) -------------- */
Array.prototype.meuFilter = function (callback) {
    const newArray = []

    for (let i = 0; i < this.length; i++) {
       if( callback(this[i], i, this) ) newArray.push( this[i] )
    }

    return newArray
}

const novoFiltro = produtos.meuFilter(function (elemento) {
    return elemento.preco < 2900 && elemento.fragil == true
})

console.log('\nMeuFilter:')
console.log(novoFiltro)