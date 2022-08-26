import $ from 'jquery' // Importando o jQuery

/* Para resolver o problema de não executar o 'plugin', quando a página que tem o código é
   carregada (Veja em 'galery.html').
   Ao inves de usar o 'eval', usando uma outra técnica de armazenar os códigos/funções que precisam
   ser chamadas em um array de 'callback' */
const loadHtmlSuccessCallbacks = []
/* Criando a constante que armazenará os códigos/funções a ser chamados quando uma página for
   carregada via ajax com sucesso */

// Criando uma função para verificar se o código/função a ser passado, já foi incluso na constante
export function onLoadHtmlSuccess(callback) {
    // Se o código ainda não foi incluso, inclui na constante, se já foi, ignora
    if(!loadHtmlSuccessCallbacks.includes(callback)){
        loadHtmlSuccessCallbacks.push(callback)
    }
}

// Criando a função para inserir as 'requições' html nas tags da 'index.html'
function loadIncludes(parent) {
    if(!parent) parent = 'body'
    $(parent).find('[wm-include]').each(function(i, e){
        // Procurando todos elementos que tenham a propriedade 'wm-include'
        const url = $(e).attr('wm-include') // armazenando o valor
        
        $.ajax({ // Fazendo a requisão ajax
            url,
            success(data){
                // Caso dê sucesso, insere o conteúdo obtido no elemento e remove o atributo (Para evitar de inserir novamente)
                $(e).html(data)
                $(e).removeAttr('wm-include')

                /* Percorrendo todos os index da constante que armazena os códigos/funções a serem
                   executados, e para cada código encontrado, executa ele */
                loadHtmlSuccessCallbacks.forEach(callback => callback())

                // Chama a mesma função para procurar elementos dentro requisção obtida
                loadIncludes(e)
            }
        })
    })
}

loadIncludes() // Chamando a função