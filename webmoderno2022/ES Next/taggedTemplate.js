// Tagged Template processa o template dentro de uma função
function tag(partes, ...valores){
    console.log(partes)
    console.log(valores)
    /* Partes e os valores andam em conjunto, primeiro vem a parte depois o conjunto
       Ex: em um template string `${nome} já chegou`, a divisão seria assim:
       partes = ['',' ja chegou'] e valores = ['Joana']*/
    return 'Uma outra string'
}

const nome = 'Maria'
const cidade = 'Santo André'

console.log(`${nome} da cidade de ${cidade} foi aprovada!`)
console.log(tag `${nome} da cidade de ${cidade} foi aprovada!`)

// Algo mais útil
function real(partes, ...valores){
    const resultado = []
    valores.forEach((valor, i)=>{
        const altera = isNaN(valor) ? valor : 'R$'+valor.toFixed(2)
        resultado.push(partes[i], altera)
    })

    // pega o último valor de partes se for sobrar
    if(partes.length > valores.length) resultado.push(partes.slice(-1))

    return resultado.join('') // juntando toda array montada
}

const pessoa = 'Ana'
const dinheiro = 250
const preco = 122.95

console.log(real `${pessoa} tem ${dinheiro} em dinheiro e precisa comprar um produto de ${preco}.\nQuanto do dinheiro de ${pessoa} vai sobrar para ela?`)
