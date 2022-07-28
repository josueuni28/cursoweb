// Formas não convêncionais de exportar no NodeJS
this.ola = 'Olá Mundo'
exports.bemVindo = 'Bem-vindo(a)'
module.exports.ateLogo = 'Até o próximo exemplo!'

/* Porém você não pode atribuir um novo objeto ao "exports", pois tanto o "exports" quando o "this"
   apontam parra "module.exports" */

// Isso não será exportado/retornado
exports = {
    novo: 'Novo atributo'
}