const tecnologias = new Map()

tecnologias.set('react', { framework: false })
tecnologias.set('angular', { framework: true })

console.log(tecnologias.get('react'))
console.log(tecnologias.get('angular').framework)

const chavesVariadas = new Map([ // Criando diretamente
    ['Nome','Rodrigo'],
    [123,'Soma'],
    [{},'Objeto'],
    [function(){},'Função']
])

console.log(chavesVariadas.has(123))
chavesVariadas.delete(123) // Retorna true porque encontrou e deletou
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.get('Nome'))
console.log(chavesVariadas.size)

chavesVariadas.set(123,'a')
chavesVariadas.set(123,'b')
chavesVariadas.set(123,'c') // Como as chaves são únicas, vai ficar o último valor atribuido

console.log(chavesVariadas)
