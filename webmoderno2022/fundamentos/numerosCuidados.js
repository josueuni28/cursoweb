console.log(7 / 0) // Gera um número do tipo Infinity
console.log('10' / 5) // Ele verifica se a String pode ser convertida para Number, se sim, faz o cálculo
console.log('10' + 5) // Nesse caso ele não soma porque o operado "+" é utilizado para concatenar
console.log('10' - 2) // Realiza a subtração
console.log('10k' / 5) // Gera erro porque tem letras misturadas
console.log(0.1 + 0.7) // Não tem 100% de precisam. Adota um sistema mais rápido para cálculos
//console.log(10.toFixed(2)) // Gera erro
console.log((10).toFixed(2)) // Forma correta para usar um método