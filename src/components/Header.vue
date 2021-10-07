<template>
 <b-navbar>
        <template #brand>
            <b-navbar-item >
                <img
                    :src="require('@/assets/klipartz.com.png')"
                    alt="Знак клинического психиатра"
                >
            </b-navbar-item>
            <!-- <div class="name-doc">Мария - Клинический психолог</div> -->
            <div class="name-doc">Клинический психолог</div>
        </template>

        <template #start>
            <b-navbar-item  class="tel" href="tel:+79047645981">
               <img class="img-tel"
                    :src="require('@/assets/tel.png')"  
                >
                <span>+7 (904) 764-59-81</span>
            </b-navbar-item>
        </template>

        <template #end>
            <b-navbar-item  class="messager" href="https://t.me/Maria_gaysina">
               <img class="img-tel"
                    :src="require('@/assets/telegram.png')"                 
                >
                <span style="padding-left: 6px;">Telegram</span>
            </b-navbar-item>
            <b-navbar-item  class="messager" href=" https://wa.me/+79047645981">  
                <img class="img-tel"
                    :src="require('@/assets/w.png')"                  
                >
                <span style="padding-left: 6px;">WhatsApp</span>
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
    text-align: center;
}
nav.navbar{
    padding-left: 12px;
    padding-right: 12px;
}
.messager{
    font-size: 17px;
    color: black;
    font-weight: 500;
}
</style>
