/* Criado um Objeto com os atributos sendo o nome das tags HTML e cada atributo armazenando as
   cores dos elementos. E chamando a função get, que retorna o valor do parãmetro passado (Nesse caso, a cor) */
const colors = {
    p: '#388e3c',
    div: '#1565c0',
    span: '#e53935',
    selection: '#f67809',
    ul: '#5e35b1',
    ol: '#fbc02d',
    header: '#d81b60',
    nav: '#64dd17',
    main: '#00acc1',
    footer: '#304ffe',
    form: '#9f6581',
    body: '#25b6da',
    padrao: '#616161',
    get(tag) {
        return this[tag] ? this[tag] : this.padrao
    }
}

document.querySelectorAll('.tag').forEach(elemento => {
    const tagName = elemento.tagName.toLowerCase() // Pegando o nome da tag e deixando tudo minúsculo

    elemento.style.borderColor = colors.get(tagName) // Chamando o Objeto "colors" e passando o nome da tag

    // Verifica se o elemento possúi uma classe chamada 'nolabel', caso não, cria o elemento "label"
    if(!elemento.classList.contains('nolabel')){
        const label = document.createElement('label')
        label.style.backgroundColor = colors.get(tagName)
        label.innerHTML = tagName

        // Insere o elemento label criado no começo do elemento com a class "tag"
        elemento.insertBefore(label, elemento.childNodes[0])
    }

})