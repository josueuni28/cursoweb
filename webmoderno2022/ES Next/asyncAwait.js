// Recurso do ES8 -> Objetivo de simplificar o uso de Promises

// Mesmo exemplo do conteúdo de "promises.js"
const http = require('http'), teste = [0]

function getTurma(letra) {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra.toUpperCase()}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res =>{
            let resultado = ''

            res.on('data', dados => {
                resultado += dados
            })

            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch (e) {
                    reject(e)
                }
            })
        })
    })
}

// Usando na função o async e o await...
let obterAlunos = async () => {
    const turmaA = await getTurma('a')
    const turmaB = await getTurma('b')
    const turmaC = await getTurma('c')

    return [].concat(turmaA, turmaB, turmaC)
}

obterAlunos()
    .then(turma => [].concat(...turma))
    .then(alunos => {
        console.log(alunos)
    })
    .catch(e => console.log(e))


//------------------------------------------------------------------------------------------------    
// Outro exemplo:
function relogio(segs, valor) {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                resolve(valor)
            }, segs * 1000)
        } catch (e) {
            reject(e)
        }
    })
}

async function esperarTodos() {
    try {
        let valores = 0
        /* Para simular o erro em uma função Async/Await, mudar a variável "valores" de let para const.
           O tratamento de erros é feito com o tryCatch */
        valores = await relogio(2, 20)
        console.log(valores)
        valores += await relogio(1, 30)
        console.log(valores)
        valores += await relogio(4, 40)
        console.log(valores)
        
        teste.push(1)
        return valores + 700
    } catch (e) {
        throw 'Deu um erro inesperado'
        // Se der erro, esse será o valor passado no .catch() da função no final
    }
}

esperarTodos()
    .then(console.log)
    // Quando você tem apenas um único parâmetro, e ele apenas será retornado, pode colocar a chamda da função direto
    .then(() => console.log('Valor no .then():', teste))
    .catch(err => console.log(err))

console.log('Valor fora do .then():', teste)