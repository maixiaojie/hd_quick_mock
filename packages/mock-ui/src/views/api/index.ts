import { Component, Vue } from "vue-property-decorator"
import { Getter, Action } from "vuex-class"
import { ApiData, ApiInfo } from '@/types/views/api.interface'
// import {  } from "@/components" // 组件
import * as monaco from 'monaco-editor'
import { addApi } from '@/api/api'
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
  form: any = null
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
    this.info.project_id = this.$route.query.project_id as string | null
    this.form = this.$form.createForm(this, { name: 'dynamic_rule' } as any)
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
  handleMethodChange(v) {
    this.info.method = v
  }
  handleUrlBlur(e) {
    const value = e.target.value
    this.info.url = value
  }
  handleUrlDesc(e) {
    const value = e.target.value
    this.info.desc = value
  }
  create() {
    this.info.mock = this.editor.getValue()
    this.form.validateFields(async err => {
      if (this.info.mock.length === 0) {
        return
      }
      if (!err) {
        console.log(this.info)
        try {
          let data = await addApi(this.info)
          console.log(data)
        } catch (e) {
          console && console.log(e)
        }
      }
    })
  }

}
