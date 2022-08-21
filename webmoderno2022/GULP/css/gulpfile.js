const gulp = require('gulp') // Importando o 'Gulp'
const parallel = gulp.parallel // Usando o método 'parallel'
const sass = require('gulp-sass')(require('sass')) // Importando o 'SASS'
// Usado esse método com o require('sass'), porque o 'gulp-sass' não é mais o compilador padrão
const uglifycss = require('gulp-uglifycss') // Importando o 'UglifyCSS'
const concat = require('gulp-concat') // Importando o Concat


function transformandoSASS() {
    return gulp.src('src/sass/index.scss')
        /* Não é preciso, nesse caso, chamar todos os arquivos SASS que estão dentro da pasta,
           porque o 'index.scss' já tem todos os 'imports' */
        .pipe(sass().on('error',sass.logError)) // Chama o sass() e verifica se existe algum erro
        .pipe(uglifycss({"uglyComments": true})) // Nesse caso, para remover os comentários na mimificação
        .pipe(concat('estilo.min.css'))
        .pipe(gulp.dest('build/css'))
}

function copiarHTML() {
    return gulp.src('src/index.html') // Copiar o 'index.html' para a pasta 'build'
        .pipe(gulp.dest('build'))
}

module.exports.default = parallel(transformandoSASS, copiarHTML)