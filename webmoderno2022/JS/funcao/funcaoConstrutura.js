function Carro(velocidadeMaxima = 200, delta = 5) {
    let velocidadeAtual = 0 // variável interna

    //metodos públicos
    this.acelerar = function () {
        if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        }else{
            velocidadeAtual = velocidadeMaxima
        }
    }

    this.getVelocidadeAtual = function(){
        return velocidadeAtual
    }
}

const uno = new Carro

console.log('uno:',uno.getVelocidadeAtual())
uno.acelerar()
console.log('uno:',uno.getVelocidadeAtual())

const ferrari = new Carro(350, 60)

console.log('ferrari:',ferrari.getVelocidadeAtual())
ferrari.acelerar()
console.log('ferrari:',ferrari.getVelocidadeAtual())


console.log(typeof Carro) // Carro é uma função construtura/Uma "classe" (Um molde)
console.log(typeof ferrari) // Apartir de Carro podemos criar Objetos