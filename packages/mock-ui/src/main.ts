import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { Button, Row, Col, Icon, Menu, Dropdown, Avatar, Spin } from "ant-design-vue" // 组件
const MenuItem = Menu.Item

Vue.component(Button.name, Button)
Vue.component(Icon.name, Icon)
Vue.component(Row.name, Row)
Vue.component(Col.name, Col)
Vue.component(Menu.name, Menu)
Vue.component(MenuItem.name, MenuItem)
Vue.component(Dropdown.name, Dropdown)
Vue.component(Avatar.name, Avatar)
Vue.component(Spin.name, Spin)

Vue.config.productionTip = false

new Vue({
  components: {
    Button
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
