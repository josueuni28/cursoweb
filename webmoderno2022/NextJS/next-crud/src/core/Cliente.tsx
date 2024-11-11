export default class Cliente {
    // Definindo atributos "privados" com o uso de "#"
    // Para isso ajustar o arquivo "tsconfig.json" defindo o "target" para "ES2015" que já suporta esse recurso
    #id: string
    #nome: string
    #idade: number

    constructor(nome: string, idade: number, id: string = null){
        this.#nome = nome
        this.#idade = idade
        this.#id = id
    }

    // Setando para criar um "Cliente" vazio
    static vazio(){
        return new Cliente('', 0)
    }

    get id(){
        return this.#id
    }

    get nome(){
        return this.#nome
    }

    get idade(){
        return this.#idade
    }
}