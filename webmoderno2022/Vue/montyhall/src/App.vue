<template>
  <div id="app">
    <h1>Problema de MontyHall</h1>
    <Door :number="'1'" :hasGift="false" />
  </div>
</template>

<script>
import Door from './components/Door.vue';
// import Gift from './components/Gift'

export default {
    name:'App',
    components: { Door }
}
</script>

<style>
@font-face {
    font-family: 'Montserrat';
    src: url('./fonts/Montserrat-Regular.ttf');
}

* {
    font-family: 'Montserrat', sans-serif;
}

body {
    color: white;
    background: linear-gradient(to right, rgb(83, 105, 118), rgb(41, 46, 73));
}

#app {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

#app h1{
    border: 1px solid black;
    background-color: #0004;
    padding: 20px;
    margin-bottom: 60px;
}
</style>