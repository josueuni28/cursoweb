const estudantes = ['Ana','Carlos','Camila','Luana','Gabriel']

estudantes.pop() // Remove o último elemento do array e retorna o elemento removido
console.log(estudantes)

estudantes.shift() // Remove o primeiro elemento do array
console.log(estudantes)

estudantes.push('Junior') // Adiciona o elemento no final do array
console.log(estudantes)

estudantes.unshift('Katharine') // Adiciona o elemento no inicio do array
console.log(estudantes)

// <Array>.splice()
// Pode adicionar e remover elementos no array, veja o arquivo "arrays.js" para mais detalhes

let algunsEstudantes = estudantes.slice(2) // Pega uma parte do array original
// (Retorna um novo array) 
console.log(algunsEstudantes) // Pegou do índice 2 até o fim do array

algunsEstudantes = estudantes.slice(1,4) // Pegando do índice 1 até o 4, porém o 4 não entra
console.log(algunsEstudantes)




