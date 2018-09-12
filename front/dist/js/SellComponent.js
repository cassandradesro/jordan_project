'use strict';

var SellComponent = Vue.component("sell", {
	props: ['sell', 'logo'],
	data: function data() {
		return {
			shoeImageSrc: ""
		};
	},
	template: '\n\t<div class="page" id="sell" :style=" \'background-image:url(\' + sell.heroBackground + \')\' ">\n\n\t\t<div class="col col1">\n\t\t\t<ul>\n\t\t\t\t<li :class="(shoeImageSrc==shoe.mainImage)?\'picked\':\'\'" @click="shoeSelect(shoe.mainImage)" v-for="(shoe, index) in sell.shoes">\n\t\t\t\t\t<img :src="shoe.mainImage" alt="jordan shoes">\n\t\t\t\t\t<p>{{shoe.title}}</p>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t\t<div class="col col2">\n\t\t\t<form id="frmUploader" enctype="multipart/form-data" action="http://159.65.236.175:4792/api/Upload/" method="post">\n\t\t\t\t<label for="style">Type of Jordans</label>\n\t\t\t\t<input id="Style/Name" type="text" name="style" placeholder="Style/Name"/>\n\t\t\t\t\n\t\t\t\t<label  for="condition">Selling Condition</label>\n\t\t\t\t<select id="condition" name="condition" >\n\t\t\t\t  <option value="">--Select Condition--</option>\n\t\t\t\t  <option value="Poor">Poor</option>\n\t\t\t\t  <option value="Good">Good</option>\n\t\t\t\t  <option value="New">New</option>\n\t\t\t\t  <option value="Never Been Worn">Never Been Worn</option>\n\t\t\t\t</select>\n\n\t\t\t\t<label for="shoesize">Shoe Size:</label>\n\t\t\t\t<select id="shoesize" name="shoesize" >\n\t\t\t\t  <option value="">--Select Shoe Size--</option>\n\t\t\t\t  <option value="5">sz 5</option>\n\t\t\t\t  <option value="6">sz 6</option>\n\t\t\t\t  <option value="7">sz 7</option>\n\t\t\t\t  <option value="8">sz 8</option>\n\t\t\t\t  <option value="9">sz 9</option>\n\t\t\t\t  <option value="10">sz 10</option>\n\t\t\t\t  <option value="11">sz 11</option>\n\t\t\t\t  <option value="12">sz 12</option>\n\t\t\t\t  <option value="13">sz 13</option>\n\t\t\t\t</select>\n\n\t\t\t\t<label for="startingbid">Starting Bid:</label>\n\t\t\t\t<input id="startingbid" type="text" name="startingbid" placeholder="Starting Bid"/>\n\t\t\t\t\n\n\t\t\t\t<input v-model="shoeImageSrc" id="shoeImageSrc" type="hidden" name="shoeImageSrc" />\n\t\t\t\t\n\t\t\t\t<input type="file" name="imgUploader" />\n\t\t\t\t<input type="submit" name="submit" id="btnSubmit" value="Upload" /> \n\n\t\t\t</form>\n\t\t</div>\n\t</div>\n\t',
	mounted: function mounted() {
		var options = {
			beforeSubmit: showRequest, // pre-submit callback
			success: showResponse // post-submit callback
		};
		// bind to the form's submit event
		$('#frmUploader').submit(function (e) {
			e.preventDefault();
			$(this).ajaxSubmit(options); // always return false to prevent standard browser submit and page navigation 
			return false;
		});
		function showRequest(formData, jqForm, options) {
			console.log('Uploading is starting.');
			return true;
		} // post-submit callback 
		function showResponse(responseText, statusText, xhr, $form) {
			// alert('status: ' + statusText + '\n\nresponseText: \n' + responseText );
			console.log(responseText);
		}
	},

	methods: {
		shoeSelect: function shoeSelect(shoeImageSrc) {
			console.log("shoeSelect", shoeImageSrc);

			this.shoeImageSrc = shoeImageSrc;

			// this.$emit("userselectedshoe", shoeImageSrc)
			// event.target.parentNode.classList.add("active")
			// this.giphys = []
			// this.giphyString = ""
		}
	}
});
//# sourceMappingURL=SellComponent.js.map
