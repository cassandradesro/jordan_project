Vue.component("logo", {
	props: ['logo'],
	template: `
		<router-link to="/">
			<img :src="logo" class="logo" alt="jordan logo">
		</router-link>
	`,
})