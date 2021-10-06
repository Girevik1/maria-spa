<template>
    <div class="card diplom-container">
         <b-carousel
        :autoplay="true"
        with-carousel-list
        :indicator="false"
        :overlay="gallery"
        @click="switchGallery(true)">
        <b-carousel-item v-for="(item, i) in items" :key="i">
            <figure class="image">
                <img :src="item.image">
            </figure>
        </b-carousel-item>
        <span v-if="gallery" @click="switchGallery(false)" class="modal-close is-large"/>
        <template #list="props">
            <b-carousel-list
                v-model="props.active"
                :data="items"
                v-bind="al"
                @switch="props.switch($event, false)"
                as-indicator />
        </template>
        <template #overlay>
            <div class="has-text-centered has-text-white">
              Мои дипломы и сертификаты
            </div>
        </template>
     </b-carousel>
    </div>
 
</template>

<script>
export default {
  name: 'Carousel',
  props: {},
    data() {
        return {
            gallery: false,
            al: {
                hasGrayscale: true,
                itemsToShow: 2,
                breakpoints: {
                    768: {
                        hasGrayscale: false,
                        itemsToShow: 4
                    },
                    960: {
                        hasGrayscale: true,
                        itemsToShow: 6
                    }
                }
            },
            items: [
             
                {
                    title: 'Slide 1',
                    image: require('@/assets/doc(1).jpg')
                },
                {
                    title: 'Slide 2',
                    image: require('@/assets/doc(2).jpg')
                },
                {
                    title: 'Slide 3',
                    image: require('@/assets/doc(4).jpg')
                },
                {
                    title: 'Slide 4',
                    image: require('@/assets/doc(5).jpg')
                },
                {
                    title: 'Slide 5',
                    image: require('@/assets/doc(6).jpg')
                },
                {
                    title: 'Slide 6',
                    image: require('@/assets/doc(7).jpg')
                },
                {
                    title: 'Slide 7',
                    image: require('@/assets/doc(8).jpg')
                },
                {
                    title: 'Slide 8',
                    image: require('@/assets/doc(9).jpg')
                },
                {
                    title: 'Slide 9',
                    image: require('@/assets/doc(9).jpg')
                },
                {
                    title: 'Slide 10',
                    image: require('@/assets/doc(10).jpg')
                },
            ]
        }
    },

    methods: {
        switchGallery(value) {
            this.gallery = value
            if (value) {
                document.documentElement.classList.add('is-clipped')
            } else {
                document.documentElement.classList.remove('is-clipped')
            }
        }
    },
}
</script>


<style scoped>
.diplom-container{
    margin-bottom: 24px;
    margin-top: 17px;
    margin-left: auto;
    margin-right: auto;
    width: 59%;
    box-shadow: 2px 2px 14px 4px #a5a5a5;
}
</style>
