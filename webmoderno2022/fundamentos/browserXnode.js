/**
 *     IMPORTANTE: Dependendo de onde você está rodando JS alguns padrões mudam
 *  */

/*
No browser "this" sem nenhum escopo significa o Objeto "window"
O "window" no Node é equivalente o Objeto "global"
*/

abc = 123 // Vai para o escopo global do Node // Isso significa que você pode acessar essa variável mesmo sem exportat
// ( abc = 123 ) é o mesmo que ( var abc = 123 ) no browser, sem um escopo

this.c = 500 // No browser seria equivalente a "window.c"
this.a = 'olá'

console.log(global.abc)
console.log(module.exports.c)
console.log(module.exports)
/* No Node o "c" vai para o module.export, porque diferento do browser o Node trata
cada arquivo individual, e o "this" representa que essa valor está acessível em outro local */