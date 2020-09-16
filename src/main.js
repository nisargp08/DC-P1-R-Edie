import Vue from 'vue'
import App from './App.vue'

//Tailwind
import '@/assets/css/tailwind.css'
import 'animate.css/animate.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
