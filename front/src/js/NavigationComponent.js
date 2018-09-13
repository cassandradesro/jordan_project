Vue.component("navigation", {
	props: ['logo'],
	template: `
		<div>
			<logo :logo="logo"></logo>
			<nav>
				<router-link to="/">Home</router-link>
				<router-link to="/sell">Sell</router-link>
				<router-link to="/buy">Buy</router-link>
				<router-link to="/trade">Trade</router-link>
			</nav>
		</div>
	`,
})