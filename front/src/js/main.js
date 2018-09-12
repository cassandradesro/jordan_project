console.log(`Hello World from main.js! Cassandra Final Node Project called "Jordan Lounge"`)

const router = new VueRouter({
	routes: [
		{ path: '/', component: HomeComponent },
		{ path: '/sell', component: SellComponent},
		{ path: '/buy', component: BuyComponent },
		{ path: '/shoe/:id', component: ShoeComponent },
	]
});

const URL_BASE = "https://www.nike.com/VO/XX_XX/e/content/dam/jordan/air-jordan-collection/";

var app = new Vue({
	el: "#app",
	router: router,
	data: {
		logo: "dist/img/jordanlogo.png",
		home: {
			heroBackground: URL_BASE + "images/bgplates/h-bg-suededarkgreydark.png",
			shoes: [
				{
					foregroundImage: URL_BASE + "images/heroes/h-ajxiv-b.png",
					backgroundImage: URL_BASE + "images/heroes/h-ajxiv-f.png",
					shoeNumber: 'XIV',
					originalRelease: 'Lorem Ipsum',
					originalColor:'Lorem Ipsum',
					collection:'Lorem Ipsum',
					location:'Lorem Ipsum',
				},
				{
					foregroundImage: URL_BASE + "images/heroes/h-ajxix-b.png",
					backgroundImage: URL_BASE + "images/heroes/h-ajxix-f.png",
					shoeNumber:  "XIX",
					originalRelease:'Lorem Ipsum',
					originalColor:'Lorem Ipsum',
					collection:'Lorem Ipsum',
					location:'Lorem Ipsum',
				},
				{
					foregroundImage: URL_BASE + "images/heroes/h-ajxv-b.png",
					backgroundImage: URL_BASE + "images/heroes/h-ajxv-f.png",
					shoeNumber:"XV",
					originalRelease:'Lorem Ipsum',
					originalColor:'Lorem Ipsum',
					collection:'Lorem Ipsum',
					location:'Lorem Ipsum',
				},
				{
					foregroundImage: URL_BASE + "images/heroes/h-ajxvi-b.png",
					backgroundImage: URL_BASE + "images/heroes/h-ajxvi-f.png",
					shoeNumber: "XVI",
					originalRelease:'Lorem Ipsum',
					originalColor:'Lorem Ipsum',
					collection:'Lorem Ipsum',
					location:'Lorem Ipsum',
				},
				{
					foregroundImage: URL_BASE + "images/heroes/h-ajxvii-b.png",
					backgroundImage: URL_BASE + "images/heroes/h-ajxvii-f.png",
					shoeNumber: "XVII",
					originalRelease:'Lorem Ipsum',
					originalColor:'Lorem Ipsum',
					collection:'Lorem Ipsum',
					location:'Lorem Ipsum',
				},
				{
					foregroundImage: URL_BASE + "images/heroes/h-ajxviii-b.png",
					backgroundImage: URL_BASE + "images/heroes/h-ajxviii-f.png",
					shoeNumber: "XVIII",
					originalRelease:'Lorem Ipsum',
					originalColor:'Lorem Ipsum',
					collection:'Lorem Ipsum',
					location:'Lorem Ipsum',
				},
				{
					foregroundImage: URL_BASE + "images/heroes/h-ajxx-b.png",
					backgroundImage: URL_BASE + "images/heroes/h-ajxx-f.png",
					shoeNumber: "XX",
					originalRelease:'Lorem Ipsum',
					originalColor:'Lorem Ipsum',
					collection:'Lorem Ipsum',
					location:'Lorem Ipsum',
				},
			],
		},

		sell: {
			heroBackground: URL_BASE + "images/bgplates/h-bg-fauxsuederedlight.png",
			shoes: [
				{	
					mainImage: URL_BASE + "_teaser/img/aj1.png",
					title: "Lorem",
				},
				{
					mainImage: URL_BASE + "_teaser/img/aj10.png",
					title: "Lorem",
				},
				{
					mainImage: URL_BASE + "_teaser/img/aj11.png",
					title: "Lorem",
				},
				{
					mainImage: URL_BASE + "_teaser/img/aj12.png",
					title: "Lorem",
				},
				{
					mainImage: URL_BASE + "_teaser/img/aj13.png",
					title: "Lorem",
				},
				{
					mainImage: URL_BASE + "_teaser/img/aj14.png",
					title: "Lorem",
				},
				{
					mainImage: URL_BASE + "_teaser/img/aj15.png",
					title: "Lorem",
				},
				{
					mainImage: URL_BASE + "_teaser/img/aj16.png",
					title: "Lorem",
				},
				{
					mainImage: URL_BASE + "_teaser/img/aj17.png",
					title: "Lorem",
				},
				{
					mainImage: URL_BASE + "_teaser/img/aj18.png",
					title: "Lorem",
				},
				{
					mainImage: URL_BASE + "_teaser/img/aj19.png",
					title: "Lorem",
				},
				{
					mainImage: URL_BASE + "_teaser/img/aj2.png",
					title: "Lorem",
				},
				{
					mainImage: URL_BASE + "_teaser/img/aj20.png",
					title: "Lorem",
				},
				{
					mainImage: URL_BASE + "_teaser/img/aj21.png",
					title: "Lorem",
				},
				{
					mainImage: URL_BASE + "_teaser/img/aj22.png",
					title: "Lorem",
				},
				{
					mainImage: URL_BASE + "_teaser/img/aj23.png",
					title: "Lorem",
				},
				{
					mainImage: URL_BASE + "_teaser/img/aj24.png",
					title: "Lorem",
				},
				{
					mainImage: URL_BASE + "_teaser/img/aj25.png",
					title: "Lorem",
				},
				{
					mainImage: URL_BASE + "_teaser/img/aj26.png",
					title: "Lorem",
				},
				{
					mainImage: URL_BASE + "_teaser/img/aj27.png",
					title: "Lorem",
				},
				{
					mainImage: URL_BASE + "_teaser/img/aj28.png",
					title: "Lorem",
				},
				{
					mainImage: URL_BASE + "_teaser/img/aj29.png",
					title: "Lorem",
				},
				{
					mainImage: URL_BASE + "_teaser/img/aj3.png",
					title: "Lorem",
				},
				{
					mainImage: URL_BASE + "_teaser/img/aj30.png",
					title: "Lorem",
				},
				{
					mainImage: URL_BASE + "_teaser/img/aj31.png",
					title: "Lorem",
				},
				{
					mainImage: URL_BASE + "_teaser/img/aj32.png",
					title: "Lorem",
				},
				{
					mainImage: URL_BASE + "_teaser/img/aj4.png",
					title: "Lorem",
				},
				{
					mainImage: URL_BASE + "_teaser/img/aj5.png",
					title: "Lorem",
				},
				{
					mainImage: URL_BASE + "_teaser/img/aj6.png",
					title: "Lorem",
				},
				{
					mainImage: URL_BASE + "_teaser/img/aj7.png",
					title: "Lorem",
				},
				{
					mainImage: URL_BASE + "_teaser/img/aj8.png",
					title: "Lorem",
				},
				{
					mainImage: URL_BASE + "_teaser/img/aj9.png",
					title: "Lorem",
				},
			],
		},
		buy: {
			heroBackground: URL_BASE + "images/bgplates/h-bg-suedelightgrey.png",

		}
		
	},
})
