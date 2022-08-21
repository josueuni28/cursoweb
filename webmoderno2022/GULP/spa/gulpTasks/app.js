const gulp = require('gulp') // Importando o 'Gulp'
const babel = require('gulp-babel') // Importando o 'Babel'
const uglify = require('gulp-uglify') // Importando o 'Uglify'
const sass = require('gulp-sass')(require('sass')) // Importando o 'SASS'
const uglifycss = require('gulp-uglifycss') // Importando o 'UglifyCSS'
const concat = require('gulp-concat') // Importando o 'Concat'
const htmlmin = require('gulp-htmlmin') // Importando o 'Htmlmin' para mimificar o HTML da aplicação

function appHTML() {
    return gulp.src('src/**/*.html') // Pegando qualquer arquivo HTML
        .pipe(htmlmin({ collapseWhitespace: true })) // Para retirar os 'espaços' vazios
        .pipe(gulp.dest('build'))
}

function appCSS() {
    return gulp.src('src/assets/sass/index.scss')
        .pipe(sass().on('error',sass.logError)) // Chama o sass() e verifica se existe algum erro
        .pipe(uglifycss({"uglyComments": true})) // Nesse caso, para remover os comentários na mimificação
        .pipe(concat('app.min.css'))
        .pipe(gulp.dest('build/assets/css'))
}

function appJS() {
    // Tratando e enviando para a pasta da aplicação, os arquivos JS
    return gulp.src('src/assets/js/**/*.js')
        .pipe(babel({ presets: ['ENV'] }))
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('build/assets/js'))
}

function appIMG() {
    return gulp.src('src/assets/imgs/**/*.*') // Qualquer imagem com qualquer extensão
        /* Você pode aplicar um tratamento para reduzir o tamanho das imagens etc...
           Nesse caso, apenas jogaremos as imagens para a pasta da aplicação */
        .pipe(gulp.dest('build/assets/imgs'))
}

// Identificando as 'Task' para serem reconhecidas pelo 'watch' do servidor
gulp.task('appHTML', appHTML)
gulp.task('appCSS', appCSS)
gulp.task('appJS', appJS)
gulp.task('appIMG', appIMG)

module.exports = { appHTML, appCSS, appJS, appIMG }