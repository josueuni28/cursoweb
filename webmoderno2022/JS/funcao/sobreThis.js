/**
 * O "this" em uma função pode variar, dependendo do contexto que foi chamado.
 * Em geral o "this" (normal, sem ser função arrow) aponta para o próprio elemento que foi associado
 * 
 * Veja uns exemplos:
 * function f1(){ console.log(this === window) } // Função criada no escopo global
 * 
 * f1() // Chamando ela no escopo global
 * Resultado: true
 * 
 * document.getElementsByTagName('body')[0].onclick = f1
 * Clicando na página. Resultado: false
 * // Desse modo se você clicar na página vai dar "false"
 * // Porque agora ela aponta o "this" para o próprio "body"
 * 
 */

/**
 * Diferente da função tradicional, se você criar a mesma função acima, porem no formato arrow
 * const f2 = () => console.log(this === window)
 * 
 * Ela não vai variar e sempre vai o "this" apontar para o Objeto/Função associado no momento da criação
 * Que nesse exemplo, independente aonde ela foi chamada/associado, sempre o
 * "this" vai apontar para "window"
 * 
 * // O "this" nunca muda o contexto em que foi criado em uma função Arrow
 */

/**
 * Um mode de amarrar o "this" a função/Ojeto de origem é fazendo o uso do ".bind()"
 * Veja os o exemplo abaixo:
 */

const pessoa = {
    saudacao: 'Olá Mundo',
    falar(){ // Colocar função diretamente no Objeto -> ES2015
        console.log(this.saudacao)
    }
}

pessoa.falar()

const fala = pessoa.falar // Aqui vai gerar um comflito (Funcional entre OO) e o resultado sera "undefined"

fala()

// Solução usando o .bind()
const sauda = pessoa.falar.bind(pessoa) // Amarra o "this" ao objeto pessoa

sauda()

/**
 * MODOS DE AMARRAR O "this"
 */

function Estado() {
    this.idade = 0

    const self = this //Esse declaração é só para a solução 2)

    // Vai dar NaN porque o "this" vai referenciar a função "setInterval"
    setInterval(function(){
        this.idade++
        console.log('O erro: ',this.idade)
    }, 1000);

    // 1) Resolvendo com o .bind()
    setInterval(function(){
        this.idade++
        console.log('Solução .bind(): ',this.idade)
    }.bind(this), 1000);

    // 2) Resolvendo com uma const definida no escopo da função que recebe o "this"
    setInterval(function(){
        self.idade++
        console.log('Solução com "const": ',self.idade)
    }, 1000);

    // 3) Resolvendo com a escrita arrow 
    setInterval(()=>{
        this.idade++
        console.log('Solução com arrow: ',this.idade)
    }, 1000);
}

new Estado
//Estado() //Pode chamar assim também