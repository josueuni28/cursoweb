const nome = 'Josué'

//Alguns métodos com String
console.log(nome.charAt(3))
console.log(nome.charAt(7)) // não acusa erro
console.log(nome.charCodeAt(3))
console.log(nome.indexOf('s'))
console.log(nome.substring(2))
console.log(nome.substring(1,3))

console.log(nome.replace('o','s'))
console.log(nome.replace(/\w/g,'é'))

console.log('html,css,js,php,nodejs'.split(','))