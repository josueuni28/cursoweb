import React, { Component } from "react"
import "./Calculator.css"
// Você pode importar o 'css' diretamente sem precisar atribuir um nome
import Button from "../components/Button"
import Display from "../components/Display"

// Definindo os valores iniciais
/* Desconsiderando porque não está atribuindo corretamente com o setState({ ...inititalState })
const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
}
*/

export default class Calculator extends Component {

    constructor(props){
        super(props)

        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)
    }

    // Atribuindo manualmente porque o setState({ ...inititalState }), está falhando
    state = {
        displayValue: '0',
        clearDisplay: false,
        operation: null,
        values: [0, 0],
        current: 0
    }
    // Passando todos os valores do Objeto 'initialState' para o 'state' do Componente

    clearMemory(e){
        this.setState({
            displayValue: '0',
            clearDisplay: false,
            operation: null,
            values: [0, 0],
            current: 0
        })
        // Aplica os valores iniciais no 'state' para resetar a 'calculadora'
    }
    setOperation(operation){
        // Definindo a lógica quando pressionar os botões de operação

        if(this.state.current === 0){
            this.setState({ operation, current: 1, clearDisplay: true })
            /* Se o state.current for '0', armazena a operação, muda o 'current' para aportar o 'index' 1
               e define o display para limpar */
        }else{
            const equals = operation === '='
            const currentOperation = this.state.operation
            let calc = 0
            const values = [...this.state.values]
            /* Se o state.current não for igual a '0', verifica se a 'operation' pressiona foi o '=',
               armazena a primeira operação numa constate, define a let 'calc' e armazena os
               'values' em uma constante */

            if(currentOperation == '/'){
                calc = values[0] / values[1]

            }else if(currentOperation == '*'){
                calc = values[0] * values[1]

            }else if(currentOperation == '-'){
                calc = values[0] - values[1]

            }else{ // == '+'
                calc = values[0] + values[1]
            }
            // Realiza o calcula dependedo da operação escolhida

            if(isNaN(calc) || !isFinite(calc)){
                // Faz um tratamente de erro, caso gere um valor não numérico ou incorreto, abortando a operação
                return
            }

            values[0] = calc
            values[1] = 0
            // Atribui os novos valores a constate 'values'

            // Atualiza os 'this.state'
            this.setState({
                displayValue: String(calc),
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                clearDisplay: !equals,
                values
            })

        }
    }
    addDigit(n){
        if(n === '.' && this.state.displayValue.includes(n)){
            /* Verifica foi prescionado o ponto, se foi, vê se já tem um '.' (ponto) digitado,
               se já tiver ignora a operação */
            return
        }

        const clearDisplay = (this.state.displayValue === '0' && n !== '.') || this.state.clearDisplay
        // Faz a verificação se o 'display' está vazio

        const currentValue = clearDisplay ? '' : this.state.displayValue
        // Confere se o 'display' está vazio, se tiver atribui '' para a constante, se não atribuiu o valor do 'display'

        const displayValue = currentValue + n
        // Atualizar os valores do 'display'

        this.setState({ displayValue, clearDisplay: false })
        /* Atualiza o 'state' do 'displayValue' de acordo com o botão apertado e
           reseta o 'clearDisplay' */

        if(n !== '.'){
        // Verifica se o botão apertado foi o ponto, se não foi atualiza o 'values'

            const i = this.state.current
            // Pega o 'index' do 'values' atualmente que está sendo manipulado (se é o index '0' ou '1')
            const newValue = parseFloat(displayValue)
            // Converte o valor que está em String para Float

            this.state.values[i] = newValue;
            // Atualiza os 'values' do 'state' com o novo valor
        }

    }

    render(){
        return (
            <div className="calculator" >
                <Display value={this.state.displayValue} />
                <Button label="AC" click={this.clearMemory} triple />
                <Button label="/" click={this.setOperation} operation />
                <Button label="7" click={this.addDigit} />
                <Button label="8" click={this.addDigit} />
                <Button label="9" click={this.addDigit} />
                <Button label="*" click={this.setOperation} operation/>
                <Button label="4" click={this.addDigit} />
                <Button label="5" click={this.addDigit} />
                <Button label="6" click={this.addDigit} />
                <Button label="-" click={this.setOperation} operation/>
                <Button label="1" click={this.addDigit} />
                <Button label="2" click={this.addDigit} />
                <Button label="3" click={this.addDigit} />
                <Button label="+" click={this.setOperation} operation />
                <Button label="0" click={this.addDigit} double />
                <Button label="." click={this.addDigit} />
                <Button label="=" click={this.setOperation} operation/>
            </div>
        )
    }
}
