import React, { Component } from "react";

/**
 * Continuação do exemplo de Componentes com Classe, nesse caso, falando sobre o Constructor e 'this'
 */

export default class Saudacao extends Component {
    
    // Você pode defibir o 'state' tanto dentro do Construcctor como fora
    state = {
        tipo: this.props.tipo,
        nome: this.props.nome
    }

    // Chamando o 'constructor' passando as 'props' da Classe
    constructor(props){
        super(props)
        // Dentro do Constructor e obrigatório chamar o super() para 'herdar' as propriedades

        // Definindo o quem o 'this' para a função 'setTipo'
        this.setTipo = this.setTipo.bind(this)
    }


    setTipo(e) {
        this.setState({ tipo: e.target.value })
    }

    
    setNome(e) {
        this.setState({ nome: e.target.value })
    }


    render() {
        const {tipo, nome} = this.state

        return (
            <div>
                <h1>{tipo} {nome}!</h1>
                <hr />
                <input type="text" placeholder="Tipo..." onChange={this.setTipo} value={tipo} />
                {/* Para passar o 'this.setTipo' sem se com arrow function (Como no input abaixo)
                    e nesse ter definido dentro do 'construtor' quem é o 'this' com a função 'blind',
                    sem definir isso, e passar o 'this.setTipo' direto o 'this' nesse caso, vai
                    referênciar outra coisa e não o 'this' da Classe */}
                <input type="text" placeholder="Nome..." onChange={e => this.setNome(e)} value={nome} />
            </div>
        )
    }

}