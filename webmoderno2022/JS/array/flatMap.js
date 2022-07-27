const escola = [{
    nome: 'Turma 1',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.1
    }, {
        nome: 'Ana',
        nota: 9.3
    }]
}, {
    nome: 'Turma 2',
    alunos: [{
        nome: 'Rebeca',
        nota: 8.9
    }, {
        nome: 'Roberto',
        nota: 7.3
    }]
}]

const pegaNotaAluno = aluno => aluno.nota
const pegaTurmaAlunos = turma => turma.alunos.map(pegaNotaAluno)

const todasAsNotas = escola.map(pegaTurmaAlunos)
// Resultado sem a crianção do método flatMap
console.log(todasAsNotas)


/* ---------------- Criando o Método flatMap ------------------ */
Array.prototype.flatMap = function(callback){
    /* Usando o métod .apply() no concat para definir que o "this" informado é o "this" do resultado
       do .map() (Sem o apply o "this" referêcia a própria função concat), e também porque o apply
       lê em formato de array os atributos, e o resultado do .map() vai ser um array */
    return [].concat.apply([], this.map(callback))
    // Tamém poderia chamar o concat assim: Array.prototype.concat.apply( ... )
}

const notasFinaisAlunos = escola.flatMap(pegaTurmaAlunos)
// Resultado com o flatMap
console.log(notasFinaisAlunos)