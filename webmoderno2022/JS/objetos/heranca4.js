console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)
/* Como esses e outros "métodos" são todos funções (herdam de Função), então é possível acessar a
   propriedade "prototype" de cada um e adicionar ou modificar atributos e funções */

String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}

console.log('Olá Mundo'.reverse())

Array.prototype.first = function () {
    return this[0]
}

console.log([1,2,3,4].first())

/* É possível modificar atributos e funções já existentes dos métodos, porém NÃO FAÇA ISSO
   porque pode gerar efeitos não esperados */
/* Exemplo:
    String.prototype.toString = function () {
        return 'NÃO FAÇA ISSO!!!'
    }
*/

//------------------------------------------------------------------

function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Tudo Matemática', 1234)
const aula2 = new Aula('O Que São Estrelas?', 5678)

console.log(aula1, aula2)

// Simulando o "new" - Para entender mais sobre o conceito de protótipos e herança
// (Mais ou menos o que o JS faz por baixo dos panos para instanciar um novo Objeto)

function novo(f, ...params) {
    // Os 3 pontos na frente de "params" significa que ele vai pegar todos os valores e converter em um array
    const obj = {} // Cria um objeto vazio
    obj.__proto__ = f.prototype // Faz o objeto criado apontar para os prototipos da função (Que será informada)
    f.apply(obj, params) // Usa o método apply da função para o "this" apontar para o próprio objeto 

    return obj
}

const aula3 = novo(Aula,'Tudo Matemática', 1234)
const aula4 = novo(Aula,'O Que São Estrelas?', 5678)

console.log(aula3, aula4) // O resultado é igual aos objetos que foram instanciados com o "new" acima
