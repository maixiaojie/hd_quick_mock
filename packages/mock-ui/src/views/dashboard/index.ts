import { Component, Vue } from "vue-property-decorator"
import { Getter, Action } from "vuex-class"
import { DashboardData } from '@/types/views/dashboard.interface'
import Project from '@/components/project.vue'
@Component({
  components: {
    Project
  }
})
export default class About extends Vue {
  // Getter
  // @Getter dashboard.author

  // Action
  // @Action GET_DATA_ASYN
  projectList = [{
    projectID: "1231sad",
    name: "xxx项目API",
    baseUrl: "/api/va2"
  }, {
    projectID: "1231sa3d",
    name: "xxx项目API",
    baseUrl: "/api/va1"
  }, {
    projectID: "1231s43ad",
    name: "xxx项目API",
    baseUrl: "/api/vaa"
  }, {
    projectID: "123134s3ad",
    name: "xxx项目API",
    baseUrl: "/api/vas"
  }, {
    projectID: "123134sa12d",
    name: "xxx项目API",
    baseUrl: "/api/vas"
  }, {
    projectID: "123134sa12312d",
    name: "xxx项目API",
    baseUrl: "/api/vas"
  }]
  // data
  data: DashboardData = {
    pageName: 'dashboard'
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

  handleEditClick(id: string) {
    this.$router.push({ name: "project", query: { id } })
  }
}
