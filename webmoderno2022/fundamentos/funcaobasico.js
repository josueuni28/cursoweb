function soma(a,b) {
    console.log(a + b)
}
// Função sem retorno
soma(1,2)
soma(1) // O segundo parâmetro não foi passado, ele passa a ser undefined (Não realiza a soma)
soma(1,2,3,4)

// Função com parametro pré-definido e com retorno
function somap(a, b = 3){
    return a + b
}

console.log( somap(2, 1), somap(2) ) // Nesse caso, na segunda chamada a soma será feita porque o valor "b" está pré-defido como 3

// Armazenando Função em uma variável
const somar = function(a = 0, b = 0){
    console.log(a+b)
}

somar(2,2)
somar()


// Criando Funções uusando arrow
const adcao = (a,b) => a + b
console.log(adcao(4,3))

// Ainda mais simples (Quando se tem apenas um parâmetros)
const novasoma = a => a + 5
console.log(novasoma(2))
