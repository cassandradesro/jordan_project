var BuyComponent = Vue.component("buy", {
	props: ['buy', 'logo'],
	data:  () => {
		return {
			shoes: []
		}
	},
	template: `
	<div id="buy" class="page" :style=" 'background-image:url(' + buy.heroBackground + ')' ">
	<h1>Buy</h1>
	
		<section class="container">
			<ul class="shoeBox">
				<div v-for="(shoe, index) in shoes">
					<img v-if="shoe.uploadedImage" :src=" '//159.65.236.175:4792/' + shoe.uploadedImage " alt="jordan shoes">
					<img v-else-if="shoe.pickedImage" :src=" shoe.pickedImage " alt="jordan shoes">
					<h3 v-if="shoe.uploadedImage">{{shoe.style}}</h3>
					<p v-if="shoe.uploadedImage">Condition: {{shoe.condition}}</p>
					<p v-if="shoe.uploadedImage">Starting Bid: $ {{shoe.startingbid}}</p>
					<p v-if="shoe.uploadedImage">Size: {{shoe.shoesize}}</p>
					<button v-if="shoe.uploadedImage">Buy</button>
				</div>
			</ul>
		</section>
	</div>
	`,
	mounted: function(){
		console.log("fetched shoes");
		axios //172.31.16.162
			.get("http://159.65.236.175:4792")
			.then((res) => {
				console.log("success", res)
				this.shoes = res.data;
			})
			.catch((error) => {
				console.log("error", error)
			})
	},
})