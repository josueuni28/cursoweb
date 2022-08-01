// Recurso do ES8 -> Objetivo de simplificar o uso de Promises

// Mesmo exemplo do conteúdo de "promises.js"
const http = require('http')

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