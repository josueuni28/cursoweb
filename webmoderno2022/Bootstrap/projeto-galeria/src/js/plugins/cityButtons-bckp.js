import $ from 'jquery' // Importando o jQuery

// Importando a função para incluir a chamada do plugin quando uma página for carregada
import { onLoadHtmlSuccess } from '../core/includes'

const duration = 300

// Criando a função para 'filtrar' as fotos pelas cidades
function filterByCity(city) {
    $('[wm-city]').each(function (i, e) {
        const isTarget = $(this).attr('wm-city') === city || city === null
        /* Verifica se o atributo que está sendo percorrido é igual o passado no filtro,
           se for 'isTarget' será 'true', se não for, será 'null' */
        if (isTarget) {
            // Se 'true', tira a class 'd-none' do elemento que é parente e aplica o 'fadeIn'
            $(this).parent().removeClass('d-none')
            $(this).fadeIn(duration)
        } else {
            /* Se 'null', aplica o fadeOut (para desaparecer) e no callback, aplica a class 'd-none' no
               parente para ele não ficar sendo exibido e ocupando espaço */
            $(this).fadeOut(duration, () => {
                $(this).parent().addClass('d-none')
            })
        }
    })
}

// Criando o Plugin 'cityButtons'
$.fn.cityButtons = function () {
    const cities = new Set
    // Definindo a constante 'cities' como 'Set', para que não seja possível ter repetições de itens
    $('[wm-city]').each(function (i, e) {
        // Adicionando os nomes das cidades em 'cites', com o 'Set', se for repetido ele 'ignora'
        cities.add($(e).attr('wm-city'))
    })

    /* Transformando o 'cities' em array e aplicando o '.map', para converter os nomes da cidades
       em um elemento 'botão' com classe e já incluindo o evento 'click' configurado */
    const btns = Array.from(cities).map(city => {
        const btn = $('<button>').addClass(['btn', 'btn-info']).html(city)
        btn.click(e => filterByCity(city))
        return btn
    })

    // Criando o botão 'Todas as cidade'
    const btnAll = $('<button>').addClass(['btn', 'btn-info', 'active']).html('Todas cidades')
    btnAll.click(e => filterByCity(null))
    btns.push(btnAll) // Incluindo esse botão no conjunto de botões

    // Criando um elemento agrupador de botões com a classe 'btn-group' do Bootstrap 
    const btnGroup = $('<div>').addClass(['btn-group'])
    btnGroup.append(btns) // Adicionando o conjunto de botões a esse elemento

    // Aplicando todo o conjunto de botões criado e configurado ao elemento que chamou esse 'Plugin'
    $(this).html(btnGroup)

    return this // Retornando o 'this' para permitir o encadeamento do jQuery ao plugin
}

/* Adicionado a chamada do plugin na constante que armazena as códigos/funções, para ser chamado 
   quando uma página for carregada */
onLoadHtmlSuccess(function(){
    $('[wm-city-buttons]').cityButtons()
})