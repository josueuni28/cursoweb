import Pessoa from './pessoa'
import moduloA from './modulos/moduloA' // Referenciando o 'moduloA' para o Webpack
import './assets' // Nesse caso, ele procura o arquivo padrão 'index.js'

/**
 * O Webpack, diferente do Gulp, encontra os arquivos apenas quando são importados, ai ele consegue
 * identificar o tipo e aplicar o tratamento correto para o arquivo, porém se o arquivo não for
 * referênciado ele não chega até o arquivo.
 */

const atendente = new Pessoa
console.log(atendente.comprimentar())