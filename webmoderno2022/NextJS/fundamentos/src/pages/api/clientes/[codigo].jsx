export default function handler(req, res) {
    
    if(req.method === 'GET'){
        handlerGet(req, res)
    }else{
        // Caso seja um método diferente do 'GET' retorna o '405' que significa que a API não suporta o método
        res.status(405).send('Method Not Allowed')
    }

}

function handlerGet(req, res) {
    const codigo = req.query.codigo
    // Pegando os parâmetros com 'query'

    res.status(200).json({
        id: Number(codigo),
        nome: `Maria ${codigo}`,
        email: `mariamaria${codigo}@xd${codigo}.com`
    })
}