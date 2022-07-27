const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!' // Concateção padrão

// Concatenação usando template string
const template = `
Olá
${nome}
!
`

console.log(concatenacao)
console.log(template)

// Permite operações
console.log(`1 + 1 = ${1 + 1}`)

// É possível também passar funções
const up = texto => texto.toUpperCase()

console.log(`Olá ${up(nome)}!`)

