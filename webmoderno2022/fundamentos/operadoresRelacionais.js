console.log('01)','1' == 1)
console.log('02)','1' === 1) // Verifica o tipo da variavel, nesse caso é false
console.log('03)','1' != 1)
console.log('04)','1' !== 1) // Verifica também o tipo...

console.log('05)', 1 > 2)
console.log('06)', 1 < 2)
console.log('07)', 1 >= 2)
console.log('08)', 1 <= 2)

const d1 = new Date(0)
const d2 = new Date(0)

// Nesse caso dá false porque ele está comparando alocação na memória,
console.log('09)', d1 == d2)
console.log('10)', d1 === d2)

console.log('11)', d1.getTime() === d2.getTime()) // Quando são valores da true


console.log('12)', null == undefined) // Aqui dá true
console.log('13)', null === undefined)

// De modo geral, é melhor usar o operador estritamente igual "===" para comparação