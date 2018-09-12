'use strict';

var HomeComponent = Vue.component("home", {
	props: ['home', 'logo'],
	template: '\n\t\t<div class="page" :style=" \'background-image:url(\' + home.heroBackground + \')\' ">\n\n\t\t\t<section class="hero" >\n\t\t\t\t<div @click="prev(1)" id="prev">\n\t\t\t\t\t&larr;\n\t\t\t\t</div>\n\t\t\t\t<div id="scene">\n\t\t\t\t\t<div data-depth="0.2">\n\t\t\t\t\t\t<img class="fg-j" v-for="(shoe, index) in home.shoes" :src="shoe.foregroundImage" v-if="index == shoeSlideshowActive">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div data-depth="0.6">\n\t\t\t\t\t\t<img class="bg-j" v-for="(shoe, index)  in home.shoes" :src="shoe.backgroundImage" v-if="index == shoeSlideshowActive">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\t\n\t\t\t\t<li class="shoe-info" v-for="(shoe, index) in home.shoes" v-if="index == shoeSlideshowActive">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<h1>Original Release</h1>\n\t\t\t\t\t\t<p>{{shoe.originalRelease}}</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<h1>Original Color</h1>\n\t\t\t\t\t\t<p>{{shoe.originalColor}}</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<h2>{{shoe.shoeNumber}}</h2>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<h1>Collection</h1>\n\t\t\t\t\t\t<p>{{shoe.collection}}</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<h1>Location</h1>\n\t\t\t\t\t\t<p>{{shoe.location}}</p>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t\t<div @click="next(1)" id="next">\n\t\t\t\t\t&rarr;\n\t\t\t\t</div>\n\t\t\t</section>\n\t\t</div>\n\t',
	data: function data() {
		return {
			shoeSlideshowActive: 0,
			intervalID: null
		};
	},
	mounted: function mounted() {
		var scene = document.querySelector('#scene');
		var parallaxInstance = new Parallax(scene, {
			relativeInput: true,
			hoverOnly: true
		});
	},
	created: function created() {
		var _this = this;

		if (window.innerWidth < 768) return; //this code prevents the function from running on mobile
		this.intervalID = setInterval(function () {
			console.log("slide changed:");
			_this.shoeSlideshowActive++;
			if (_this.shoeSlideshowActive > _this.home.shoes.length - 1) {
				_this.shoeSlideshowActive = 0;
			}
		}, 8000);
	},
	methods: {
		next: function next(amount) {
			console.log("next");
			clearInterval(this.intervalID);
			this.shoeSlideshowActive++;
			if (this.shoeSlideshowActive > this.home.shoes.length - 1) {
				this.shoeSlideshowActive = 0;
			}
		},
		prev: function prev(amount) {
			console.log("prev");
			clearInterval(this.intervalID);
			this.shoeSlideshowActive--;
			if (this.shoeSlideshowActive < 0) {
				this.shoeSlideshowActive = this.home.shoes.length - 1;
			}
		}
	}
});
//# sourceMappingURL=HomeComponent.js.map
