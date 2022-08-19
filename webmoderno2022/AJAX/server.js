const { response } = require('express');
const express = require('express')
const app = express()

app.use(express.static('.'))
// Para que todos os arquivos dessa pasta, sejam renderizados como estáticos

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/teste',(req,res, next)=>{
    res.send('Ok!')
})


/* Configurando o Multer para fazer o upload de arquivo, no exercício 'xmlHttpRequest2' */
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './upload') // Passando o local onde ficaram os arquivos enviados
    },
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`) // Configurando o nome do arquivo
    }
})

const upload = multer({ storage }).single('arquivo')
// Atribuindo o input type='file' name='arquivo' do exercício

app.post('/upload',(req,res, next)=>{ // Configurando a url de upload
    upload(req, res, err => { // Trantando a resposta da constante 'upload'
        if(err){
            return res.end(`Ocorreu um erro: ${err}`)
        }

        res.end('Upload concluído com sucesso!')
    })
})

app.post('/formulario',(req,res, next)=>{ // Configurando a url para fazer o 'fetch' com formulário
    // Como apenas exemplo, nesse caso ele vai mandar o que foi enviado de volta para o browser
    res.send({
        ...req.body, // 'Distibuindo' os dados enviados pelo corpo da requisão, no objeto a ser enviado
        id: 7 // Acresentando um dado a mais
    })
})

app.get('/parOuImpar',(req,res, next)=>{
    /* Formas do Express receber uma requisição:
       req.body   = Vem no 'corpo' da página
       req.params = Vem como um parâmetro depois da url, Ex: /parOuImpar/3
       req.query  = Vem como uma query na url, Ex: /parOuImpar?numero=3
    */

    // Verificando se o número passado é par ou impar
    const par = parseInt(req.query.numero) % 2 === 0

    res.send({ // Enviando a resposta...
        num: req.query.numero,
        parouimpar: par ? 'Par' : 'Impar'
    })
})

app.listen(3000, ()=>{
    console.log(`Servidor rodando em localhost, porta: 3000`)
})