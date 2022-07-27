// Coleção dinâmica de chaves pares/valores

const produto = new Object // Definindo um novo objeto vazio
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Genérica'
produto.preco = 250

console.log(produto)

//Deletando chaves do objeto
delete produto.preco
delete produto['marca do produto']

console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 8400,
    proprietario:{
        nome: 'Raul',
        idade: 56,
        endereco:{
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores:[{
        nome: 'Junior',
        idade: 18
    },{
        nome: 'Ana',
        idade: 49
    }],
    calcularValorSeguro: function () {
        //...
    }
}

console.log(carro)

carro.proprietario.endereco.numero = 1000
// Acessando como string, útil apenas quando você recebe o atributo como uma string ou não sabe o nome da chave
carro['proprietario']['endereco']['logradouro'] = 'Av Gigannte'
console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro // É possível deletar funções também
console.log(carro)

console.log(carro.condutores) //Não dá erro, dá undefined, porque ele "ainda não foi definido"
// console.log(carro.condutores.length)
// Nesse caso gera erro, porque você está tentando acessar um atributo de algo que não foi definido



