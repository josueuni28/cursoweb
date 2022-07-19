Number.prototype.entre = function(inicio,fim) {
    return this >= inicio && this <= fim
}
//-------------------------------------------------------------------------

const nota = 7.1

if(nota > 7){
    console.log('Aprovado!')
}

// quando tem um sentença de uma linha não precisa usar chaves
if(nota > 9.5) console.log('Aprovado com maestria! :)')

if(nota >= 5){
    console.log('Passou')
}else{
    console.log('Precisa de recuperação')
}

if(nota === 10){
    console.log('Você é um(a) genio(a)!')
}else if(nota.entre(7, 9.9)){
    console.log('Você foi aprovado(a)!')
}else if(nota.entre(5, 6.9)){
    console.log('Você passou')
}else{ // O "else" no final não é obrigatório
    console.log('Você não passou, precisa de recuperar a matéria')
}

const dinheiro = 1000

// "switch" não retorna verdadeiro ou false
switch (dinheiro) {
    case 1000:
        console.log('Da para comprar muita coisa')
        break
    case 900:
        console.log('Consegue comprar')
        // break
        // Se não colocar o "break" ele sai executando os blocos a baixo
    case 800: case 700:
        // Você pode coloar mais de um case para um bloco
        console.log('Você vai precisar pensar')
        break
    case 600, 500, 400, 300:
        // Forma abrevidad de escrever vários cases para um bloco
        console.log('A situação é delicada...')
        break
    default:
        // O "default" não é obrigátorio, é disparado quando nenhum dos cases são atendidos
        console.log('Ou você tem mais de 1000 ou menos que 300 :)')
        // break
        // Você não é obrigado a colocar o "default" no final, porém se colocar ele em outro posição tem que colocar o "break" também
}