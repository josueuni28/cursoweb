class Lancamento {
    constructor(nome = 'Genérico', valor = 0){
        this.nome = nome
        this.valor = valor
    }
}

class ClicoFinanceiro {
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos){
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario(){
        const calc = this.lancamentos.reduce((a, b) => a.valor + b.valor)
        return calc
    }
}

const salario = new Lancamento('salario',4500)
const luz = new Lancamento('luz',-220)

const contas = new ClicoFinanceiro(8,2020)
contas.addLancamentos(salario, luz)

console.log( contas.sumario() )

// Heranças em Classe (Por baixo dos panos são os mesmos "prototypes", apenas muda a forma de escrever)

class Avo {
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao = 'Programador'){
        super(sobrenome) // Com super() chama a função Construtora do Avo e insere o sobrenome
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor(){
        super('Silva')
        /* Mesmo caso do Pai para o Avo. Porém aqui não é necessário passar também profissão dentro
           do super() porque ela já está definido por padrão "Programador", logo, como não foi passado
           aqui nesse exemplo, ele vai assumir o valor Padrão do Pai "Programador". Se quisesse mudar
           era só passar um outro nome de profissão */
    }
}

const filho = new Filho
console.log(filho)
/* Com as heranças o "filho" herda o atributo do Avo que foi passado para o Pai e o atributo
   do Pai que passou para ele */