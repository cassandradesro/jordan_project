"use strict";

Vue.component("navigation", {
	props: ['logo'],
	template: "\n\t\t<div>\n\t\t\t<logo :logo=\"logo\"></logo>\n\t\t\t<nav>\n\t\t\t\t<router-link to=\"/\">Home</router-link>\n\t\t\t\t<router-link to=\"/sell\">Sell</router-link>\n\t\t\t\t<router-link to=\"/buy\">Buy</router-link>\n\t\t\t\t<router-link to=\"#\">Trade</router-link>\n\t\t\t</nav>\n\t\t</div>\n\t"
});
//# sourceMappingURL=NavigationComponent.js.map
