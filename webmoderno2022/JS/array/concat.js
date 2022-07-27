const filhos = ['Marquinhos', 'Geovane']
const filhas = ['Amanda', 'Sara']

const todosFilhos = filhos.concat(filhas)
// O Método Concat gera um novo Array juntando o array inicial, com os passados como parâmetros no método.

console.log(todosFilhos)
console.log(filhos, filhas) // Os arrays originais não são afetados

console.log('Outro exemplo:')
console.log([].concat('a','b',[1,2,3],4,[5,6],'c',[[7,8]]))
// Array simples são "convertidos" em valores individuais
