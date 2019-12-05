import { Component, Vue } from "vue-property-decorator"
import { addProject } from '@/api/project'
@Component({})
export default class About extends Vue {
  info = {
    name: '',
    url: '',
    desc: ''
  }
  form: any = null
  created() {
    //
  }

  activated() {
    //
  }

  mounted() {
    this.form = this.$form.createForm(this, { name: 'dynamic_rule' } as any)
  }

  // 初始化函数
  init() {
    //
  }
  handleNameBlur(e) {
    const value = e.target.value
    this.info.name = value
  }
  handleUrlBlur(e) {
    const value = e.target.value
    this.info.url = value
  }
  handleDescBlur(e) {
    const value = e.target.value
    this.info.desc = value
  }
  create() {
    this.form.validateFields(async err => {
      if (!err) {
        try {
          let data = await addProject(this.info)
          this.$message.success('创建成功')
        } catch (e) {
          this.$message.warning(e)
          console && console.log(e)
        }
      }
    })
  }

}
