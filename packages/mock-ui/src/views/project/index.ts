import { Component, Vue } from "vue-property-decorator"
import { Getter, Action } from "vuex-class"
import { ProjectData } from '@/types/views/project.interface'
// import {  } from "@/components" // 组件

@Component({})
export default class About extends Vue {
  info = {
    projectID: "123134s3ad",
    name: "xxx项目API",
    baseUrl: "/api/vas",
    desc: "这个项目xxxxxxxxxxxxxxxxxxx"
  }

  columns = [{
    title: '接口id',
    dataIndex: 'api_id',
    sorter: true
  }, {
    title: '请求方法',
    dataIndex: 'api_method'
  }, {
    title: '接口名称',
    dataIndex: 'api_name'
  }, {
    title: '接口url',
    dataIndex: 'api_url'
  }, {
    title: '接口描述',
    dataIndex: 'api_desc'
  }, {
    title: '操作',
    dataIndex: 'operate',
    scopedSlots: { customRender: 'operate' }
  }]
  tableData = [{
    api_id: '1',
    api_method: 'GET',
    api_name: '添加用户',
    api_url: '/user/add',
    api_desc: '添加用户。。。。。'
  }]
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
  create() {
    this.$router.push({ name: "api", query: { project_id: this.$route.query.id } })
  }
  detail(i: string, record: object) {
    console.log(i, record)
  }
  toEditProject() {
    this.$router.push({ name: "projectEdit", params: { action: 'edit' }, query: { id: this.$route.query.id } })
  }

}
