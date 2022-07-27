soma(2,3)
/* Com Function declaration você pode chamar a função antes de ser declarada,
o interpretador do JS lê elas antes do código */

// Function declaration
function soma(x, y) {
    return x + y
}

// Function expression
const sun = function (x, y) {
    return x + y
}

sun(4,6) // As Functions expression só podem ser chamadas depois de declaradas

// Named Function expression (Não é comum, é mais usado para debugs e realizar testes)
const mult = function mult(x, y) {
    return x + y
}

mult(9,9)