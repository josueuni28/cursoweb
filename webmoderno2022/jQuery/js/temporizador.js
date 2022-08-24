// Usando o protetor do símbolo dollar do jQuery
(function ($) {
    $.fn.temporizador = function (opcoes) {
        /* Caso os atributos 'mensagem' e 'horario' não sejam passados, define os valores padrão,
           da forma tradicional do jQuery */
        const opcoesFinais = $.extend({
            mensagem: 'Em breve!',
            horario: '23:59:59'
        }, opcoes)

        // Criando o 'display' do temporizador
        const horaDezena = $('<span class="digito">').html('0')
        const horaUnidade = $('<span class="digito">').html('0')
        const minutoDezena = $('<span class="digito">').html('0')
        const minutoUnidade = $('<span class="digito">').html('0')
        const segundoDezena = $('<span class="digito">').html('0')
        const segundoUnidade = $('<span class="digito">').html('0')
        
        // Criando os separadores
        const separadorHora = $('<span class="separador">').html(':')
        const separadorMinuto = $('<span class="separador">').html(':')

        // Criando o elemento do mensagem e passando a mensagem
        const mensagem = $('<div class="mensagem">').html(opcoesFinais.mensagem)

        // Adicionando a classe 'temporizador' ao elemento que invocou o plugin
        $(this).addClass('temporizador')

        // Adicionando todos elementos nele
        $(this).append(horaDezena, horaUnidade, separadorHora, minutoDezena, minutoUnidade, separadorMinuto, segundoDezena, segundoUnidade, mensagem)
        
        // Criando uma função 'regex' para identificar os dígito inseridos no atributo 'horário'
        const regex = new RegExp(/(\d\d):(\d\d):(\d\d)/)

        // Aplicando a função 'regex' ao atributo 'horario'
        const horarioAlvo = regex.exec(opcoesFinais.horario) // Já separa os grupos do Regex

        //console.log(horarioAlvo)

        // Criando a função de 'tempo'
        let temporizador = setInterval(() => {
            const agora = new Date()
            const alvo = new Date()

            // Modificando o horário da constante 'alvo' para o que foi informado
            alvo.setHours(horarioAlvo[1])
            alvo.setMinutes(horarioAlvo[2])
            alvo.setSeconds(horarioAlvo[3])

            // Fazendo o cálculo da diferença (O resulta é em 'milliseconds')
            const diferenciaEmMilli = alvo.getTime() - agora.getTime()

            // Verifica se ainda existe uma diferença
            if(diferenciaEmMilli >= 0) {
                /* Caso sim, transforma a constante que calculou os a diferença em horário padrão,
                   com a chamada do função 'new Date()' e o método 'toISOString' (que faz a
                    transformação), e já aplica o função 'regex' para pegar o tempo */
                const diferenca = regex.exec( new Date(diferenciaEmMilli).toISOString() )

                //console.log(diferenca)
                
                // Aplica os 'caracteres' de tempo nos elementos separadamente
                horaDezena.html(diferenca[1][0])
                horaUnidade.html(diferenca[1][1])

                minutoDezena.html(diferenca[2][0])
                minutoUnidade.html(diferenca[2][1])

                segundoDezena.html(diferenca[3][0])
                segundoUnidade.html(diferenca[3][1])
            }else{
                // Caso não tenha mais diferença, limpa o temporizador
                clearInterval(temporizador)
            }
        }, 1000)

        return this
    }
})(jQuery)