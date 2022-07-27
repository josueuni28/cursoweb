const soma = function (a, b) {
    return a + b
}

// chamando padrão uma função anônima dentro de outra função anônima...
const calcula = function (x, y, operacao = soma) {
    return console.log( operacao(x, y) )
}

calcula(2,3)
calcula(3,4,soma) // Ness caso tanto faz referênciar a função ou não
calcula(4,2,function (a, b) {
    return a * b
})
calcula(5,4,(a, b) => a - b)