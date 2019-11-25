import { DashboardState } from '@/types/views/dashboard.interface'
import { GetterTree, MutationTree, ActionTree } from 'vuex'
import * as DashboardApi from '@/api/dashboard'

const state: DashboardState = {
}

// 强制使用getter获取state
const getters: GetterTree<DashboardState, any> = {
  // author: (state: DashboardState) => state.dashboard.author
}

// 更改state
const mutations: MutationTree<DashboardState> = {
  // 更新state都用该方法
  UPDATE_STATE(state: DashboardState, data: DashboardState) {
    for (const key in data) {
      if (!data.hasOwnProperty(key)) { return }
      // state[key] = data[key]
    }
  }
}

const actions: ActionTree<DashboardState, any> = {
  UPDATE_STATE_ASYN({ commit, state: DashboardState }, data: DashboardState) {
    commit('UPDATE_STATE', data)
  },
  // GET_DATA_ASYN({ commit, state: LoginState }) {
  //   Dashboard.getData()
  // }
}

export default {
  state,
  getters,
  mutations,
  actions
}

