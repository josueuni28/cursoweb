class Pessoa {
    constructor(nome){
        this.nome = nome
    }
    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()

// document.getElementsByTagName('body')[0].onclick = p1.falar
// Colocando todo o código da classe no browser o nome fica "undefined", por causa que o "this" pode variar


const CriarPessoa = nome =>{
    return {
        falar(){
            console.log(`O meu nomé é ${nome}`)
        }
    }
}

const p2 = CriarPessoa('Maria')
p2.falar()

// document.getElementsByTagName('body')[0].onclick = p2.falar
// Colocando o código da função factory o resultado sai como o esperado "Maria", por causa do contexto léxico


//------------------------------------------------------------------
// Transformando a classe Pessoa em uma função contrutora:
// (Terá o mesmo comportamento da função factory no browser)
function novaPessoa(nome){

    this.nome = nome

    this.falar = ()=>{
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p3 = new novaPessoa('Roberto')
p3.falar()
console.log(p3.nome)

// document.getElementsByTagName('body')[0].onclick = p3.falar

