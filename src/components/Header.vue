<template>
 <b-navbar>
        <template #brand>
            <b-navbar-item >
                <img
                    :src="require('@/assets/klipartz.com.png')"
                    alt="Знак клинического психиатра"
                >
            </b-navbar-item>
        </template>
        <template #start>

            <span class="name-doc">Мария - Клинический психолог</span>
            <b-navbar-item  class="tel" href="tel:+79047645981">
               <img class="img-tel"
                    :src="require('@/assets/tel.png')"  
                >
                <span>+7 (904) 764-59-81</span>
            </b-navbar-item>
           
        </template>

        <template #end>
            <b-navbar-item  class="" href="https://t.me/Kozhevnikov_Max">
               <img class="img-tel"
                    :src="require('@/assets/telegram.png')"                 
                >
            </b-navbar-item>
            <b-navbar-item  class="" href=" https://wa.me/+79047645981">  
                <img class="img-tel"
                    :src="require('@/assets/w.png')"                  
                >
            </b-navbar-item>
            
        </template>
    </b-navbar>
</template>

<script>
export default {
  name: 'Header',
  props: {
   
  },

  data(){
      return {
           items: [
        {
          title: "Мой telegram",
          icon: "phone",
          url: "https://t.me/mihail1134dd"
        },
        {
          title: "Регистрация Френдекс",
          icon: "mdi-view-dashboard",
          url: "https://frendex.ltd/I/72805659"
        }
      ],
      }
  }
}
</script>


<style scoped>
.tel {
    text-indent: 0px;
    width: auto;
    line-height: 32px;
    font-weight: bold;
    font-size: 1.3em;
    color: #080a0c;
    cursor: pointer;
    text-decoration: none;
}
.img-tel{
    vertical-align: middle;
}
a{
    color: #0a72fb;
    cursor: pointer;
    text-decoration: none;
}
.name-doc{
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    font-family: emoji;
    margin-top: 8px;
}
nav.navbar{
    padding-left: 12px;
    padding-right: 12px;
}
</style>
