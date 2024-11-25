<template>
    <div class="home">
        <v-form>
            <v-file-input label="Selecionar legendas" prepend-icon="mdi-file-multiple" append-icon="mdi-check-circle" outlined multiple v-model="files" @click:append="processSubtitles"></v-file-input>
            <!-- O evento '@click:append' será chamado quando clicar no ícone de 'enviar' do input -->
        </v-form>
        <div class="pills">
            <Pill v-for="word in groupedWords" :key="word.word" :word="word.word" :amount=word.amount />
        </div>
    </div>
</template>

<script>
import Pill from './Pill'

// Importando o 'ipcRender' do Electron para poder 'conversar' (Enviar e Receber dados) com ele.
import { ipcRenderer } from 'electron'

export default {
    name: 'HomePage',
    components: { Pill },
    data: function(){
        return {
            files: [],
            groupedWords: []
        }
    },
    methods: {
        processSubtitles(){
            // Pegando apenas o 'caminho' do(s) arquivo(s) selecionados
            let paths = this.files.map(f => f.path)

            ipcRenderer.send('process-subtitles', paths)
            ipcRenderer.on('process-subtitles', (event, dadosDaResposta) => {
                // console.log('Resposta: '+dadosDaResposta)
                this.groupedWords = dadosDaResposta
            })
        }
    }
}
</script>

<style scoped>
.pills{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.home{
    margin: 20px;
}
</style>