// ISSO NÃO É RECOMENDADO
global.MinhaFuncao = Object.freeze({
    saudacao(){
        return 'Olá Mundo'
    },
    nome: 'Função perigosa'
})
// Usadoo Object.freeze() para impedir modificações no objeto já que ele ficara global
