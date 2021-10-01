<template>
<div class="container">
    <Header />
    <Carousel />
</div>
</template>

<script>

import Header from './components/Header.vue'
import Carousel from './components/Carousel.vue'

export default {
    name: 'App',
    data() {
        return {}
    },

    methods: {},

    components: {
        Header,
        Carousel,
    }
}
</script>


