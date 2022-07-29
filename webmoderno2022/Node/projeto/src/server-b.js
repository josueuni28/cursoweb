const express = require('express')
const porta = 3003

const app = express()

// O atributo .use() executa em qualquer endereço/requisição
/*
app.use((req,res, next)=>{
    console.log('Eu estou em todos os lugares xD')
    res.send('Olá eu aqui!')
})
*/

// Usando os middlewares, com mais de uma requisição GET
app.get('/produtos',(req,res, next)=>{
    console.log('Olá Mundo!')
    next() // Depois dessa execução ele vai para o próximo get
})

app.get('/produtos/:id',(req,res, next)=>{
    res.send({ nome: 'Notebook', preco: 2.350})
})


app.listen(porta, ()=>{
    console.log(`Servidor rodando em localhost, porta: ${porta}`)
})