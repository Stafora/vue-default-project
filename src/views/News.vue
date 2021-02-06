<template>
  <div class="catalog">
    <h1>Новости</h1>

    <img src="@/assets/logo.png" alt="">

    <div class="catalog-list">
        <newsItem 
            v-for="item in NEWS.news"
            :key="item.id"
            :item="item"
        />
    </div>

  </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'
    import newsItem from '@/components/news/news-item.vue'

    export default {
        name: 'News',
        data(){
            return{
                page: 1,
            }
        },
        components: {
            newsItem
        },
        computed: {
            ...mapGetters([
                'NEWS'
            ]),
        },
        methods: {
            ...mapActions([
                'GET_NEWS_API'
            ]),
        },
        mounted() {
            this.GET_NEWS_API(this.page);
        },
    }
</script>

<style lang="scss">

</style>
