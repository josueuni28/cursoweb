import React, { Component } from "react";
// Importando o React e tirando de dentro de 'react' o 'Component'

// Criando um Component com Classe
export default class Saudacao extends Component {
    /*
      Para acessar os parâmentos/propriedades de um Componente, diferente do Componente 'funcional'
      com Classe se referência 'this.props. + oNomeDoParametro'.
      Porém o atributos de 'this.props' é somente leitura, não é possível alterar, para
      conseguir fazer a manipulação é preciso usar o Atributo 'state'
    */
    state = {
        tipo: this.props.tipo,
        nome: this.props.nome
    }

    // Criando uma função para 'definir' a alteração no input do 'Tipo'
    setTipo(e) {
        // O 'e' passado como parâmetro é o 'e' do evento 'onChange'
        
        // Para manipular o Atributo 'state' usa-se o 'this.setState' passando um Objeto como parâmetro
        this.setState({ tipo: e.target.value })
        // Alterando o 'state.tipo' com o valor atual que está no input

        /*
        // Exemplo de um outro tipo de alteração que é possível fazer
        const bla = this.state.tipo + 'Bla'
        this.setState({ tipo: bla })
        */
    }

    // Criando a função para 'definir' a alteração no input do 'Nome'
    setNome(e) {
        this.setState({ nome: e.target.value })
    }

    // Chamando o 'render()' da Classe para fazer a 'renderização' do Componente
    render() {
        const {tipo, nome} = this.state
        // Nesse caso ao invés de pegar os parâmetros direto do 'this.props', pegando do 'state'

        // Retornando a renderização
        return (
            <div>
                <h1>{tipo} {nome}!</h1>
                <hr />
                {/* Por padrão, todo tipo de 'input' criando com o React são estáticos e não
                    podem ser modificados, para conseguir interagir com eles é preciso usar 'eventos'.
                    Nesse caso, usando o evento 'onChange' para capturar a mudança no input e
                    fazer as manipulações */}
                <input type="text" placeholder="Tipo..." onChange={e => this.setTipo(e)} value={tipo} />
                <input type="text" placeholder="Nome..." onChange={e => this.setNome(e)} value={nome} />
            </div>
        )
    }

}