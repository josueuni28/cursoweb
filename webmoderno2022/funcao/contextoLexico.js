const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
    // Não declaramos o variável dentro da função para forçar ela buscar a variável mais próxima com esse nome
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
    /* Era esperado que a função "minhaFuncao" encontrasse o valor mais próximo, nesse caso a
        variável "valor" com a atribuição 'Local', porém por conta do contexo Léxico (O local que
        ela foi definnida/escrita) ela pega a variável "valor" com o 'Global' definido. */
}


minhaFuncao()
exec()