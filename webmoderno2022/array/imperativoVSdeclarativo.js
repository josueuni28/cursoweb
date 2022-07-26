const alunos = [
    {nome: 'João', nota: 6},
    {nome: 'Mirella', nota: 9},
    {nome: 'Augosto', nota: 7},
    {nome: 'Bia', nota: 5},
]

//IMPERATIVO (Como deve ser feito / Pouco reuso)
let total1 = 0
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota    
}
console.log(total1)

//DECLARATIVO (O que deve ser feito / Permite reuso) [Recomendado]
const pegaNota = aluno => aluno.nota
const soma = (agrega, atual) => agrega + atual
const total2 = alunos.map(pegaNota).reduce(soma)
console.log(total2)