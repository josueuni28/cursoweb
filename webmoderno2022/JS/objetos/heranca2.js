const pai = { nome: 'Pedro', corCabelo: 'Preto' }

const filha = Object.create(pai) // Outra forma de criar Herança

filha.nome = 'Bia'
console.log(filha.nome, filha.corCabelo)

const filha2 = Object.create(pai, { // Agora definindo a herança e passando novos atributos
    nome: { value: 'Katharina', writable: false, enumerable: true},
    altura: { value: 1.65, writable: true, enumerable: true }
})

filha2.nome = 'Luana' // A nova atribuição não fará efeito porque esse atributo foi setado para "writable" false
filha2.altura = 2.40
console.log(filha2.nome, filha2.altura, filha2.corCabelo)


console.log('filha:',Object.keys(filha))
console.log('filha2:',Object.keys(filha2))
// Os Atributos da herança pai não são exibidos, porém podem ser lidos em um laço

let arr = []
for(let valor in filha2){
    // Usando um laço para percorrer todos os atributos/chaves e verificar quais são de herança e quais não são
    arr.push(valor)
    if(filha2.hasOwnProperty(valor)){
        console.log(`É da filha2: ${valor}`)
    }else{
        console.log(`Veio por herança: ${valor}`)
    }
}
console.log('Todas as keys/atributos:',arr)