const gulp = require('gulp')
const series = gulp.series
const parallel = gulp.parallel

// Importando as 'Tasks' dividida em partes...
const { appHTML, appJS, appCSS, appIMG } = require('./gulpTasks/app')
const { depsCSS, depsFonts } = require('./gulpTasks/deps')
const { monitorarArquivos, servidor } = require('./gulpTasks/servidor')

// Criando o esquema de execução...
module.exports.default = series(
    parallel(
        series(appHTML, appJS, appCSS, appIMG),
        series(depsCSS, depsFonts)
    ),
    servidor,
    monitorarArquivos
)