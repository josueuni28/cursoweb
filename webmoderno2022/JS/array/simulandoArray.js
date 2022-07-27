// Off-Topic ! (Simulando um Array com Objeto)
const quaseArray = {0:'Lucas', 1:'Marcos', 2:'Rafaela'}

// Criando um método para imprimir apenas os valores do Objeto
Object.defineProperty(quaseArray, 'toString',{
    value: function () {
        return Object.values(this)
    },
    enumerable: false
})

const arrayOriginal = ['Lucas','Marcos','Rafaela']

console.log(quaseArray.toString(), arrayOriginal)
// Comparando as duas saídas (Do quaseArray e de um array normal), perceba que as saídas são semelhantes


