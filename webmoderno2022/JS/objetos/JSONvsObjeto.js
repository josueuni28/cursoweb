//JSON é um formato de dados, permite troca de informação e a interação entre sistemas diferentes

const meuObjeto = {
    nome: 'Igor', idade: 35, altura: 1.95, casado: false, irProgramar(){ return 'Olá Mundo' }
}

const meuJSON = JSON.stringify(meuObjeto) // Convertendo um Objeto para JSON

console.log(meuJSON)
// Funções não são armazenadas no JSON apenas dados como Números, Strings, Objetos, Array e Boleanos

const novoJSON = '{"valA": 1, "valB": 78.91, "valC": "Uma string", "valD": true, "valE": {}, "valF": []}'
/* Em um formato JSON, "Nomes dos Atributos" e valores "String",
   obrigatóriamente tem que ter Aspas Duplas */

const novoObjeto = JSON.parse(novoJSON) // Covertendo um JSON para Objeto

console.log(novoObjeto)
