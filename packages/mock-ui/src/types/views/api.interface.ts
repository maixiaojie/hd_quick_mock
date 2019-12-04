import project from '../../../../mock/src/routers/project';
// api.Data 参数类型
export interface ApiData {
  pageName: string
}

// VUEX api.State 参数类型
export interface ApiState {
  data?: any
}

export interface ApiInfo {
  project_id: string | (string | null)
  api_id?: string | null
  mock: any
  method: string
  desc: string
  url: string

}

// GET_DATA_ASYN 接口参数类型
// export interface DataOptions {}

