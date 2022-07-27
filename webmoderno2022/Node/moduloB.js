// Apenas o que é configurado para ser exportado pode ser acessado em outro arquivo
// Essa função "saudacao" não pode ser acessada, por não ter sido exportada
const saudacao = function () {
    return console.log('\nOLÁ TODOS E TODAS!!!\n')
}


// Forma convêncional para exportar um Objeto em uma única declaração
module.exports = {
    bomDia: 'Bom dia!',
    boaNoite(){
        return 'Boa noite!'
    }
}