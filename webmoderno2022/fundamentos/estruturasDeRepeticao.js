function aleatorioInteiro(min,max){
    let valor = Math.random() * (max - (min-1)) + min
    return Math.floor(valor)
}


let opcao = aleatorioInteiro(-1, 5)

console.log('while:')
// While verifica antes de entrar no bloco de código, se o aleatório já der -1 de primeira ele não executa
while(opcao >= 0){
    opcao = aleatorioInteiro(-1, 5)
    console.log(opcao)
}

console.log('do while:')
// DoWhile primeiro executa o código para depois fazer a verificação
do {
    opcao = aleatorioInteiro(-1, 5)
    console.log(opcao)
} while (opcao >= 0);

//-------------------------------------------------------------------------
// Criando um fim para o While (Uma alternativa melhor é usar o For para isso)
let conta = 0
while (conta < 10) {
    console.log(`conta com While: ${conta}`)
    conta++
}

/* É importante declarar a variável como let, para que essa variavel fique acessivel
   apenas no bloco do For e não em todo o código */
for (let i = 0; i < 10; i++) {
    console.log(`contando com For: ${i}`)
}
// console.log(i) // Se o "i" for declarado sem "let" ele pode ser acessado fora do laço

// Percorrendo um Array com For (Existem métodos mais eficientes de percorrer um array, sem ser com For)
const notas = [5,4.6,9,1,7.8,10]

for (const i in notas) {
    console.log(`nota com In: ${notas[i]}`)
}
// Usando For Of, nesse caso a variável assume o próprio valor do array
for (const nota of notas) {
    console.log(`nota com Of: ${nota}`)
}
