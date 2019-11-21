import { AboutState } from '@/types/views/about.interface'
import { GetterTree, MutationTree, ActionTree } from 'vuex'
import * as AboutApi from '@/api/about'

const state: AboutState = {
}

// 强制使用getter获取state
const getters: GetterTree<AboutState, any> = {
  // author: (state: AboutState) => state.about.author
}

// 更改state
const mutations: MutationTree<AboutState> = {
  // 更新state都用该方法
  UPDATE_STATE(state: AboutState, data: AboutState) {
    for (const key in data) {
      if (!data.hasOwnProperty(key)) { return }
      // state[key] = data[key]
    }
  }
}

const actions: ActionTree<AboutState, any> = {
  UPDATE_STATE_ASYN({ commit, state: AboutState }, data: AboutState) {
    commit('UPDATE_STATE', data)
  },
  // GET_DATA_ASYN({ commit, state: LoginState }) {
  //   About.getData()
  // }
}

export default {
  state,
  getters,
  mutations,
  actions
}

