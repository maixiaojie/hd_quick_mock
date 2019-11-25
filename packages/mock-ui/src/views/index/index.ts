import { Component, Vue } from "vue-property-decorator"
import { Getter, Action } from "vuex-class"
import { IndexData } from '@/types/views/index.interface'
import Header from '@/components/header.vue'
@Component({
  components: {
    Header
  }
})
export default class About extends Vue {
  // Getter
  // @Getter index.author
    
  // Action
  // @Action GET_DATA_ASYN

  // data
  data: IndexData = {
    pageName: 'index'
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
