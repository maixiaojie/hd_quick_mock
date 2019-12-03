import { Component, Vue } from "vue-property-decorator"
import { Getter, Action } from "vuex-class"
import { ApiData } from '@/types/views/api.interface'
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
      // allowComments: true,
      theme: "vs-dark"
    })
    this.editor.trigger('any', 'editor.action.formatDocument')
  }

  // 初始化函数
  init() {
    //
  }
  getValue() {
    let value = this.editor.getValue()
    console.log(value)
  }

}
