const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'

const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data

    const chinesMulher = pessoa => pessoa.genero == 'F' && pessoa.pais == 'China'
    const menorSalario = (a, b) => a.salario - b.salario
    const chinesa = funcionarios.filter(chinesMulher).sort(menorSalario)[0]
    // Dá para usar o .reduce() também para comparar e analisar o menor salário


    console.log(chinesa)
})