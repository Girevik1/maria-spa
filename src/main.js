import Vue from 'vue'
import App from './App.vue'

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)

Vue.config.productionTip = false

Vue.use(Buefy, {
    defaultIconPack: 'fas',
    defaultContainerElement: '.container',
    // ...
})
// require('./assets/main.scss')

new Vue({
  render: h => h(App),
}).$mount('#app')
