const express = require('express')

const app = express()

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.get('/HTML/usuarios',(req,res, next)=>{
    console.log('Olá Mundo!')
    res.send(`<h1>Olá Mundo!</h1>`)
})

app.post('/HTML/usuarios',(req,res, next)=>{
    let le = ''
    console.log(req.body)
    const nome = req.body.nome || 'Anônimo'
    
    for (const attr in req.body) {
        le += `<div><strong>${attr}</strong>: ${req.body[attr] || 'Ausente de informação...'}</div>`
    }

    res.send(`<h1>Olá <strong>${nome}</strong>!</h1>Os dados recebidos foram:<br><br>${le}`)
})

app.post('/HTML/usuarios/altera',(req,res, next)=>{
    let le = ''
    console.log(req.body)
    const nome = req.body.nome || 'Anônimo'
    
    for (const attr in req.body) {
        le += `<div><strong>${attr}</strong>: ${req.body[attr] || 'Ausente de informação...'}</div>`
    }

    res.send(`<h1>As informações do usuário com <strong>id:</strong> ${req.body.id}, foram alteradas</h1>Os dados alterados foram:<br><br>${le}`)
})

app.listen(5500, ()=>{
    console.log('Servidor escutando...')
})