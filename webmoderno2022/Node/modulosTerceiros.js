// Usando módulos de terceiros no Node
const _ = require('lodash')

setInterval(() => {
    console.log(_.random(1,100))
}, 1000)