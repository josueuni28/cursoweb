let isAtivo = true
console.log(isAtivo)

isAtivo = false
console.log(false)

isAtivo = 1
/* Forçando a entrada de verdadeiro ou falso com dois operado "!".
   O operador "!" significa negação, com dois juntos ele volta ao valor original */
console.log(!!isAtivo)

console.log('Valores verdadeiros em JS...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true)) // Vai retornar se a operação foi resolvida, não a atribuição

console.log('Valores falsos')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('Para finalizar, demonstrando com setar valores padrão para uma variável')
console.log(('' || null || NaN || 'Eba' || 1)) // Retorna o primeiro valor verdadeiro que encontar da operação

let sobrenome = 'Souza'
console.log(sobrenome || 'Não tem sobrenome')
// Se "sobrenome" for true retorna ele, porém se for false, retorna a segunda expressão

sobrenome = ''
console.log(sobrenome || 'Não tem sobrenome')
