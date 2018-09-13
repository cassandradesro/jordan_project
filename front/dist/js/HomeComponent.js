'use strict';

var HomeComponent = Vue.component("home", {
	props: ['home', 'logo'],
	template: '\n\t<div>\n\t\t<div class="page" :style=" \'background-image:url(\' + home.heroBackground + \')\' ">\n\n\t\t\t<section class="hero" >\n\t\t\t\t<div @click="prev(1)" id="prev">\n\t\t\t\t\t&larr;\n\t\t\t\t</div>\n\t\t\t\t<div id="scene">\n\t\t\t\t\t<div data-depth="0.2">\n\t\t\t\t\t\t<img class="fg-j" v-for="(shoe, index) in home.shoes" :src="shoe.foregroundImage" v-if="index == shoeSlideshowActive">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div data-depth="0.6">\n\t\t\t\t\t\t<img class="bg-j" v-for="(shoe, index)  in home.shoes" :src="shoe.backgroundImage" v-if="index == shoeSlideshowActive">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\t\n\t\t\t\t<li class="shoe-info" v-for="(shoe, index) in home.shoes" v-if="index == shoeSlideshowActive">\n\t\t\t\t\t<div class="hide-on-mobile">\n\t\t\t\t\t\t<h1>Original Release</h1>\n\t\t\t\t\t\t<p>{{shoe.originalRelease}}</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="hide-on-mobile">\n\t\t\t\t\t\t<h1>Original Color</h1>\n\t\t\t\t\t\t<p>{{shoe.originalColor}}</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<h2>{{shoe.shoeNumber}}</h2>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="hide-on-mobile">\n\t\t\t\t\t\t<h1>Collection</h1>\n\t\t\t\t\t\t<p>{{shoe.collection}}</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="hide-on-mobile">\n\t\t\t\t\t\t<h1>Location</h1>\n\t\t\t\t\t\t<p>{{shoe.location}}</p>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t\t<div @click="next(1)" id="next">\n\t\t\t\t\t&rarr;\n\t\t\t\t</div>\n\t\t\t\t<a href="#" id="down" class="white" >&darr;</a>\n\t\t\t</section>\n\t\t</div>\n\t\t<div class="site-area">\n\t\t\t<h1>Jordan Lounge</h1>\n\t\t\t<h3>Contribute to the Air Jordan Collection</h3>\n\t\t\t<div  class="container">\n\t\t\t\t<div class="box">\n\t\t\t\t\t<h2>Sell</h2>\n\t\t\t\t\t<p>Jordan Lounge brings the online sneaker community right to your screen. Sell Jordans to both casual buyers and serious collectors.</p>\n\t\t\t\t\t<router-link to="/sell">Start Selling</router-link>\n\t\t\t\t</div>\n\t\t\t\t<div class="box">\n\t\t\t\t\t<h2>Buy</h2>\n\t\t\t\t\t<p>Complete your collection with thousands of Jordans to buy from limited edition to classic colorways.</p>\n\t\t\t\t\t<router-link to="/buy">Shop Listings</router-link>\n\t\t\t\t</div>\n\t\t\t\t<div class="box">\n\t\t\t\t\t<h2>Trade</h2>\n\t\t\t\t\t<p>Start the discussion to see what Jordan Lounge community members have that could be added to your collection. Chat and decide what to trade easily and openly. </p>\n\t\t\t\t\t<router-link to="#">Live Chat</router-link>\n\n\t\t\t\t</div>\t\n\t\t\t</div>\n\t\t\t<p class="hash">#airjordancollection</p>\n\t\t\t<div class="image-container">\n\t\t\t\t<div class="col col-1">\n\t\t\t\t<img src="dist/img/aj-image1.jpg" alt="image of shoe">\n\t\t\t\t<img class="smaller cut" src="dist/img/aj-image3.jpg" alt="image of shoe">\n\t\t\t\t<img src="dist/img/aj-image5.jpg" alt="image of shoe">\n\t\t\t\t\n\t\t\t\t</div>\n\t\t\t\t<div class="col col-2">\n\t\t\t\t<img src="dist/img/aj-image2.jpg" alt="image of shoe">\n\t\t\t\t<img class="smaller" src="dist/img/aj-image4.jpg" alt="image of shoe">\n\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\n\n\t\t\t\n\n\t\t</div>\n\t</div>\n\t',
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
