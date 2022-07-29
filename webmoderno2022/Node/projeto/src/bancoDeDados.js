const sequencia = {
    _id: 0,
    get id(){ return this._id++ }
}

const produtos = {}

function getProdutos(){
    return Object.values(produtos)
}

function getPoduto(id) {
    return produtos[id] || {}
}

function salvarProduto(obj) {
    if(!obj.id) obj.id = sequencia.id
    const mobj = obj || {}
    produtos[obj.id] = mobj

    return produtos[obj.id]
}

function deletaProduto(id) {
    if(id){
        delete produtos[id]
        return id
    }
    return 'Error'
}

module.exports = { getPoduto, getProdutos, salvarProduto, deletaProduto }