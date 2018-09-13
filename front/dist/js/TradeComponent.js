'use strict';

var TradeComponent = Vue.component("trade", {
	props: ['sell', 'logo'],
	data: function data() {
		return {
			shoeImageSrc: ""
		};
	},
	template: '\n\t<div class="page" id="sell" :style=" \'background-image:url(\' + trade.heroBackground + \')\' ">\n\t\t<div class="col col1">\n\t\t<h2>Select the image of the Jordans you are selling:</h2>\n\t\t\t<ul>\n\t\t\t\t<li :class="(shoeImageSrc==shoe.mainImage)?\'picked\':\'\'" @click="shoeSelect(shoe.mainImage)" v-for="(shoe, index) in sell.shoes">\n\t\t\t\t\t<img :src="shoe.mainImage" alt="jordan shoes">\n\t\t\t\t\t<p>{{shoe.title}}</p>\n\t\t\t\t</li>\n\t\t\t\t<input v-model="shoeImageSrc" id="shoeImageSrc" type="hidden" name="shoeImageSrc" />\n\t\t\t</ul>\n\t\t</div>\n\t</div\n\t'

});
//# sourceMappingURL=TradeComponent.js.map
