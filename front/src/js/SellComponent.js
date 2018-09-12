var SellComponent = Vue.component("sell", {
	props: ['sell', 'logo'],
	data: function() {
		return {
			shoeImageSrc: ""
		}
	},
	template: `
	<div class="page" id="sell" :style=" 'background-image:url(' + sell.heroBackground + ')' ">

		<div class="col col1">
			<ul>
				<li :class="(shoeImageSrc==shoe.mainImage)?'picked':''" @click="shoeSelect(shoe.mainImage)" v-for="(shoe, index) in sell.shoes">
					<img :src="shoe.mainImage" alt="jordan shoes">
					<p>{{shoe.title}}</p>
				</li>
			</ul>
		</div>
		<div class="col col2">
			<form id="frmUploader" enctype="multipart/form-data" action="http://159.65.236.175:4792/api/Upload/" method="post">
				<label for="style">Type of Jordans</label>
				<input id="Style/Name" type="text" name="style" placeholder="Style/Name"/>
				
				<label  for="condition">Selling Condition</label>
				<select id="condition" name="condition" >
				  <option value="">--Select Condition--</option>
				  <option value="Poor">Poor</option>
				  <option value="Good">Good</option>
				  <option value="New">New</option>
				  <option value="Never Been Worn">Never Been Worn</option>
				</select>

				<label for="shoesize">Shoe Size:</label>
				<select id="shoesize" name="shoesize" >
				  <option value="">--Select Shoe Size--</option>
				  <option value="5">sz 5</option>
				  <option value="6">sz 6</option>
				  <option value="7">sz 7</option>
				  <option value="8">sz 8</option>
				  <option value="9">sz 9</option>
				  <option value="10">sz 10</option>
				  <option value="11">sz 11</option>
				  <option value="12">sz 12</option>
				  <option value="13">sz 13</option>
				</select>

				<label for="startingbid">Starting Bid:</label>
				<input id="startingbid" type="text" name="startingbid" placeholder="Starting Bid"/>
				

				<input v-model="shoeImageSrc" id="shoeImageSrc" type="hidden" name="shoeImageSrc" />
				
				<input type="file" name="imgUploader" />
				<input type="submit" name="submit" id="btnSubmit" value="Upload" /> 

			</form>
		</div>
	</div>
	`,
	mounted:
		function() {
		    var options = {
	            beforeSubmit: showRequest, // pre-submit callback
	            success: showResponse // post-submit callback
	        };
	                 // bind to the form's submit event
			$('#frmUploader').submit(function (e) {
				e.preventDefault()
				$(this).ajaxSubmit(options); // always return false to prevent standard browser submit and page navigation 
				return false; 
			}); 
		    function showRequest(formData, jqForm, options) { 
		    	console.log('Uploading is starting.'); 
		    	return true; 
		    } // post-submit callback 
		    function showResponse(responseText, statusText, xhr, $form) { 
		    	// alert('status: ' + statusText + '\n\nresponseText: \n' + responseText );
		    	console.log(responseText)
		    }
		}
	,
	methods: {
		shoeSelect: function(shoeImageSrc){
			console.log("shoeSelect", shoeImageSrc)

			this.shoeImageSrc = shoeImageSrc;

			// this.$emit("userselectedshoe", shoeImageSrc)
			// event.target.parentNode.classList.add("active")
			// this.giphys = []
			// this.giphyString = ""
		},
	},
})