export default function handler(req, res) {
    
    if(req.method === 'GET'){
        handlerGet(req, res)
    }else{
        // Caso seja um método diferente do 'GET' retorna o '405' que significa que a API não suporta o método
        res.status(405).send('Method Not Allowed')
    }

}

function handlerGet(req, res) {
    res.status(200).json({
        id: 3,
        nome: 'Maria',
        email: 'mariamaria@xdjj.com'
    })
}