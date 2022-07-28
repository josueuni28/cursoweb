// ISSO É PARA CONHECIMENTO, NÃO É RECOMENDADO, A NÃO SER EM UMA EXCESSÃO
require('./objetoGlobal')
/* Não é necessário chamar ele em uma variável, porque nesse caso, não tem nada para ser exportado
   o Objeto será inserido no Objeto global do Node, e também só é preciso chamar uma vez, após essa
   chamada ele ficará disponível nos outros arquivos também */


MinhaFuncao.nome = 'Novo nome'
// Não será possível alterar porque o Objeto foi congelado na criação com o freeze

console.log(MinhaFuncao.saudacao())
console.log(MinhaFuncao.nome)