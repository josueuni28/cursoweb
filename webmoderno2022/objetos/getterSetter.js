const sequencia = {
    _valor: 1, // Convenção usada para informar ao programdor que esse é um atributo privado, porém nada impede de ser maninpulado
    get valor() { return this._valor++ }, // Retornando o valor acrescentando +1
    set valor(valor) {
        // só vai alterar se o valor passado for maior que o atual
        if(valor > this._valor){
            this._valor = valor
        }
    }
    /*Obs: O JS não aceita você usar o mesmo nome de uma função para fazer uma nova atribuição,
      porém no caso do "getter" e "setter" ele não gera erro */
}

// usando os metodos "getter" e "setter", e não o atributos _valor em si
console.log(sequencia.valor, sequencia.valor)

sequencia.valor = 10
console.log(sequencia.valor, sequencia.valor)

// vai ignorar esse atribuição
sequencia.valor = 5
console.log(sequencia.valor, sequencia.valor)

