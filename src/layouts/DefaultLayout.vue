<template>
    <div class="document">
        <div class="document__content">
            default
            <slot/>
        </div>
        <div class="document__footer">

        </div>
    </div>
</template>

<script>
    export default {
        name: 'DefaultLayout'
    }
</script>