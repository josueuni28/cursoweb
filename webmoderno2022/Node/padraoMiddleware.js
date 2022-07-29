// Middleware patters (Chain of responsibility)

const passo1 = (contexto, next) => {
    contexto.valor1 = 'md01'

    next()
}

const passo2 = (contexto, next) => {
    contexto.valor2 = 'md02'

    next()
}

// O passo3 não terá o next, significa que quando a execução chegar nele vai interromper a cadeia
const passo3 = (contexto) => {
    contexto.valor3 = 'md03'
}


const exec = (contexto, ...midlewares) => {
    const execPasso = indice => {
        midlewares && indice < midlewares.length &&
        midlewares[indice](contexto, ()=> execPasso(indice + 1))
    }

    execPasso(0)
}

const obj = {}, obj2 = {}, obj3 = {}, obj4 = {}

exec(obj, passo1, passo2, passo3) // Seguindo uma ordem
exec(obj2, passo2, passo1, passo3) // Fora da ordem
exec(obj3, passo1, passo3) // Omitindo um passo
exec(obj4, passo3, passo2, passo1) // Começando do último passo

/* Com o padrão middleware, não necessáriamente você fica preso a ordem
   e as tarefas se tornam mais independentes e flexivéis, possíbilitando reusos em outros casos */

// Resultados
console.log(obj)
console.log(obj2)
console.log(obj3)
console.log(obj4)