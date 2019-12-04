import { Component, Vue } from "vue-property-decorator"
import { Getter, Action } from "vuex-class"
import { ApiData, ApiInfo } from '@/types/views/api.interface'
// import {  } from "@/components" // 组件
import * as monaco from 'monaco-editor'
@Component({})
export default class About extends Vue {
  // Getter
  // @Getter api.author

  // Action
  // @Action GET_DATA_ASYN

  // data
  data: ApiData = {
    pageName: 'api'
  }
  editor: any = null
  info: ApiInfo = {
    project_id: '',
    method: 'get',
    url: '',
    desc: '',
    mock: ''
  }
  created() {
    //
  }

  activated() {
    //
  }

  mounted() {
    let el: any = document.getElementById('container')
    this.editor = monaco.editor.create(el, {
      value: '{"a": 1, "b": 2}',
      language: "json",
      theme: "vs-dark"
    })
    this.editor.trigger('any', 'editor.action.formatDocument')
  }

  // 初始化函数
  init() {
    //
  }
  create() {
    this.info.mock = this.editor.getValue()
    console.log(this.info)
  }

}
