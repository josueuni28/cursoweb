// Função Factory nada mais é do que uma função que retorna um objeto

function pessoa(nome,idade) {
    return {
        nome,
        idade,
        nacionalidade: 'Brasileiro(a)'
    }
}

console.log(pessoa('Marcos',34))