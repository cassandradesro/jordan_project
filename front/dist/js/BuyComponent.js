'use strict';

var BuyComponent = Vue.component("buy", {
	props: ['buy', 'logo'],
	data: function data() {
		return {
			shoes: []
		};
	},
	template: '\n\t<div id="buy" class="page" :style=" \'background-image:url(\' + buy.heroBackground + \')\' ">\n\t<h1>Buy</h1>\n\t\n\t\t<section class="container">\n\t\t\t<ul class="shoeBox">\n\t\t\t\t<div v-for="(shoe, index) in shoes">\n\t\t\t\t\t<img v-if="shoe.uploadedImage" :src=" \'//159.65.236.175:4792/\' + shoe.uploadedImage " alt="jordan shoes">\n\t\t\t\t\t<img v-else-if="shoe.pickedImage" :src=" shoe.pickedImage " alt="jordan shoes">\n\t\t\t\t\t<h3 v-if="shoe.uploadedImage">{{shoe.style}}</h3>\n\t\t\t\t\t<p v-if="shoe.uploadedImage">Condition: {{shoe.condition}}</p>\n\t\t\t\t\t<p v-if="shoe.uploadedImage">Starting Bid: $ {{shoe.startingbid}}</p>\n\t\t\t\t\t<p v-if="shoe.uploadedImage">Size: {{shoe.shoesize}}</p>\n\t\t\t\t\t<button v-if="shoe.uploadedImage">Buy</button>\n\t\t\t\t</div>\n\t\t\t</ul>\n\t\t</section>\n\t</div>\n\t',
	mounted: function mounted() {
		var _this = this;

		console.log("fetched shoes");
		axios //172.31.16.162
		.get("http://159.65.236.175:4792").then(function (res) {
			console.log("success", res);
			_this.shoes = res.data;
		}).catch(function (error) {
			console.log("error", error);
		});
	}
});
//# sourceMappingURL=BuyComponent.js.map
