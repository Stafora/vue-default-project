<template>
  <div class="home">
    <h1>Дома как дома</h1>
    <img src="@/assets/logo.png" alt="">
    <ul>
      <router-link to="/">Главная</router-link>
      <router-link to="/news">Новости</router-link>
    </ul>
  </div>
</template>

<script>

    export default {
        name: 'Catalog',
        components: {
            
        },
        mounted() {
        }
    }
</script>

<style lang="scss">

</style>
