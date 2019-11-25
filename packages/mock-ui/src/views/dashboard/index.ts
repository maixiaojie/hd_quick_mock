import { Component, Vue } from "vue-property-decorator"
import { Getter, Action } from "vuex-class"
import { DashboardData } from '@/types/views/dashboard.interface'
// import {  } from "@/components" // 组件

@Component({})
export default class About extends Vue {
  // Getter
  // @Getter dashboard.author
    
  // Action
  // @Action GET_DATA_ASYN

  // data
  data: DashboardData = {
    pageName: 'dashboard'
  }

  created() {
    //
  }
    
  activated() {
    //
  }

  mounted() {
    //
  }

  // 初始化函数
  init() {
    //
  }
    
}
