<template>
 <b-navbar>
        <template #brand>
            <b-navbar-item >
                <img
                    :src="require('@/assets/klipartz.com.png')"
                    alt="Lightweight UI components for Vue.js based on Bulma"
                >
            </b-navbar-item>
        </template>
        <template #start>
            <!-- <b-navbar-item href="#">
                Home
            </b-navbar-item> -->
            <span class="name-doc">Мария - Клинический психолог</span>
            <b-navbar-item  tag="phone-alt">
                 <a class="tel" href="tel:+380441234567">
               <img
                    :src="require('@/assets/tel.png')"
                   
                >
                    <!-- <span class=”phone-small”> -->
                   <span>+38 (044) 123-45-67</span></a>
            
            </b-navbar-item>
           
        </template>

        <template #end>
             <b-navbar-dropdown label="Контакты">
                <b-navbar-item href="#">
                    About
                </b-navbar-item>
                <b-navbar-item href="#">
                    Contact
                </b-navbar-item>
            </b-navbar-dropdown>
        </template>
    </b-navbar>
</template>

<script>
export default {
  name: 'Header',
  props: {
   
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
