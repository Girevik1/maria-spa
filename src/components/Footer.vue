<template>
  <footer class="footer">
  <div class="content has-text-centered">
    <p class="footer-text">Позвоните мне — я могу Вам помочь..</p>
  </div>
  <p class="year">2021</p>
</footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
   
  },

  data(){
      return {
          
      
      }
  }
}
</script>


<style scoped>

footer.footer{
  background-color: #f7f7f4;
  box-shadow: rgb(219 219 219) 0px 0px 10px;
}
.foter-text{
  font-weight: 600;
}
.year {
  bottom: 0;
  text-align: center;
}
</style>
