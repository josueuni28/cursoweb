let semdefinicao; // Está sem atribuição - undefined

//IMPORTANTE: Evite usar "undefined" nas variáveis

console.log(semdefinicao)

semdefinicao = null // Está nula, não aponta para nenhuma referência na memória.

console.log(semdefinicao)

// Exemplos

const carro = {nome:'Corsa',ano:2010}
let novocaro = carro
/* Quando é Objeto, isso faz uma atribuição por referência (na memória),
   de modo que as duas variáveis vão apontar para o mesmo lugar */

novocaro.nome = 'BMW'
console.log(carro, novocaro)

carro.ano = 2020
console.log(carro, novocaro)

// Para resetar a variável "novocarro" atribuir o null
novocaro = null
console.log(carro,novocaro)

