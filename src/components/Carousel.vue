<template>
    <div class="columns">
        <div class="card diplom-container column is-7">
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
        <div class="column description is-5 card">
            <p style="text-align:center"><b>Мои мысли вслух...</b></p>
            <p>Многие из Вас посещают фитнес клубы, спортзалы, очень придирчиво относятся к состоянию своего собственного тела, соблюдают диету, пьют протеин...</p>
            <p>Но совершенно не озабочены состоянием своего мозга, а ведь это тоже одна из частей нашего тела и никто из вас со мной не поспорит в том, что одна из самых главных частей. Однако большинство из нас об этом даже не задумывается, что его тоже необходимо тренировать.</p>
            <p>Наше тело подвергается изменениям, стареет, такие же процессы происходят с мозгом, но мы это не замечаем, пока не возникают необратимые процессы или еще хуже психические заболевания, даже в молодом возрасте. Естественно, тело видят окружающие.. А мозг?...</p>
            <p>Обращение к психологу поможет Вам понять о его состоянии, пройти диагностику и если потребуется, то и психотерапию и избежать многих проблем с различными заболеваниями и не только психическими в будущем.</p>
            <!-- С уважением к Вам Мария Ахметзянова-клинический психолог,диагност. -->
        </div>
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
                    image: require('@/assets/doc(3).jpg')
                },
                {
                    title: 'Slide 4',
                    image: require('@/assets/doc(4).jpg')
                },
                {
                    title: 'Slide 5',
                    image: require('@/assets/doc(5).jpg')
                },
                {
                    title: 'Slide 6',
                    image: require('@/assets/doc(6).jpg')
                },
                {
                    title: 'Slide 7',
                    image: require('@/assets/doc(7).jpg')
                },
                {
                    title: 'Slide 8',
                    image: require('@/assets/doc(8).jpg')
                },
                {
                    title: 'Slide 9',
                    image: require('@/assets/doc(9).jpg')
                },
                {
                    title: 'Slide 10',
                    image: require('@/assets/doc(10).jpg')
                },
                {
                    title: 'Slide 11',
                    image: require('@/assets/doc(11).jpg')
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
    /* margin-bottom: 24px;
    margin-top: 17px;
    margin-left: auto;
    margin-right: auto; */
    margin: 0;
    /* width: 100%; */
    /* box-shadow: 2px 2px 14px 4px #a5a5a5; */
    box-shadow: rgb(219 219 219) 0px 0px 10px;

}
.descriptiion{
    box-shadow: rgb(219 219 219) 0px 0px 10px;
}
p{
  text-indent: 20px;
  font-style: italic;
  font-size: 17px;
}
.flex{
    /* margin-top: 0px; */
}
.columns{
  margin: 0;
}
</style>
