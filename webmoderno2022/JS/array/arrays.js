console.log(typeof Array, typeof new Array, typeof []) // Array é um Objeto em JS

const novoArray = new Array('Ana', 'Lucas', 'Rodrigo', 'Bianca')
// Declarando um novo Array (Essa não é uma forma muito usual, nem recomndada para declarar um novo Array)
console.log(novoArray)

let aprovados = ['Ana', 'Lucas', 'Rodrigo', 'Bianca'] // Forma recomendada para declarar um Array
// Sobre Arrays tipo "let" e "const", veja sobre em: fundamentos -> array.js

console.log(aprovados[0]) // A contagem inicia a partir do número 0
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'João' // Atribuindo um novo valor ao índice 3 do array
aprovados[4] = 'Joyce' // Incluíndo um novo elemento ao array (Não usual)
aprovados.push('Bianca') // Forma usual de atribuir um novo elemento no final de um array

console.log(aprovados)
console.log(aprovados.length) // Pegando o tamanho atual do array com o ".length"

aprovados[9] = 'Carlos'
/* É possível atribuir valor a índeces além do tamanho do array, porém os valores
   intermediários, ficam undefined e o array ganha um novo tamanho */
console.log(aprovados)
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

aprovados.sort() // Ordenando o array (Esse método afeta diretamente o array)
console.log('Método .sort():','\n',aprovados)

delete aprovados[1] // Deletando um array
// Porém esse método não exclui definitivamento o elemento do array, o seu valor fica undefined
console.log('Usado o delete:', aprovados.length) // O array continua com a mesma ordem e tamanho

// Método .splice()
console.log('\nUsos com o .splice() no array:')

aprovados = ['Ana', 'Lucas', 'Rodrigo']
aprovados.splice(1, 2) // Removendo 2 elementos a partir do índice 1
console.log(aprovados)

aprovados = ['Ana', 'Lucas', 'Rodrigo']
aprovados.splice(1, 2, 'elemento1', 'elemento2')
// Removendo 2 elementos a partir do índice 1, e acrescentando mais 2 elementos
console.log(aprovados)

aprovados = ['Ana', 'Lucas', 'Rodrigo']
aprovados.splice(1, 0, 'elemento1', 'elemento2')
// Não removendo nenhum elemento e acrescentando 2 elementos, a partir do índice 1
console.log(aprovados)






