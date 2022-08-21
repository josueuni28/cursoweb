const gulp = require('gulp')
const webserver = require('gulp-webserver')
const watch = require('gulp-watch')

function servidor() {
    // Configurando o servidor...
    return gulp.src('build')
        .pipe(webserver({
            port: 3000,
            open: true,
            livereload: true
        }))
}

function monitorarArquivos(cb) {
    /* Para ficar monitorando qualquer alteração nos arquivos de projeto
       Quando ocorre uma modificação nos arquivos ele chama apenas a tarefa responsável e já
       atualiza o 'servidor' sem ter que precisar compilar a 'build' inteira */
    watch('src/**/*.html', () => gulp.series('appHTML')())
    watch('src/**/*.scss', () => gulp.series('appCSS')())
    watch('src/**/*.js', () => gulp.series('appJS')())
    watch('src/assets/imgs/**/*.*', () => gulp.series('appIMG')())

    return cb()
}

module.exports = { monitorarArquivos, servidor }