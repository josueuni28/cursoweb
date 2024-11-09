const modoDev = process.env.NODE_ENV !== 'production'
// Verificando se 'NODE_ENV' foi setado para 'production', se foi o 'modoDev' será 'false', se não, será 'true'
// O 'NODE_ENV' foi configurado no 'package.json', setado quando colocar o script 'run build'
const webpack = require('webpack') // Chamando o Webpack
const miniCssExtract = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const optimizeCss = require('css-minimizer-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin");

// Configurações do Webpack:
module.exports = {
    mode: modoDev ? 'development' : 'production', // O modo, tem o 'development' que é para desenvolvimento e 'production' arquivo final
    entry: './src/index.js', // Local do arquivo principal
    output: {
        // (Opcional) Configurando o nome final do arquivo e a pasta
        filename: 'app.js', // O padrão é 'main.js'
        path: __dirname + '/build' // O padrão é '/dist'
    },
    devServer: { // Configurando o servidor de desenvolvimento
        static: "./public",
        port: 3000
    },
    optimization: {
        minimizer: [
            new TerserPlugin({ // É opcional já que o Webpack mimifica por padrão o JS no modo 'production'
                parallel: true, // Para mimificar mais rápido
                terserOptions: {
                    ecma: 6,
                },
            }),
            new optimizeCss({}) // Para mimificar o CSS
        ]
    },
    plugins: [
        new miniCssExtract({
            filename: 'estilo.css'
        }),
        new CopyPlugin({
            patterns: [
              { context: "./src", from: "**/*.html" },
              { context: "./src", from: "imgs/**/*" },
            ],
          })
    ],
    module: {
        // Criando a regras...
        rules: [{ // Regra para reconhecer e tratar o CSS
            test: /\.s?[ac]ss$/, // Expressão regular para ler .css/.sass/.scss
            use: [ // Esses módulos precisam ser baixados pelo comando 'npm i ...'
                miniCssExtract.loader, // Chamando o 'miniCssExtratc' para a regra.
                /* O 'miniCssExtract' é conflitante com o 'style-loader', porque o mini cria um
                   nome arquivo css, e não injeto como o loades, nesse caso, como vamos extrair
                   apartir de agora, comentaremos o 'style-loader' */
                //'style-loader', // Adiiciona/Injeta o CSS dentro do HTML, com a tag <style>
                'css-loader', // Interpreta Import, url() etc... do CSS
                'sass-loader' // Trata os arquivos SASS
            ]
        },{
            test: /\.(png|jpg|svg|gif)$/, // Regra para reconhecer as imagens
            use: ['file-loader'] // Usando o 'file-loader' para tratar as imagens
        },{
            test: /\.(ttf|otf|eot|svg|woff(2)?)$/, // Regra para reconhecer as imagens
            use: ['file-loader'] // Usando o 'file-loader' para tratar as imagens
        }]
    }
}
// Após isso é só dar um 'npm start' (Dev) ou 'npm rum build' (Production)