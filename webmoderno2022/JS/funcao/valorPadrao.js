// Estrategia 1
function soma(a,b,c){
    a = a || 1
    b = b || 1
    c = c || 1

    return a + b + c
}
/* Mesmo esse mode sendo muito comum para variáveis declaradas, nesse caso
   pode gerar "bug", se passar o valor 0 como parâmetro */

console.log(soma(), soma(1), soma(1,2,3), soma(0,0,0))

// Estratégias 2, 3 e 4
function soma2(a,b,c){
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1 // Se for usar essa estratégia é só mudar o index para cada parâmetro
    c = isNaN(c) ? 1 : c // Essa seria a mais adequada para o tipo de função que é somar

    return a + b + c
}

console.log(soma2(), soma2(1), soma2(1,2,3), soma2(0,0,0))

// ES2015
function soma3(a = 1, b = 1, c = 1){
    return a + b + c
}

console.log(soma3(), soma3(1), soma3(1,2,3), soma3(0,0,0))