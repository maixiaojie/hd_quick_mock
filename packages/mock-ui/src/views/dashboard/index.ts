import { Component, Vue } from "vue-property-decorator"
import { Getter, Action } from "vuex-class"
import { DashboardData } from '@/types/views/dashboard.interface'
import Project from '@/components/project.vue'
import { getProjetList } from '@/api/dashboard'
@Component({
  components: {
    Project
  }
})
export default class About extends Vue {

  projectList: [] = []
  pageSize: number = 8
  pageNum: number = 1
  total_num: number = 0

  created() {
    this.getData()
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
  async getData() {
    try {
      let data: any = await getProjetList(this.pageNum, this.pageSize)
      this.total_num = data.total_num
      this.projectList = data.list
    } catch (e) {
      this.$message.warning(e)
      console && console.log(e)
    }
  }
  pageChange(page) {
    this.pageNum = page
    this.getData()
  }
  handleEditClick(id: string) {
    this.$router.push({ name: "project", query: { id } })
  }
  create() {
    this.$router.push({ name: "projectEdit", params: { action: 'add' } })
  }
}
