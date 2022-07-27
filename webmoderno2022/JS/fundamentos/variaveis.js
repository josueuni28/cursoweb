var a = 1
let b = 2 // Mais comum de ser usado
const c = 3 // Não pode ser alterado o valor, muito útil para manter a integridade do dado armazenado

var a = 4 // Não gera erro declarando novamente a variiável
//let b = 5 // Gera um erro
// Um mesmo "let" não pode ser declarado duas vezes, diferente do "var" 
b = 5

console.log(a, b)

c = 6 // Gera erro por ser do tipo "const"

console.log(a, b, c)