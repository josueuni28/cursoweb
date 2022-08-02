// Promises são semelhante a callbacks, porém possuem algumas vantagens em relação a callbacks

function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) =>{
        try {
            setTimeout(() => {
                resolve(frase) // Colocar o retorno no Resolve, se der certo
            }, segundos * 1000)
        } catch (e) {
            reject(e) // Caso dê algum erro, passar pelo Reject
        }
    })
}

falarDepoisDe(3, 'Olá Mundo')
    .then(frase => frase.concat('!!!')) // Usar o .then() para pegar o retorno em caso de sucesso (resolve)
    .then(novafrase => console.log(novafrase)) // Pode encadear vários .then()
    .catch(erro => console.log(erro)) // Usar .cath() para tratar o erro que vem pelo "reject"
    /*OBS: O .then() também seu tratamento de erro como segundo parâmetro, ex: .then(suaFuncao(), err).
           E se ele executar o erro dentro de um .then() ele não vai para o .catch(),
           porém não é muito usual tratar o erro dentro de um .then().
           É possível também chamar um .then() após um .catch(), mas nesse caso, esse .then() não
           vai conseguir receber os valores passados anteriormente*/


// Exemplo mais robusto
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

let todosAlunos = []
// Promise.All espera todas as requisições para enviar de uma unica vez a resposta
Promise.all([getTurma('a'), getTurma('b'), getTurma('c')])
    .then(turma => [].concat(...turma)) // Para expalhar todas as turmas em um único array
    .then(alunos => {
        todosAlunos = todosAlunos.concat(alunos)
        console.log(todosAlunos)
    })
    .catch(e => console.log(e))

/* Se fosse fazer esse exemplo com callbacks, teria que criar callbacks dentro callbacks.
   Além de ser mais trabalho/maior número de códigos, o código não facilita a leitura */