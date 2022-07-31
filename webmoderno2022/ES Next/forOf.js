// Percorre diretamente os valores
for(let char of 'Desenvolvedor'){
    console.log(char)
}

const frutas = ['Banana','Abacaxi','Laranga']
for (const fruta of frutas) {
    console.log(fruta)
}

/* Objetos não são interavéis, não permite
const obj = { nome:'Luana', idade:32, estado:'SP' }
for(let valor of obj) {
    console.log(valor)
}
*/

// Em Map() já permite
const assustosMap = new Map([
    ['Politica',{abordado: false}],
    ['Religião',{abordado: false}],
    ['JavaScript',{abordado: true}]
])

for (const assunto of assustosMap) {
    console.log(assunto)
}

// O Destructuring funciona também funciona nessas duas formas
for (const [chave, valor] of assustosMap) {
    console.log(chave, valor)
}

for (const [chave, valor] of assustosMap.entries()) {
    console.log(chave, valor)
}