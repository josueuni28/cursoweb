// Criando uma Função anônima (sem parâmetros)

// Tradicional
const indo = function () {
    return 'Indo no Função tradicional...'
}

// Arrow
const ir = () => 'Indo na Arrow modo 1...'
const ir2 = _ => 'Indo na Arrow modo 2...'

console.log(indo())
console.log(ir())
console.log(ir2())

// O "this" nunca muda o contexto em que foi criado em um função Arrow

const obj = {}
let analisa = param => console.log(this === param) // Usado o "Let" para fazer o exemplo final

//Exemplos

analisa(this)
analisa(global)
//analisa(window) Da erro porque só existe no browser
analisa(module.exports) // como o NodeJS trabalha trando cada arquivo individual o "this" assuma o module.exports

console.log('Forçando a troca com o .bind()...')
// Mesmo forçando uma troca do "this" ele não se altera
analisa = analisa.bind(obj)

analisa(obj)
analisa(module.exports)
