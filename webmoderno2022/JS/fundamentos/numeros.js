const tipo1 = 1.0
const tipo2 = Number('2.5')

console.log(tipo1, tipo2)

// Verificar se o número é inteiro
console.log(Number.isInteger(tipo1), Number.isInteger(tipo2))

const avaliacao1 = 8.967
const avaliacao2 = 3.912

const total = avaliacao1 + avaliacao2
const media = total / 2

console.log(total)
console.log(media)

console.log(media.toFixed(2)) // Arredondando
console.log(media.toString()) // Convertendo para texto
console.log(media.toString(2)) // Em binário

// Esses métodos não alteram o valor original da variável
console.log(typeof media)
