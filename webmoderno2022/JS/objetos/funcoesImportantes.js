const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) // Pega todas as chaves do Objeto
console.log(Object.values(pessoa)) // Pega todas os valores
console.log(Object.entries(pessoa)) // Converte em um Array os atributos e valores do objeto

//                           usando o destruct, para já separar a chave e o valor
//                      poderia passar no modo tradicional ex: attr => {...},
//                          mas quando fosse exibir teria que colocar atrr[0] e attr[1]
Object.entries(pessoa).forEach(([chave, valor]) =>{
    console.log(`${chave}: ${valor},`)
})


Object.defineProperty(pessoa, 'dataNascimento',{
    enumerable: true, // Define se o atributo aparece nas listagens ou ficará oculto (Isso não impede de ser acessado)
    writable: false, // Define se o atributo poderá ser editado ou não
    value: '10/12/2005' // Definne diretamente o valor da chave/propriedade
})

pessoa.dataNascimento = '04/01/2020' // Não será feito a modificação porque o "writable" foi definido como false
console.log(pessoa)
console.log(Object.keys(pessoa)) // Se a propriedade "enumerable" estiver false o "dataNacimento" não será listado


// Object.assign (ES2015)
const dist = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }

Object.assign(dist, o1, o2)
/* O assign concatena todos os outros objetos para o Objeto de origem, nesse caso o "dist", e
   se tiver uma chave com o mesmo nome, nesse exemplo o "a", ele sobrescreve com o último valor encontrado */

console.log(dist)


Object.freeze(dist) // congela todo Objeto e não permite qualquer alteração
dist.a = 1 // vai ignorar a atribuição

console.log(dist.a)
