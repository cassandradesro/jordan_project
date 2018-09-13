"use strict";

var ShoeComponent = Vue.component("shoe", {
	props: [""],
	template: "\n\t\t<div>\n\t\t\t<div>This is an individual shoe for sale page for shoe with ID {{$route.params.id}} </div>\n\t\t\t<div>\n\t\t\t\t{{shoe.style}}\n\t\t\t\t{{shoe.condition}}\n\t\t\t\t{{shoe.startingbid}}\n\t\t\t\t{{shoe.shoesize}\n\n\t\t\t\t<img v-if=\"shoe.uploadedImage\" :src=\" '//159.65.236.175:4792/' + shoe.uploadedImage \" alt=\"jordan shoes\">\n\t\t\t\t<img v-else-if=\"shoe.pickedImage\" :src=\"shoe.pickedImage \" alt=\"jordan shoes\">\n\t\t\t</div>\n\t\t\t<input v-model=\"newUsername\" name=\"new-username\" placeholder=\"Username\">\n\t\t\t<input v-model=\"newMessage\" name=\"new-message\" placeholder=\"Message\">\n\t\t\t<button @click=\"sendMessage\" class=\"send\">Send</button>\n\t\t\t<ul class=\"messages\">\n\t\t\t\t<li v-for=\"message in shoe.messages\">\n\t\t\t\t\t{{message.username}}\n\t\t\t\t\t{{message.text}}\n\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t",
	data: function data() {
		return {
			shoe: {},
			newUsername: "",
			newMessage: ""
		};
	},
	mounted: function mounted() {
		var _this = this;

		axios //172.31.16.162
		.get("http://159.65.236.175:4792/shoe/" + this.$route.params.id).then(function (res) {
			console.log("success", res);
			_this.shoe = res.data;
		}).catch(function (error) {
			console.log("error", error);
		});
	},
	methods: {
		sendMessage: function sendMessage() {
			var _this2 = this;

			console.log('send to server:', this.newMessage, this.newUsername);

			axios //172.31.16.162
			.post("http://159.65.236.175:4792/shoe/" + this.$route.params.id + "/message", {
				text: this.newMessage,
				username: this.newUsername

			}).then(function (res) {
				console.log("success", res);
				_this2.shoe = res.data;
			}).catch(function (error) {
				console.log("error", error);
			});
		}
	}
});
//# sourceMappingURL=ShoeComponent.js.map
