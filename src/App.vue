<template>

<div class="container">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@mdi/font@5.8.55/css/materialdesignicons.min.css">
    <Header />
    <Content />
    <Carousel />
    <Footer />
</div>
</template>

<script>

import Header from './components/Header.vue'
import Content from './components/Content.vue'
import Carousel from './components/Carousel.vue'
import Footer from './components/Footer.vue'

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
        Footer,
    }
}
</script>


