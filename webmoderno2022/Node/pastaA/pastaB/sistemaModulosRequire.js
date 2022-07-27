const moduloA = require('../../moduloA') // Pegando módulos em outras pastas
/* Cuidado com Letras Maúsculas e Minúsculas:
   Se digitar "moduloa" com o "A" minuscúlo, vai funcionar no Windows, no Mac
   porém não vai funncionar no Linux, e 90% dos servidores Node são rodados em Linux */

const c = require('./pastaC')
/* Como o arquivo JS dentro da pasta "pastaC" está nomeado para "index.js",
   não precisa especificar o nome do arquivo */

const http = require('http')
// Quando o módulo é nativo do Node (Ou foi instalado como Global), só é necessário colocar o nome do módulo

http.createServer((req, resp) =>{
    resp.write(`${moduloA.bemVindo} ao ${c.ola}`)
    resp.end()
}).listen(8080)