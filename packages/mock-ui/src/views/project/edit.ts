import { Component, Vue } from "vue-property-decorator"
import { addProject, getProjet, updateProject } from '@/api/project'
import common from '@/utils/common'
@Component({})
export default class About extends Vue {
  info: any = {
    name: '',
    url: '',
    desc: ''
  }
  action = 'add'
  id: any = ''
  form: any = null
  created() {

  }

  activated() {
    //
  }

  mounted() {
    this.form = this.$form.createForm(this, { name: 'dynamic_rule' } as any)
    this.action = this.$route.params.action
    if (this.action === 'edit') {
      this.id = this.$route.query.id
      this.getDetail()
    }
  }

  // 初始化函数
  init() {
    //
  }
  async getDetail() {
    try {
      let data: any = await getProjet(this.id)
      data.url = common.startsWith(data.url, '/') ? data.url.substr(1) : data.url
      this.info = data

    } catch (e) {
      console && console.log(e)
    }
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
          let params = JSON.parse(JSON.stringify(this.info))
          params.url = '/' + params.url
          if (this.action === 'add') {
            let data = await addProject(params)
            this.$message.success('创建成功')
          }
          if (this.action === 'edit') {
            let data = await updateProject(this.info._id, params)
            this.$message.success('更新成功')
          }
          this.$router.push({ name: 'dashboard' })
        } catch (e) {
          console && console.log(e)
        }
      }
    })
  }

}
