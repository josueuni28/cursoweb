const gulp = require('gulp') // Importando o 'Gulp'
const series = gulp.series
const babel = require('gulp-babel') // Importando o Babel
const uglify = require('gulp-uglify') // Importando o Uglify
const concat = require('gulp-concat') // Importando o Concat

/**
 * O 'Babel' é utilizado para deixar o código compatível/suportado por versões mais antigas, que não
 * possuem os recursos atuais. Ele altera o código deixando com maior acessibilidade dos browser ou
 * interpretadores de JS.
 * 
 * O 'Uglify' Mimifica os arquivos.
 * 
 * O 'Concat' junta os arquivos em um único arquivo
 */

function transformandoJS() {
    // Outra forma de 'notificar' o 'Gulp' que a tarefa terminou e chamar o código diretamente no 'return'
    return gulp.src('src/*.js')
        .pipe(babel({
            comments: false,
            // Para remover os comentários que estajam nos arquivos, e não sejam passados.
            presets: ['env']
            /* O termo 'env' se refere a versão mais nova do JS, ou seja, vai ele interpretar tudo
               que term de mais atual na liguagem. */
        }))
        .on('error', err => console.log(`Ops. Deu um erro!:\n${err}`))
        // Você pode monitorar/tratar eventos durante as 'transformações'
        .pipe(concat('codigoFinal.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('build'))
}

function fim(cb) {
    console.log('FIM!!!')
    return cb()
}

module.exports.default = series(transformandoJS, fim)