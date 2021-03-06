import { Component, Vue } from "vue-property-decorator"
import { Getter, Action, State } from "vuex-class"
import { MenuItem } from 'ant-design-vue/types/menu/menu-item'
import { get_github_login_url } from '../api/login'
@Component({
})
export default class Header extends Vue {
	current: string[] = ['dashboard']

	@Getter loading!: boolean
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
	async github_login() {
		let data: any = await get_github_login_url()
		if (data && data.url) {
			window.location.href = data.url
		}
	}
	MenuSelect(item: MenuItem) {
		this.$router.push({
			path: `/${item.key}`
		})
	}
}
