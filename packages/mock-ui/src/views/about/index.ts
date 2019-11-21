import { Component, Vue } from "vue-property-decorator"
import { Getter, Action } from "vuex-class"
import { AboutData } from '@/types/views/about.interface'
// import {  } from "@/components" // 组件

@Component({})
export default class About extends Vue {
  // Getter
  // @Getter about.author
    
  // Action
  // @Action GET_DATA_ASYN

  // data
  data: AboutData = {
    pageName: 'about'
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
