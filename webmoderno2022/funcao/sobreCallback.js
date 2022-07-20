// Callback é o retorno de uma operação

const marcas = ['BWM','Mercedes','Honda','GM','Jeep']

function indexes (nome, index){
    console.log(`${index+1}. ${nome}`) // Nesse caso não será preciso o uso do "Return"
}

// Exemplo de um callback
marcas.forEach(indexes)

//------------------------------------------------------------------

// Fazendo manualmente
const notas = [7.1,8.2,4.3,9.7,2.5,1.9,5.4,3.2,8.4]

const notasBaixas = []
for (const i in notas) {
    if(notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}
console.log(notasBaixas)


// Usando um callback
const notasBaixas2 = notas.filter(nota => nota < 7) // Se a expressão for verdadeira inclui na nova const

console.log(notasBaixas2)

//----------------------------------------------------------------------

// Exemplo de um callback no browser

// Usar no console do browser para ver o efeito:

// document.getElementsByTagName('body')[0].onclick = (evento) => console.log('Evento disparado!')
// Capturando o evento, não é obrigatório, porque nesse caso não será usado nada do evento

// document.getElementsByTagName('body')[0].onclick = () => console.log('Evento disparado!')
// Sem a captura do evento