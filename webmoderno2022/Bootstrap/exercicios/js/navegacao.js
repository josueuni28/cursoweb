(function () {
    function navegarViaAjax(hash) {
        if (!hash) return

        const link = document.querySelector(`[wm-link='${hash}']`)
        if(!link) return

        const destino = document.querySelector('[wm-link-destino]')

        const url = '/Bootstrap/exercicios' + hash.substring(1)
        fetch(url)
            .then(resp => resp.text())
            .then(html => {
                destino.innerHTML = html
            })
    }

    function configurarLinks() {
        const sel = document.querySelectorAll('[wm-link]')
        //console.log(sel)

        document.querySelectorAll('[wm-link]')
            .forEach(link => {
                link.href = link.attributes['wm-link'].value
                //console.log(link.href)
            })
    }

    function navegacaoInicial() {
        if (location.hash) {
            navegarViaAjax(location.hash)
        } else {
            const primeiroLink = document.querySelector('[wm-link]')
            //console.log(primeiroLink)
            navegarViaAjax(primeiroLink.hash)
        }
    }

    window.onhashchange = e => navegarViaAjax(location.hash)
    
    configurarLinks()
    navegacaoInicial()
})()