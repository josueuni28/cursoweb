/* ----------------------- Let e Const ----------------------- */
{
    var a = 'a' // Evitar usar
    let b = 'b'
    const c = 'c'
    //c = 'd' // Não permite
}

console.log(a)
//console.log(b, c) // Geram erro por estarem fora do escopo

/* ----------------------- Template string ----------------------- */
const nome = 'Fulano'
console.log(`Olá ${nome}!`)

/* ----------------------- Destructuring ----------------------- */
const [j, o, ...resto] = 'Josué'
console.log(j, o, resto)

const [x, y] = [1, 2, 3]
console.log(x, y)

const {nome: novoNome, idade} = {nome: 'Luiza', idade:25}
/* É possível dar um novo nome para a variável que vai receber o valor do atributo,
   como no atributo nome, o valor foi atribuido para "novoNome" */
console.log(novoNome, idade)

/* ----------------------- Arrow Fuction ----------------------- */
const soma = (a, b) => a + b // Não precisa colocar o return
const soma2 = (a, b) => {
    // Você for colocar chaves, precisa especificar o return caso a função retorne algo
    return a + b
}

// o "This" em arrow fica preso, nunca muda o contexto em que foi criado em uma função Arrow
const lexico = () => this === exports
const l2 = lexico.bind({}) // Mesmo forçando uma alteração do this, ele não muda

console.log(lexico(), l2())

/* ----------------------- Parâmetro default ----------------------- */
function mostra(nome = 'Dev'){
    console.log(nome)
}

mostra('Josué')
mostra() // imprime Dev

/* ----------------------- Operador rest ----------------------- */
function somaTodos(...numeros) {
    /* Os três pontos, indicam que a apartir daquele momento pode ter
       incontáveis argumentos, e eles serão alocados todos em um array */
    const total = numeros.reduce((a,b) => a + b)
    return total
}

console.log(somaTodos(1,5,9,10,5))

/* ----------------------- Objects.values() e entries() ----------------------- */
const obj = { a: 1, b:2, c:3 }

console.log(Object.values(obj)) // Retorna apenas os valores das chaves
console.log(Object.entries(obj)) // Retorna chaves e valores em formato de array

/* ------------- Simplificação da Notações Literal em Objetos ----------------- */
const sobrenome = 'Gonçalves'

const pessoas = {
    sobrenome, // Já cria diretamente um atributo, com a chave "sobrenome" e valor "Gonçalves"
    falar(){ // Cria uma função diretamente, sem precisar informar a chave
        console.log('Olá Mundo!')
    }
}

console.log(pessoas.sobrenome, pessoas.falar())

/* ----------------------- Classes ----------------------- */

class Pessoa {
    constructor(nome, sobrenome, idade){
        this.nome = nome
        this.sobrenome = sobrenome
        this.idade = idade
    }

    falar(){
        console.log(`Olá me chamo ${this.nome} e tenho ${this.idade} anos!`)
    }
}

class Programdor extends Pessoa {
    constructor(nome, sobrenome, idade){
        super(nome, sobrenome, idade)
    }
    
    profissao(){
        console.log('Eu sou Dev!')
    }
}

const classe = new Programdor('Vitor','Reginaldo',34)

classe.falar()
classe.profissao()