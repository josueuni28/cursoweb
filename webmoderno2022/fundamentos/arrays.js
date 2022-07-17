const conteudo = [1, 'Lucas', {id: 19}, 7.2, (txt) => txt.toUpperCase()]
// Array em JS pode possuir multiplos valores e funções

console.log(conteudo)
console.log(conteudo[4]('olá mundo'))

conteudo[0] = 5 // Alterando o valor do index 0 do array
console.log(conteudo[0])

conteudo[9] = 'Curso' // vai colocar na posição 9 a string e os valores intermediários serão vazios
console.log(conteudo[9])

console.log(conteudo)
console.log(conteudo.length)

console.log(typeof conteudo)

/**
 * SOBRE O TIPO "const" em array e objetos:
 * Os valores internos podem ser alterados, aumentados e diminuidos
 * O que não é permitido fazer e alterar o tipo alocado na memória
 * */

conteudo = [1] // Isso não é permitido
console.log(conteudo)
