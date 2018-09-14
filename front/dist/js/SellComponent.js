'use strict';

var SellComponent = Vue.component("sell", {
	props: ['sell', 'logo'],
	data: function data() {
		return {
			shoeImageSrc: ""
		};
	},
	template: '\n\t<div class="page" id="sell" :style=" \'background-image:url(\' + sell.heroBackground + \')\' ">\n\t\t<form id="frmUploader" enctype="multipart/form-data" action="http://159.65.236.175:4792/api/Upload/" method="post">\n\t\t\t<div class="col-container">\t\t\t\t\n\t\t\t\t<div class="col col1">\t\t\n\t\t\t\t\t<h1>Step 1:</h1>\n\t\t\t\t\t<h2>Upload an image of the Jordans you are selling:</h2>\n\t\t\t\t\t<div class="box">\n\t\t\t\t\t<input type="file" name="imgUploader" id="imgUploader" class="inputfile inputfile-4" data-multiple-caption="{count} files selected" />\n\t\t\t\t\t<label for="imgUploader">\n\t\t\t\t\t\t<figure><svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"/></svg></figure> \n\t\t\t\t\t\t<span>Choose a file&hellip;</span>\n\t\t\t\t\t</label>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="col col-2">\n\t\t\t\t<h1>Step 2:</h1>\n\t\t\t\t<h2>Complete Form Below</h2>\n\t\t\t\t<div class="form-container"\n\t\t\t\t\t\n\t\t\t\t\t<label for="style">Type of Jordans</label>\n\t\t\t\t\t<input id="Style/Name" type="text" name="style" placeholder="Style/Name"/>\n\t\t\t\t\t<label for="startingbid">Starting Bid:</label>\n\t\t\t\t\t<input id="startingbid" type="text" name="startingbid" placeholder="Starting Bid"/>\n\t\t\t\t\t<label  for="condition">Selling Condition</label>\n\t\t\t\t\t<select id="condition" name="condition" >\n\t\t\t\t\t<option value="">--Select Condition--</option>\n\t\t\t\t\t<option value="Poor">Poor</option>\n\t\t\t\t\t<option value="Good">Good</option>\n\t\t\t\t\t<option value="New">New</option>\n\t\t\t\t\t<option value="Never Been Worn">Never Been Worn</option>\n\t\t\t\t\t</select>\n\n\t\t\t\t\t<label for="shoesize">Shoe Size:</label>\n\t\t\t\t\t<select id="shoesize" name="shoesize" >\n\t\t\t\t\t<option value="">--Select Shoe Size--</option>\n\t\t\t\t\t<option value="5">sz 5</option>\n\t\t\t\t\t<option value="6">sz 6</option>\n\t\t\t\t\t<option value="6.5">sz 6.5</option>\n\t\t\t\t\t<option value="7">sz 7</option>\n\t\t\t\t\t<option value="7.5">sz 7.5</option>\n\t\t\t\t\t<option value="8">sz 8</option>\n\t\t\t\t\t<option value="8.5">sz 8.5</option>\n\t\t\t\t\t<option value="9">sz 9</option>\n\t\t\t\t\t<option value="9.5">sz 9.5</option>\n\t\t\t\t\t<option value="10">sz 10</option>\n\t\t\t\t\t<option value="10.5">sz 10.5</option>\n\t\t\t\t\t<option value="11">sz 11</option>\n\t\t\t\t\t<option value="12">sz 12</option>\n\t\t\t\t\t<option value="13">sz 13</option>\n\t\t\t\t\t</select>\n\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t</div>\n\t\t\t<input type="submit" name="submit" id="btnSubmit" value="Complete Listing" /> \n\t\t\t\t\t<p class="confirmation">Listing saved...</p>\n\t\t\t\n\t\t</form>\n\t</div>\n\t',
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
		},
		confirm: function confirm() {}
	}
});
//# sourceMappingURL=SellComponent.js.map
