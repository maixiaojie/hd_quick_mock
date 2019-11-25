import { Component, Vue } from "vue-property-decorator"
import { Getter, Action } from "vuex-class"
import { ProjectData } from '@/types/views/project.interface'
// import {  } from "@/components" // 组件

@Component({})
export default class About extends Vue {
  // Getter
  // @Getter project.author
    
  // Action
  // @Action GET_DATA_ASYN

  // data
  data: ProjectData = {
    pageName: 'project'
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
