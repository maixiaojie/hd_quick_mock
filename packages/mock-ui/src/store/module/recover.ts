import { RecoverState } from '@/types/views/recover.interface'
import { GetterTree, MutationTree, ActionTree } from 'vuex'
import * as RecoverApi from '@/api/recover'

const state: RecoverState = {
}

// 强制使用getter获取state
const getters: GetterTree<RecoverState, any> = {
  // author: (state: RecoverState) => state.recover.author
}

// 更改state
const mutations: MutationTree<RecoverState> = {
  // 更新state都用该方法
  UPDATE_STATE(state: RecoverState, data: RecoverState) {
    for (const key in data) {
      if (!data.hasOwnProperty(key)) { return }
      // state[key] = data[key]
    }
  }
}

const actions: ActionTree<RecoverState, any> = {
  UPDATE_STATE_ASYN({ commit, state: RecoverState }, data: RecoverState) {
    commit('UPDATE_STATE', data)
  },
  // GET_DATA_ASYN({ commit, state: LoginState }) {
  //   Recover.getData()
  // }
}

export default {
  state,
  getters,
  mutations,
  actions
}

