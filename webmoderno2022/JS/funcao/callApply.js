function getPreco(imposto = 0, moeda = 'R$') {
    return(`${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`)
}

const Produto = {
    nome: 'Notebook',
    preco: 4500,
    desc: 0.15,
    getPreco
}

console.log(getPreco()) // Da NaN porque o this aponta para o escopo global

global.preco = 3000
global.desc = 0.2
console.log(getPreco()) // Definindo os valores do escopo global

console.log(Produto.getPreco())
/* Com o objeto Produto não dá problema porque a função foi inserida dentro dele e ele
   já possúi os atributos que a função precisa */


// Contornando o efeito da função buscar o escopo global com Call e Apply:
const carro = { preco: 9000, desc: 0.1 }
console.log('Usando Call & Apply')

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

//Para mudar os parâmetros da função "getPreco"
console.log(getPreco.call(carro, 0.5, '$')) // Com call
console.log(getPreco.apply(carro, [0.5, '$'])) // Com apply

//É possível também nesse exemplo passar objeto global (Porque já definimos as propriedades)
console.log(getPreco.apply(global, [0.5, '¥'])) // Com apply