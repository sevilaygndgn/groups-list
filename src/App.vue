<template>
  <div id="app">
    <main-layout>
    <router-view/>
    </main-layout>
  </div>
</template>
<script>
import MainLayout from './layouts/MainLayout.vue'
export default {
  components: {
    MainLayout
  }
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap');
@import "./assets/reset.scss";
body {
    box-sizing: border-box;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Montserrat', sans-serif;
}
</style>
