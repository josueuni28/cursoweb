<template>
  <div class="calculator">
    <Display :value="displayValue" />
    <Button label="AC" triple @onClickCalcButton="clearMemory" />
    <Button label="/" operation @onClickCalcButton="setOperation" />
    <Button label="7" @onClickCalcButton="addDigit" />
    <Button label="8" @onClickCalcButton="addDigit" />
    <Button label="9" @onClickCalcButton="addDigit" />
    <Button label="*" operation @onClickCalcButton="setOperation" />
    <Button label="4" @onClickCalcButton="addDigit" />
    <Button label="5" @onClickCalcButton="addDigit" />
    <Button label="6" @onClickCalcButton="addDigit" />
    <Button label="-" operation @onClickCalcButton="setOperation" />
    <Button label="1" @onClickCalcButton="addDigit" />
    <Button label="2" @onClickCalcButton="addDigit" />
    <Button label="3" @onClickCalcButton="addDigit" />
    <Button label="+" operation @onClickCalcButton="setOperation" />
    <Button label="0" double @onClickCalcButton="addDigit" />
    <Button label="." @onClickCalcButton="addDigit" />
    <Button label="=" operation @onClickCalcButton="setOperation" />
  </div>
</template>

<script>
import Button from '@/components/Button.vue'
import Display from '@/components/Display.vue'

export default {
    // OBS: Toda a explição da lógica da Calculadora já está menciona do projeto feito com o React.
    //      Esse Projeto segue a mesma lógica com as devidas adaptações para o VueJS.
    data: function(){
        return{
            displayValue: '0',
            clearDisplay: false,
            operation: null,
            values: [0, 0],
            current: 0
        }
    },
    components: {Button, Display},
    methods: {
        clearMemory(){
            // essa função faz o Objeto/Componente VueJS voltar ao seu estado inicial
            Object.assign(this.$data, this.$options.data())
        },
        setOperation(operation){
            if(this.current === 0){
                this.operation = operation
                this.current = 1
                this.clearDisplay = true
            }else{
                const equals = operation === '='
                const currentOperation = this.operation
                let calc = 0

                if(currentOperation == '/'){
                    calc = this.values[0] / this.values[1]
                }else if(currentOperation == '*'){
                    calc = this.values[0] * this.values[1]
                }else if(currentOperation == '-'){
                    calc = this.values[0] - this.values[1]
                }else{
                    calc = this.values[0] + this.values[1]
                }

                if(isNaN(calc) || !isFinite(calc)){
                    this.clearMemory()
                }

                this.values[0] = calc
                this.values[1] = 0

                this.displayValue = this.values[0]
                this.operation = equals ? null : operation
                this.current = equals ? 0 : 1
                this.clearDisplay = !equals
            }
        },
        addDigit(n){
            if(n === '.' && this.displayValue.includes('.')){
                return
            }

            const clearDisplay = (this.displayValue === '0') || this.clearDisplay
            const currentValue = clearDisplay ? '' : this.displayValue
            const displayValue = currentValue + n

            this.displayValue = displayValue
            this.clearDisplay = false

            if(n !== '.'){
                const i = this.current
                const newValue = parseFloat(displayValue)
                this.values[i] = newValue
            }
        }
    }
}
</script>

<style>
.calculator {
    height: 320px;
    width: 235px;
    border-radius: 5px;
    overflow: hidden;

    display: grid;
    grid-template-columns: repeat(4, 25%);
    grid-template-rows: 1fr 48px 48px 48px 48px 48px;
}
</style>