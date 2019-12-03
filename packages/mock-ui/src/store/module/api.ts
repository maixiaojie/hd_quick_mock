import { ApiState } from '@/types/views/api.interface'
import { GetterTree, MutationTree, ActionTree } from 'vuex'
import * as ApiApi from '@/api/api'

const state: ApiState = {
}

// 强制使用getter获取state
const getters: GetterTree<ApiState, any> = {
  // author: (state: ApiState) => state.api.author
}

// 更改state
const mutations: MutationTree<ApiState> = {
  // 更新state都用该方法
  UPDATE_STATE(state: ApiState, data: ApiState) {
    for (const key in data) {
      if (!data.hasOwnProperty(key)) { return }
      // state[key] = data[key]
    }
  }
}

const actions: ActionTree<ApiState, any> = {
  UPDATE_STATE_ASYN({ commit, state: ApiState }, data: ApiState) {
    commit('UPDATE_STATE', data)
  },
  // GET_DATA_ASYN({ commit, state: LoginState }) {
  //   Api.getData()
  // }
}

export default {
  state,
  getters,
  mutations,
  actions
}

