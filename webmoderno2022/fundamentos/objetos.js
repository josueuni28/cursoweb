const produto = {} // Declarando um Objeto vazio

// Basicamento um Objeto é constiudo por chaves/atributos e valores

produto.nome = 'IPhone 10'
produto.preco = 3999.98
produto['novas categorias'] = 'Smartphone' // Evitar criar atributos textuais
// Definindo atributos dinamicamente

console.log(produto)

//Declarando um Objeto incluindo seus atributos
const produto2 = {
    nome: "TV Samsung OLED '60",
    preco: 5499.90,
    caracteristicas: {
        preso: '10kg',
        cor: 'preto',
        canais: ['TV Globo','SBT','Band','Record'],
        estoque: 478
    }
}

// IMPORTANTE: Não confundir ".json" com Objetos, JSON é um tipo de texto literal
console.log(produto2)