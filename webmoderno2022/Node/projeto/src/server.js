const express = require('express')
const banco = require('./bancoDeDados')
const porta = 3003

const app = express()

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.get('/produtos',(req,res, next)=>{
    res.send(banco.getProdutos())
})

app.get('/produtos/:id',(req,res, next)=>{
    res.send(banco.getPoduto(req.params.id))
})

app.post('/produtos',(req,res, next)=>{
    const produto = banco.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.put('/produtos/:id',(req,res, next)=>{
    const produto = banco.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.delete('/produtos/:id',(req,res, next)=>{
    const produto = banco.deletaProduto( req.params.id )
    if(produto == 'Error') res.send(`Produto #${req.params.id} não encontrado`)
    res.send(produto)
})


app.listen(porta, ()=>{
    console.log(`Servidor rodando em localhost, porta: ${porta}`)
})