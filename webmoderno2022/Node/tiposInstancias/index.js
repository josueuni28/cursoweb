const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')() // É preciso chamar porque nesse caso usamos uma função factory
const contadorD = require('./instanciaNova')()


contadorA.incr()
contadorA.incr()
// No caso da "instanciaUnica" o valor será alterado nas duas constantes, por causa que o Node cria um cache
console.log(contadorB.valor, contadorA.valor)

contadorC.incr()
contadorC.incr()
// No caso da "instanciaNova", os contadores são independentes, porque usamos uma função factory
console.log(contadorD.valor, contadorC.valor)
