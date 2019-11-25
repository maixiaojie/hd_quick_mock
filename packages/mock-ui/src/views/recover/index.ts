import { Component, Vue } from "vue-property-decorator"
import { Getter, Action } from "vuex-class"
import { RecoverData } from '@/types/views/recover.interface'
// import {  } from "@/components" // 组件

@Component({})
export default class About extends Vue {
  // Getter
  // @Getter recover.author
    
  // Action
  // @Action GET_DATA_ASYN

  // data
  data: RecoverData = {
    pageName: 'recover'
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
