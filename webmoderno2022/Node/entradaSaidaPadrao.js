// Usando a entrada e saida padrão com o "process"
const os = require('os')
/* Usado o "os" do sistema para não dar problema de compatibilidade com outros sistemas
   por conta da quebra de linha "\n" e "\r", que em cada OS é diferente */
const anonimo = process.argv.indexOf('-a') !== -1

if(anonimo){
    process.stdout.write(`Fala anônimo!${os.EOL}`)
    process.exit() // Encerrar a aplicação de imediato (Nesse caso, não é necessário, colocado para fins didáticos)
}else{
    process.stdout.write('Informe o seu nome: ')
    process.stdin.on('data', data => {
        const nome = data.toString().replace(`${os.EOL}`,'')
        // usado o replace() porque vem junto com o "data" o Enter que o usuário pressionou

        process.stdout.write(`Fala ${nome}!${os.EOL}`)
        process.exit()
    })
}