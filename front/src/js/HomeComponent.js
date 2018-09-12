var HomeComponent = Vue.component("home", {
	props: ['home', 'logo'],
	template: `
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
					<div>
						<h1>Original Release</h1>
						<p>{{shoe.originalRelease}}</p>
					</div>
					<div>
						<h1>Original Color</h1>
						<p>{{shoe.originalColor}}</p>
					</div>
					<div>
						<h2>{{shoe.shoeNumber}}</h2>
					</div>
					<div>
						<h1>Collection</h1>
						<p>{{shoe.collection}}</p>
					</div>
					<div>
						<h1>Location</h1>
						<p>{{shoe.location}}</p>
					</div>
				</li>
				<div @click="next(1)" id="next">
					&rarr;
				</div>
			</section>
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