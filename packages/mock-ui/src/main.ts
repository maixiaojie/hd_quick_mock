import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { Button } from "ant-design-vue" // 组件
Vue.component(Button.name, Button)

Vue.config.productionTip = false

new Vue({
  components: {
    Button
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
