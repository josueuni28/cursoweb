function comprar(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    const comprarTv32 = trabalho1 != trabalho2 // Simulando o XOR
    const manterSaudavel = !comprarSorvete

    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}
    // Criando saida de um Objeto de forma simplificada, aonde o nome da chave assume o nome da variável
}

console.log(comprar(true,true))
console.log(comprar(true,false))
console.log(comprar(false,true))
console.log(comprar(false,false))

