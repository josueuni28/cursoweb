const gulp = require('gulp') // Importando o 'Gulp'
const series = gulp.series
const ts = require('gulp-typescript')
const tsProject = ts.createProject('tsconfig.json')

//Convertendo um projeto TypeScript em JS

function transformacaoTS() {
    return tsProject.src()
        .pipe(tsProject())
        .pipe(gulp.dest('build'))
    // Aqui você também pode usar o processos de mimificação e outros, se desejar...
}

module.exports.default = series(transformacaoTS)