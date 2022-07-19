function tratarErro(e){
    // Existem várias formas de tratar um erro. O "throw" é usado para lançar um erro e para a aplicação
    // throw new Error('Ops, deu um erro...')
    // Pode passar qualquer coisa no "trow":
    // throw 10 
    // throw true
    // throw 'Mensagem'
    throw {
        nome: e.name,
        mensagem: e.message,
        data: new Date
    }
}

function imprimiNomeGritado(obj){
    try {
        console.log(obj.name.toUpperCase()+'!!!')
    } catch (error) {
        tratarErro(error)
    } finally { // o "finally" é opicional, ele quando declarado sempre será lançado, com ou sem erro
        /* Nesse caso se der erro, o "finally" não será exibido porque o trataErro usa um "throw",
           que interrompe a aplicação imediatamente */
        console.log('Final')
    }

}

const pessoa = { nome: 'Ana', age: 25 }

imprimiNomeGritado(pessoa) // vai dar erro porque o Objeto "pessoa" está escrito "nome" e não "name" como a função pega