<template>
    <div class="home">
        <v-form>
            <v-file-input label="Selecionar legendas" prepend-icon="mdi-file-multiple" append-icon="mdi-check-circle" outlined multiple v-model="files" @click:append="processSubtitles"></v-file-input>
            <!-- O evento '@click:append' será chamado quando clicar no ícone de 'enviar' do input -->
        </v-form>
        <v-card v-if="groupedWords.length > 0" class="mb-4" :title="wordsAmount"></v-card>
        <v-sheet v-if="!processing && groupedWords.length === 0" class="mb-4">
            <div><h2>Nao há nada por aqui...</h2></div>
            <div class="text-h7 font-weight-medium mb-2">
                Experimente selecionar um arquivo de legenda e clique no ícone de 'Ok' para processar <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5"/>
                </svg>
            </div>
        </v-sheet>
        <v-sheet v-if="processing" class="mb-4">
            <div class="text-center">
            <v-progress-circular :size="70" :width="7" color="primary" indeterminate ></v-progress-circular>
            </div>
        </v-sheet>
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
            groupedWords: [],
            wordsAmount: '',
            processing: false
        }
    },
    methods: {
        processSubtitles(){
            // Pegando apenas o 'caminho' do(s) arquivo(s) selecionados
            let paths = this.files.map(f => f.path)
            const pathsPlural = (paths.length > 1) ? 's' : ''

            this.processing = true
            ipcRenderer.send('process-subtitles', paths)
            ipcRenderer.on('process-subtitles-reply', (event, dadosDaResposta) => {
                // Criado o 'canal... -reply' para evitar um 'bug' (descrito no comentário de baixo)
                if(dadosDaResposta != 'eNull'){
                    this.groupedWords = dadosDaResposta
                    this.wordsAmount = `${this.groupedWords.length} palavras foram extraídas do${pathsPlural} arquivo${pathsPlural}.`
                }else{
                    alert('Selecione um arquivo para processar.')
                    // matando o 'ouvinte' para evitar de ser criado um array sendo repetido o mesmo erro várias vezes.
                    ipcRenderer.removeAllListeners('process-subtitles-reply')
                }

                this.processing = false
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