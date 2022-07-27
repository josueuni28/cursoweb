// Antes de começar a ler os codigos o interpretador do JS coloca as "var" no todo do escopo
console.log('var a=',a) // Era para gerar erro porem, o JS giça a variavel para antes do console
var a = 2
console.log('var a=',a)

function hosting(){
    console.log('var b=',b)
    var b = 3
    console.log('var b=',b)
}

hosting()

// O efeito não acontece com tipo Let
/* // Gera erra
console.log('let c=',c)
let c = 2
console.log('let c=',c)
*/