const aprovados = ['Renan','Gustavo','Marta','Taynna']

aprovados.forEach(function (valor,indice,array) {
    // ForEach é uma função callback que percorre todos os índices do array.
    /* É possível pegar até 3 parâmetros, porém não são obrigatórios
       O primiero parâmetro é o valor/Conteúdo, o segundo e o número do índice que ele está percorrendo
       e o último e o próprio array */

    console.log(`${indice + 1} ) ${valor} | ${array}`)
})

// Outro exemplo passando apenas o valor para o callback
aprovados.forEach(valor => console.log(`- ${valor}`) )

/* ------------------------ CRIANDO SEU PRÓPRIO FOREACH --------------- */
Array.prototype.MeuForEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

aprovados.MeuForEach(function (valor,indice,array) {
    console.log(`${indice + 1} ) ${valor} | ${array}`)
})