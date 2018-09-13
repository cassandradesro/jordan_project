var TradeComponent = Vue.component("trade", {
	props: ['sell', 'logo'],
	data: function() {
		return {
			shoeImageSrc: "",
		}
	},
	template: `
	<div class="page" id="sell" :style=" 'background-image:url(' + trade.heroBackground + ')' ">
		<div class="col col1">
		<h2>Select the image of the Jordans you are selling:</h2>
			<ul>
				<li :class="(shoeImageSrc==shoe.mainImage)?'picked':''" @click="shoeSelect(shoe.mainImage)" v-for="(shoe, index) in sell.shoes">
					<img :src="shoe.mainImage" alt="jordan shoes">
					<p>{{shoe.title}}</p>
				</li>
				<input v-model="shoeImageSrc" id="shoeImageSrc" type="hidden" name="shoeImageSrc" />
			</ul>
		</div>
	</div
	`,

})