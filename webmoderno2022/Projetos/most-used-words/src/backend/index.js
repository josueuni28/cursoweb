const { ipcMain } = require('electron')
const pathsToRows = require('./pathsToRows')
const prepareData = require('./prepareData')
const groupWords = require('./groupWords')

// Criando um 'canal' para que o VueJS possa 'conversar' (Enviar e Receber dados) com o Electron.
// O Electron no Projeto é como se fosse o 'BackEnd' da aplicação e o VueJS o 'FrontEnd'.

ipcMain.on('process-subtitles', (event, dados) => {
    pathsToRows(dados)
    .then(rows => prepareData(rows))
    .then(preparedData => groupWords(preparedData))
    .then(groupedWords => {
        event.reply('process-subtitles', groupedWords)
    })
})