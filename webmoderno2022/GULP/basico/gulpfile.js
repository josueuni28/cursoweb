/**
 * IMPORTANTE: Ao iniciar o 'Gulp' em uma pasta com o comando '$ gulp', ele sempre vai procurar um
 * arquivo com o nome 'gulpfile.js', na pasta e subpastas (Por isso esse arquivo tem esse nome).
 * Você também pode especificar um arquivo usando a flag '-f <nomeArquivo>'
 */

const gulp = require('gulp') // Importando o 'Gulp'
const series = gulp.series // Armazenando o método 'series' em uma variável
const parallel = gulp.parallel // Armazenando o método 'parallel' em uma variável
/**
 * O método 'series', executa as tarefas em 'série', faz uma, termina, executa outra, termina, etc...
 * O método 'parallel', executa as tarefas em paralelo, inicia no mesmo tempo, sem nessecidade de
 * uma depender da outra para iniciar ou começar.
 * 
 * Você pode misturar os métodos um dentro do outro, como desejar.
 */


// Criando a primeira função (Tarefa)
function copiar(cb) {
    /* Todo função em gulp precisa ter uma callback (Que ele mesmo trata, como uma forma de saber que
        a 'tarefa' foi concluída) */

    console.log('Never Speak "Hello Word!"') // Imprimir msg no console

    // gulp.src(['pastaA/arquivo1.txt','pastaA/arquivo2.txt'])
    /* Você especificar os arquivos manualmente ou...
       pode passar uma expressão, nesse caso, ira selecionar todos os arquivo '.txt' da pasta e da subpasta */
    gulp.src('pastaA/**/*.txt')    
        .pipe(gulp.dest('pastaB')) // Copiando para a 'pastaB', se a pasta não existir será criada
        // .pipe(FazOutraCoisa)
        // .pipe(FazMaisUmaCoisa)
        // .pipe(FinalizaTudo)
    // Você pode aplicar um '.pipe' (Transformação), um em seguida do outro e criar um 'pipe line'

    return cb() // Retorno da função callback do 'gulp'
}

// Criando outras 'tarefas'...
function tarefa2(cb) {
    console.log('Fazendo a Tarefa 2')
    return cb()
}

function tarefa3(cb) {
    console.log('Fazendo a Tarefa 3')
    return cb()
}

function tarefa4(cb) {
    console.log('Fazendo última tarefa, a Tarefa 4.')
    return cb()
}

/* Ao exportar você precisa criar um novo método 'default' no module.exports, para
   o 'gulp' rodar o arquivo */
module.exports.default = series(
    copiar,
    parallel(tarefa2, tarefa3),
    tarefa4
    )