// O NodeJS é divido por modulos

const moduloA = require('./moduloA') // Não é necessário colocar a extensão quando for arquivos JS
const moduloB = require('./moduloB')

console.log(moduloA)
console.log(moduloA.ola)
console.log(moduloA.ateLogo)
console.log(moduloA.bemVindo)

console.log(moduloB)
console.log(moduloB.bomDia)
console.log(moduloB.boaNoite)
console.log(moduloB.saudacao) // Retorna undefined -> Não pode ser acessada