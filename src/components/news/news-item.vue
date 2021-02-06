<template>
  <div class="news-item">
    {{ item.title }}
  </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'

    export default {
        name: 'News',
        data(){
            return{
            }
        },
        props: {
            item: {
                type: Object,
                default(){
                    return {
                        
                    }
                }
            }
        },
        mounted() {
            console.log(this.item);
        }
    }
</script>

<style lang="scss">

</style>