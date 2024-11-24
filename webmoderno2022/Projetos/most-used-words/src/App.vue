<template>
  <v-app>
    <v-main>
      <v-app-bar app color="primary">
        <v-toolbar-title>{{ appTitle() }}</v-toolbar-title> 
      </v-app-bar>
      <HomePage></HomePage>
    </v-main>
  </v-app>
</template>

<script>
import HomePage from './components/HomePage'

export default {
  name: 'App',
  components: { HomePage },
  methods: {
    appTitle(){
      const {title} = require('../package.json')
      return title
    }
  },
  data: () => ({
    //
  }),
}
</script>
