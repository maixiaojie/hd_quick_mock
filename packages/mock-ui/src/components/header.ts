import { Component, Vue } from "vue-property-decorator"
import { Getter, Action } from "vuex-class"
import { MenuItem } from 'ant-design-vue/types/menu/menu-item'
@Component({
})
export default class Header extends Vue {
	current: string[] = ['dashboard']
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
	MenuSelect(item: MenuItem) {
		this.$router.push({
			path: `/${item.key}`
		})
	}
}
