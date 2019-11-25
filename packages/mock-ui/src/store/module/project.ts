import { ProjectState } from '@/types/views/project.interface'
import { GetterTree, MutationTree, ActionTree } from 'vuex'
import * as ProjectApi from '@/api/project'

const state: ProjectState = {
}

// 强制使用getter获取state
const getters: GetterTree<ProjectState, any> = {
  // author: (state: ProjectState) => state.project.author
}

// 更改state
const mutations: MutationTree<ProjectState> = {
  // 更新state都用该方法
  UPDATE_STATE(state: ProjectState, data: ProjectState) {
    for (const key in data) {
      if (!data.hasOwnProperty(key)) { return }
      // state[key] = data[key]
    }
  }
}

const actions: ActionTree<ProjectState, any> = {
  UPDATE_STATE_ASYN({ commit, state: ProjectState }, data: ProjectState) {
    commit('UPDATE_STATE', data)
  },
  // GET_DATA_ASYN({ commit, state: LoginState }) {
  //   Project.getData()
  // }
}

export default {
  state,
  getters,
  mutations,
  actions
}

