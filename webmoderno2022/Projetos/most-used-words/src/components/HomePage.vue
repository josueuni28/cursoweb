<template>
    <v-content fluid>
        <v-form>
            <v-file-input label="Selecionar legendas" prepend-icon="mdi-file-multiple" append-icon="mdi-checkbox-marked-circle" outlined multiple v-model="files" @click:append="processSubtitles"></v-file-input>
        </v-form>
        <div class="pills">
            <Pill v-for="word in groupedWords" :key="word.word" :word="word.word" :amount=word.amount />
        </div>
    </v-content>
</template>

<script>
import Pill from './Pill'

export default {
    name: 'HomePage',
    components: { Pill },
    data: function(){
        return {
            files: [],
            groupedWords: [
                {word: 'i', amount: 578},
                {word: 'you', amount: 30},
                {word: 'love', amount: 225},
                {word: 'sky', amount: 189},
            ]
        }
    },
    methods: {
        processSubtitles(){
            alert('Olá mundo')
        }
    }
}
</script>

<style scoped>
.pills{
    display: flex;
}
</style>