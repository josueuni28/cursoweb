// O Spread é semelhante ao ...rest (Para juntar), porém usado para espalhar

const pessoa = { nome: 'Luiz', idade: 25 }
const novas = {sobrenome: 'Junior', ...pessoa}

console.log(novas)

const nomes = ['Maria','Rosana','Sebastião']
const outros = ['Rosana', ...nomes, 'Joelma']

console.log(outros)