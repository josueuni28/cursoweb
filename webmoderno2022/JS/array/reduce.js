const notasAlunos = [9.5, 7.3, 6.1, 8.5, 5.4, 7.9]

const somaNotas = notasAlunos.reduce(function (acumulador, valorAtual){
    /* Reduce itera/agrega a condição informada em todos os elementos do array e retorna
       o resultado de todas as iterações em um novo valor final */
    return acumulador + valorAtual
})

console.log(somaNotas)


/* ----------- CRIANDO SEU O PRÓPRIO REDUCE (SEMELHANTE) -------------- */
Array.prototype.MeuReduce = function (callback, valorInicial) {
    let valorFinal = valorInicial || this[0]
    const indiceInicial = (valorInicial) ? 0 : 1

    for (let i = indiceInicial; i < this.length; i++) {
       valorFinal = callback(valorFinal, this[i], i, this)
    }

    return valorFinal
}

const novaSoma = notasAlunos.MeuReduce(function (acumulador, valorAtual){
    return acumulador + valorAtual
})

console.log('\nMeuReduce:')
console.log(novaSoma)