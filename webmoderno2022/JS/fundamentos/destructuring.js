const pessoa1 = {
    nome: 'Izabela',
    idade: 25,
    endereco:{
        rua: 'Rua dos cantos',
        numero: 956
    }
}
const pessoa2 = {
    nome: 'Riccardo',
    idade: 38,
    endereco:{
        rua: 'Av. Assim',
        numero: 17
    }
}
const pessoa3 = {
    nome: 'Lucas',
    idade: 18,
    endereco:{
        rua: 'Rua Esmeralda',
        numero: 520
    }
}

// Trazendo o valor direto do Objeto com o Destructuring (ES2015)
const {nome, idade} = pessoa1
console.log(nome, idade)

// É possível renomear as variáveis
const {nome: np2, idade: ip2} = pessoa2
console.log(np2, ip2)

// Acessando rua e numero que estão dentro de endereço
const {endereco:{ rua, numero }} = pessoa3
console.log(rua, numero)

// Pegando todo que tem dentro de endereço
const {endereco} = pessoa3
console.log(endereco)

// Também é possível atribuir um valor padrão caso, a chave não exista
const {sobrenome = 'Não tem'} = pessoa1
console.log(sobrenome)

//---------------------------------------------
// Fazendo Destructuring com arrays
const arr = ['lua',2,78.91,'mar',10]

const [a] = arr
console.log(a)

// pulando indexs
const [n1, ,n3,n4] = arr
console.log(n1, n3, n4)

//----------------------------------------
// Destructuring em uma função como Objeto
console.log('\nDestructuring em uma função como Objeto:')

function rand({min = 0, max = 100}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand({min: 5, max: 10}))
console.log(rand({min: 90})) // Não precisa passar todos os paremetros porque eles já tem valor pré-definido
console.log(rand({})) // Vai gerar de 0 a 100

const aleatorio = {min: 1, max: 5}
console.log(rand(aleatorio))

// com arrays
console.log('\nCom arrays:')

function rand2([min = 0, max = 100]){
    if (min > max) [min, max] = [max, min] // Invertendo, caso o "min" for maior que "max"
    const valor = Math.random() * (max - min) + min
    return valor.toFixed(2)
}

console.log(rand2([5, 10]))
console.log(rand2([90]))
console.log(rand2([,10])) // pulando o index 0 (min)
console.log(rand2([]))
