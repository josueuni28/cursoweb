const pessoa = {nome: 'Maria'}
// pessoa -> 0x8H9... -> {...}
console.log(pessoa)

pessoa.nome = 'João' // Não gera erro porque você está manipulando o Objeto no mesmo endereço de memória
console.log(pessoa)

/**
 * Quando você cria um Objeto const, você pode alterar os atributos do mesmo, mas não pode fazer
 * uma nova atribuição como: 'objeto' = {}
 */

/* pessoa = {nome: 'Ana'} // Isso não é permitido, porque o que você está fazendo é tentar atribuir
  um novo endereço de memória para a const pessoa */


/* Método Freeze */

Object.freeze(pessoa)
// Esse é um método usado para congelar completamente o Objeto e não permitir nem um tipo de alteração

pessoa.nome = 'Ana'
// Não gera nenhum erro, porém ele ignora a manipulação

pessoa.end = 'Rua ABC'
delete pessoa.nome
// Também é impossível adicionar novos atributos e/ou deletar quando o Objeto está "congelado"

console.log(pessoa)