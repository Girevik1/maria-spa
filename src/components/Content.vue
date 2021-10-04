<template>
<div class="columns info-container">
  <div class="column is-4 card first-block">
      <b-image
            :src="require('@/assets/me.png')"
            ratio="2by3"
        >
            <template #placeholder>
                <b-skeleton
                    class="skeleton-placeholder"
                    height="100%"
                ></b-skeleton>
            </template>
        </b-image>
  </div>
  <div class="column is-8 card second-block">
    <p class="ps-title">Хотелось бы Вам  представиться, мои дорогие потенциальные клиенты</p>
    <p class="ps-name">Мария - Клинический психолог</p>
   
    <p>Моя первая ступенька вхождения в столь увлекательную сферу, как психология, началась в далеком 1983 году во время учебы в Государственном педагогическом институте им.Крупской на факультете педагогика и психология, затем были годы работы с детьми, преподавание психологии...</p>
    <p>Дальнейшее восхождение - это учеба в Московском институте психоанализа по специальности «Клиническая психология», прохождение практики в Московской психиатрической клинике им.Ганушкина. Получив диплом, я решила двигаться дальше, по психологической лестнице наверх и прошла несколько курсов по диагностике и не только, у Собчик Л.Н. одного из ведущих психологов России создателя адаптационной российской версии СМИЛ и получила сертификат за ее подписью на право проведения диагностики по ее методикам.</p>
    <p>На данный момент работаю в терапии по методикам ряда школ: транзактного анализа, символ-драмы, арт-терапии (МАК), новой школы Рилив-терапии. Постоянно совершенствуюсь в своей профессиональной деятельности.
      Все мои дипломы и сертификаты Вы можете увидеть на моем сайте визитке, также прилагаются все контакты для Ваших вопросов и записи.
    </p> 
    <br>
    <div class="sign">
      <p>С уважением к Вам</p> 
      <p>Мария Ахметзянова</p> 
    </div>
   
    
  </div>
</div>
</template>

<script>
export default {
  name: 'Content',
  props: {
   
  }
}
</script>


<style scoped>
.info-container{
  margin: 0px;
    
   
    margin-top: 5px;
}
.first-block{
   box-shadow: rgb(219 219 219) 0px 0px 10px;
  background-color: #fbfbfb;
  margin: 6px;
}
.second-block{
   box-shadow: rgb(219 219 219) 0px 0px 10px;
  background-color: #fbfbfb;
  margin: 6px;
}
.ps-title{
  text-align: center;
  font-size: 19px;
  font-weight: 500;
}
.ps-name{
  text-align: center;
  font-size: 32px;
  font-weight: bold;
}
p{
  text-indent: 20px;
      font-style: italic;
    font-size: 17px;
}
.sign{
  text-align: right;
}
</style>
