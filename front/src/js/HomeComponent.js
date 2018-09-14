var HomeComponent = Vue.component("home", {
	props: ['home', 'logo'],
	template: `
	<div>
		<div class="page" :style=" 'background-image:url(' + home.heroBackground + ')' ">

			<section class="hero" >
				<div @click="prev(1)" id="prev">
					&larr;
				</div>
				<div id="scene">
					<div data-depth="0.2">
						<img class="fg-j" v-for="(shoe, index) in home.shoes" :src="shoe.foregroundImage" v-if="index == shoeSlideshowActive">
					</div>
					<div data-depth="0.6">
						<img class="bg-j" v-for="(shoe, index)  in home.shoes" :src="shoe.backgroundImage" v-if="index == shoeSlideshowActive">
					</div>
				</div>	
				<li class="shoe-info" v-for="(shoe, index) in home.shoes" v-if="index == shoeSlideshowActive">
					<div class="hide-on-mobile">
						<h1>Original Release</h1>
						<p>{{shoe.originalRelease}}</p>
					</div>
					<div class="hide-on-mobile">
						<h1>Original Color</h1>
						<p>{{shoe.originalColor}}</p>
					</div>
					<div>
						<h2>{{shoe.shoeNumber}}</h2>
					</div>
					<div class="hide-on-mobile">
						<h1>Collection</h1>
						<p>{{shoe.collection}}</p>
					</div>
					<div class="hide-on-mobile">
						<h1>Location</h1>
						<p>{{shoe.location}}</p>
					</div>
				</li>
				<div @click="next(1)" id="next">
					&rarr;
				</div>
				<a href="#" id="down" class="white" >&darr;</a>
			</section>
		</div>
		<div class="site-area">
			<h1>Jordan Lounge</h1>
			<h3>Contribute to the Air Jordan Collection</h3>
			<div  class="container">
				<div class="box">
					<h2>Sell</h2>
					<p>Jordan Lounge brings the online sneaker community right to your screen. Sell Jordans to both casual buyers and serious collectors.</p>
					<router-link to="/sell">Start Selling</router-link>
				</div>
				<div class="box">
					<h2>Buy</h2>
					<p>Complete your collection with thousands of Jordans to buy from limited edition to classic colorways.</p>
					<router-link to="/buy">Shop Listings</router-link>
				</div>
				<div class="box">
					<h2>Trade</h2>
					<p>Start the discussion to see what Jordan Lounge community members have that could be added to your collection. Chat and decide what to trade easily and openly. </p>
					<router-link to="#">Trade Jordans</router-link>

				</div>	
			</div>
			<p class="hash">#airjordancollection</p>
			<div class="image-container">
				<div class="col col-1">
				<img src="dist/img/aj-image1.jpg" alt="image of shoe">
				<img class="smaller cut" src="dist/img/aj-image3.jpg" alt="image of shoe">
				<img src="dist/img/aj-image5.jpg" alt="image of shoe">
				
				</div>
				<div class="col col-2">
				<img src="dist/img/aj-image2.jpg" alt="image of shoe">
				<img class="smaller" src="dist/img/aj-image4.jpg" alt="image of shoe">

				</div>
			</div>
		

			

		</div>
	</div>
	`,
	data: () => {
		return {
			shoeSlideshowActive: 0,
			intervalID: null
		}
	},
	mounted: function(){
		var scene = document.querySelector('#scene');
		var parallaxInstance = new Parallax(scene, {
			relativeInput: true,
			hoverOnly: true,
		});
	},
	created: function() {
		if (window.innerWidth < 768) return; //this code prevents the function from running on mobile
		this.intervalID = setInterval(() => {
			console.log("slide changed:" )
			this.shoeSlideshowActive ++;
			if (this.shoeSlideshowActive > this.home.shoes.length - 1){
				this.shoeSlideshowActive = 0;
			}
		}, 8000)

	},
	methods: {
	    next(amount){
	    	console.log("next")
	    	clearInterval(this.intervalID)
	    	this.shoeSlideshowActive ++;
    		if (this.shoeSlideshowActive > this.home.shoes.length - 1){
    			this.shoeSlideshowActive = 0;
    		}
	    },
	    prev(amount){
	    	console.log("prev")
	    	clearInterval(this.intervalID)
	    	this.shoeSlideshowActive --;
    		if (this.shoeSlideshowActive < 0){
    			this.shoeSlideshowActive = this.home.shoes.length - 1;
    		}
	    }
	}
})