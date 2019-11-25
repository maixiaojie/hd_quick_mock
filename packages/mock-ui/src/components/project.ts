import { Component, Vue, Prop, Emit } from "vue-property-decorator"
import { Getter, Action } from "vuex-class"
import { emit } from 'cluster'
@Component({
})
export default class Project extends Vue {
	@Prop(String) name!: ''
	@Prop(String) projectID!: ''
	@Prop(String) baseUrl!: ''

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

	@Emit('editClick')
	toEdit() {
		return this.projectID
	}
}
