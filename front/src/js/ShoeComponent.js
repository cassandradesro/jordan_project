let ShoeComponent = Vue.component("shoe", {
	props: [""],
	template: `
		<div>
			<div>This is an individual shoe for sale page for shoe with ID {{$route.params.id}} </div>
			<div>
				{{shoe.style}}
				{{shoe.condition}}
				{{shoe.startingbid}}
				{{shoe.shoesize}

				<img v-if="shoe.uploadedImage" :src=" '//159.65.236.175:4792/' + shoe.uploadedImage " alt="jordan shoes">
				<img v-else-if="shoe.pickedImage" :src="shoe.pickedImage " alt="jordan shoes">
			</div>
			<input v-model="newUsername" name="new-username" placeholder="Username">
			<input v-model="newMessage" name="new-message" placeholder="Message">
			<button @click="sendMessage" class="send">Send</button>
			<ul class="messages">
				<li v-for="message in shoe.messages">
					{{message.username}}
					{{message.text}}

				</li>
			</ul>
		</div>
	`,
	data: function() {
		return {
			shoe: {},
			newUsername: "",
			newMessage: ""
		}
	},
	mounted: function() {
		axios //172.31.16.162
			.get("http://159.65.236.175:4792/shoe/"+ this.$route.params.id)
			.then((res) => {
				console.log("success", res)
				this.shoe = res.data;
			})
			.catch((error) => {
				console.log("error", error)
			})
	}, 
	methods:{
		sendMessage() {

			console.log('send to server:', this.newMessage, this.newUsername)

			axios //172.31.16.162
				.post("http://159.65.236.175:4792/shoe/"+ this.$route.params.id + "/message", {
					text: this.newMessage,
					username: this.newUsername

				})
				.then((res) => {
					console.log("success", res)
					this.shoe = res.data;
					
				})
				.catch((error) => {
					console.log("error", error)
				})
			
		},
	},
})