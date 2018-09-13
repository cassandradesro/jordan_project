var SellComponent = Vue.component("sell", {
	props: ['sell', 'logo'],
	data: function() {
		return {
			shoeImageSrc: "",
		}
	},
	template: `
	<div class="page" id="sell" :style=" 'background-image:url(' + sell.heroBackground + ')' ">
		<h1>Step 1:</h1>
		<form id="frmUploader" enctype="multipart/form-data" action="http://159.65.236.175:4792/api/Upload/" method="post">
			<div class="col-container">
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
				<h1 class="or">OR</h1>
				
				<div class="col col2">
					<h2>Upload an image of the Jordans you are selling:</h2>
					<div class="box">
					<input type="file" name="imgUploader" id="imgUploader" class="inputfile inputfile-4" data-multiple-caption="{count} files selected" />
					<label for="imgUploader">
						<figure><svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"/></svg></figure> 
						<span>Choose a file&hellip;</span>
					</label>
					</div>
				</div>
			</div>
			<h1>Step 2:</h1>
			<h2>Complete Form Below</h2>
			<div class="form-container"
				
				<label for="style">Type of Jordans</label>
				<input id="Style/Name" type="text" name="style" placeholder="Style/Name"/>
				<label for="startingbid">Starting Bid:</label>
				<input id="startingbid" type="text" name="startingbid" placeholder="Starting Bid"/>
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
				<option value="6.5">sz 6.5</option>
				<option value="7">sz 7</option>
				<option value="7.5">sz 7.5</option>
				<option value="8">sz 8</option>
				<option value="8.5">sz 8.5</option>
				<option value="9">sz 9</option>
				<option value="9.5">sz 9.5</option>
				<option value="10">sz 10</option>
				<option value="10.5">sz 10.5</option>
				<option value="11">sz 11</option>
				<option value="12">sz 12</option>
				<option value="13">sz 13</option>
				</select>

				
				<input type="submit" name="submit" id="btnSubmit" value="Complete Listing" /> 
				<p class="confirmation">Listing saved...</p>
			</div>
		</form>
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
		},
		confirm: function(){

		}
	},
})