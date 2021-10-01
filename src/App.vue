<template>
<div class="container">
    <Header />
    <Content />
    <Carousel />
</div>
</template>

<script>

import Header from './components/Header.vue'
import Content from './components/Content.vue'
import Carousel from './components/Carousel.vue'

export default {
    name: 'App',
    data() {
        return {}
    },

    methods: {},

    components: {
        Header,
        Content,
        Carousel,
    }
}
</script>


