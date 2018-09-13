var BuyComponent = Vue.component("buy", {
	props: ['buy', 'logo'],
	data:  () => {
		return {
			shoes: []
		}
	},
	template: `
	<div id="buy" class="page" :style=" 'background-image:url(' + buy.heroBackground + ')' ">

		<section class="container">
			<h1>Buy Jordans</h1>
			<ul class="shoeBox">
				<router-link :to="'shoe/' + index" v-for="(shoe, index) in shoes">
					<img v-if="shoe.uploadedImage" :src=" '//159.65.236.175:4792/' + shoe.uploadedImage " alt="jordan shoes">
					<img v-else-if="shoe.pickedImage" :src=" shoe.pickedImage " alt="jordan shoes">
					<h1>{{shoe.style}}</h1>
					<p>{{shoe.condition}}</p>
					<p>{{shoe.startingbid}}</p>
					<p>{{shoe.shoesize}}</p>
				</router-link>
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