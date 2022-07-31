// É tipo um array, porém não aceita repetições e não é indexado (0,1,2 ...)

const times = new Set()

times.add('Vasco')
times.add('Corinthans').add('São Paulo').add('Palmeiras') // pode colocar encadeado
times.add('São Paulo')

console.log(times) // São Paulo só entrou uma vez
console.log(times.size)
console.log(times.has('Vasco')) // O has é Case Sensitive

times.delete('Vasco')
console.log(times)

const lista = ['Julia','Andressa','Maicon','Sergio','Andressa']
const nomes = new Set(lista) // Setando de forma direta

console.log(nomes)
