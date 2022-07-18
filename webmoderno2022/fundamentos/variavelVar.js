{
    {
        {
            {
                var sera = 'sera???'
            }
        }
    }
}
// Tipo var assume escopo global e pode ser reecrita e assumir novos valores definindo-a novamente ela

console.log(sera)


function teste(){
    var ola = 'Olá mundo'
    // Quando definida dentro de função só pode ser acessada na função
}

teste()
//console.log(ola) // Gera erro porque ela só foi definida na função

var nova = 1

{
    var nova = 2
    console.log(nova)
}

console.log(nova)

for(var i=0;i<10;i++) console.log(i)
// Como var assume escopo global, mesmo estando na criação de um laço ela fica acessível fora
console.log(i)