console.log(`Hello World from main.js! Cassandra Final Node Project called "Jordan Lounge"`)

const router = new VueRouter({
	routes: [
		{ path: '/', component: HomeComponent },
		{ path: '/sell', component: SellComponent},
		{ path: '/buy', component: BuyComponent },
		{ path: '/trade', component: TradeComponent },
		{ path: '/shoe/:id', component: ShoeComponent },
	]
});

const URL_BASE = "dist/img/";

var app = new Vue({
	el: "#app",
	router: router,
	data: {
		logo: "dist/img/jordanlogo.png",
		home: {
			heroBackground: URL_BASE + "h-bg-fauxsuedespot.png",
			shoes: [
				{
					foregroundImage: URL_BASE + "h-aji-b.png",
					backgroundImage: URL_BASE + "h-aji-f.png",
					shoeNumber: "I",
					originalRelease:'April, 1985',
					originalColor:'Black/Red',
					collection:'DNA Archive',
					location:'Beaverton, Oregon',
				},
				{
					foregroundImage: URL_BASE + "h-ajix-b.png",
					backgroundImage: URL_BASE + "h-ajix-f.png",
					shoeNumber: "IX",
					originalRelease:'1993',
					originalColor:'White/Black - True Red',
					collection:'DNA Archive',
					location:'Beaverton, Oregon',
				},

				{
					foregroundImage: URL_BASE + "h-ajxiv-b.png",
					backgroundImage: URL_BASE + "h-ajxiv-f.png",
					shoeNumber: 'XIV',
					originalRelease: 'October, 1998',
					originalColor:'White/Black - Varsity Red',
					collection:'DNA Archive',
					location:'Beaverton, Oregon',
				},
				{
					foregroundImage: URL_BASE + "h-aj2009-b.png",
					backgroundImage: URL_BASE + "h-aj2009-f.png",
					shoeNumber: "2009",
					originalRelease:'January, 2009',
					originalColor:'White/Black',
					collection:'R. Palmer',
					location:'Wilminton, Delaware',
				},
				{
					foregroundImage: URL_BASE + "h-ajvii-b.png",
					backgroundImage: URL_BASE + "h-ajvii-f.png",
					shoeNumber: "VII",
					originalRelease:'1992',
					originalColor:'White/Light Silver - Red',
					collection:'DNA Archive',
					location:'Beaverton, Oregon',
				},
				{
					foregroundImage: URL_BASE + "h-aj2012-b.png",
					backgroundImage: URL_BASE + "h-aj2012-f.png",
					shoeNumber: "2012",
					originalRelease:'February, 2012',
					originalColor:'Black / White',
					collection:'D.Dixon',
					location:'Portland, Oregon',
				},
				{
					foregroundImage: URL_BASE + "h-ajxxx-b.png",
					backgroundImage: URL_BASE + "h-ajxxx-f.png",
					shoeNumber: "XXX",
					originalRelease:'February, 2016',
					originalColor:'White/Blue',
					collection:'E.Elizey',
					location:'Portland, Oregon',
				},
				{
					foregroundImage: URL_BASE + "h-ajxiii-b.png",
					backgroundImage: URL_BASE + "h-ajxiii-f.png",
					shoeNumber: "XIII",
					originalRelease:'November, 1997',
					originalColor:'Black/Varsity Red',
					collection:'DNA Archive',
					location:'Beaverton, Oregon',
				},
				{
					foregroundImage: URL_BASE + "h-ajii-b.png",
					backgroundImage: URL_BASE + "h-ajii-f.png",
					shoeNumber: "II",
					originalRelease:'November, 1986',
					originalColor:'White/Red',
					collection:'DNA Archive',
					location:'Beaverton, Oregon',
				},
				{
					foregroundImage: URL_BASE + "h-ajxix-b.png",
					backgroundImage: URL_BASE + "h-ajxix-f.png",
					shoeNumber:  "XIX",
					originalRelease:'March, 2004',
					originalColor:'White/Red',
					collection:'S. Redman',
					location:'Salem, Oregon',
				},
				{
					foregroundImage: URL_BASE + "h-ajxv-b.png",
					backgroundImage: URL_BASE + "h-ajxv-f.png",
					shoeNumber:"XV",
					originalRelease:'December, 1999',
					originalColor:'Flint Grey/White',
					collection:'R. Palmer',
					location:'Wilmington, Delaware',
				},
				{
					foregroundImage: URL_BASE + "h-ajviii-b.png",
					backgroundImage: URL_BASE + "h-ajviii-f.png",
					shoeNumber: "VIII",
					originalRelease:'1993',
					originalColor:'Black/Bright Concord Aqua Tone',
					collection:'DNA Archive',
					location:'Beaverton, Oregon',
				},
				{
					foregroundImage: URL_BASE + "h-ajxvi-b.png",
					backgroundImage: URL_BASE + "h-ajxvi-f.png",
					shoeNumber: "XVI",
					originalRelease:'February, 2001',
					originalColor:'Black/Varsity Red',
					collection:'S. Redman',
					location:'Salem, Oregon',
				},
				{
					foregroundImage: URL_BASE + "h-ajxvii-b.png",
					backgroundImage: URL_BASE + "h-ajxvii-f.png",
					shoeNumber: "XVII",
					originalRelease:'February, 2002',
					originalColor:'White/Red',
					collection:'S.Redman',
					location:'Salem, Oregon',
				},
				{
					foregroundImage: URL_BASE + "h-ajxviii-b.png",
					backgroundImage: URL_BASE + "h-ajxviii-f.png",
					shoeNumber: "XVIII",
					originalRelease:'February, 2002',
					originalColor:'White/Red',
					collection:'S. Redman',
					location:'Salem, Oregon',
				},
				{
					foregroundImage: URL_BASE + "h-ajxx-b.png",
					backgroundImage: URL_BASE + "h-ajxx-f.png",
					shoeNumber: "XX",
					originalRelease:'February, 2005',
					originalColor:'White/Black - Red',
					collection:'R. Palmer',
					location:'Wilmington, Delaware',
				},
			],
		},

		sell: {
			heroBackground: URL_BASE + "h-bg-fauxsuederedlight.png",
			shoes: [
				{	
					mainImage: URL_BASE + "aj1.png",
					title: "AJ I",
				},
				{
					mainImage: URL_BASE + "aj10.png",
					title: "AJ X",
				},
				{
					mainImage: URL_BASE + "aj11.png",
					title: "AJ XI",
				},
				{
					mainImage: URL_BASE + "aj12.png",
					title: "AJ XII",
				},
				{
					mainImage: URL_BASE + "aj13.png",
					title: "AJ XIII",
				},
				{
					mainImage: URL_BASE + "aj14.png",
					title: "AJ XIV",
				},
				{
					mainImage: URL_BASE + "aj15.png",
					title: "AJ XV",
				},
				{
					mainImage: URL_BASE + "aj16.png",
					title: "AJ XVI",
				},
				{
					mainImage: URL_BASE + "aj17.png",
					title: "AJ XVII",
				},
				{
					mainImage: URL_BASE + "aj18.png",
					title: "AJ XVIII",
				},
				{
					mainImage: URL_BASE + "aj19.png",
					title: "AJ XIX",
				},
				{
					mainImage: URL_BASE + "aj2.png",
					title: "AJ II",
				},
				{
					mainImage: URL_BASE + "aj20.png",
					title: "AJ XX",
				},
				{
					mainImage: URL_BASE + "aj21.png",
					title: "AJ XX1",
				},
				{
					mainImage: URL_BASE + "aj22.png",
					title: "AJ XX2",
				},
				{
					mainImage: URL_BASE + "aj23.png",
					title: "AJ XX3",
				},
				{
					mainImage: URL_BASE + "aj24.png",
					title: "AJ 2009",
				},
				{
					mainImage: URL_BASE + "aj25.png",
					title: "AJ 2010",
				},
				{
					mainImage: URL_BASE + "aj26.png",
					title: "AJ 2011",
				},
				{
					mainImage: URL_BASE + "aj27.png",
					title: "AJ 2012",
				},
				{
					mainImage: URL_BASE + "aj28.png",
					title: "AJ XX8",
				},
				{
					mainImage: URL_BASE + "aj29.png",
					title: "AJ XX9",
				},
				{
					mainImage: URL_BASE + "aj3.png",
					title: "AJ ",
				},
				{
					mainImage: URL_BASE + "aj30.png",
					title: "AJ XXX",
				},
				{
					mainImage: URL_BASE + "aj31.png",
					title: "AJ XXXI",
				},
				{
					mainImage: URL_BASE + "aj32.png",
					title: "AJ XXXII",
				},
				{
					mainImage: URL_BASE + "aj4.png",
					title: "AJ IV",
				},
				{
					mainImage: URL_BASE + "aj5.png",
					title: "AJ V",
				},
				{
					mainImage: URL_BASE + "aj6.png",
					title: "AJ VI",
				},
				{
					mainImage: URL_BASE + "aj7.png",
					title: "AJ VII",
				},
				{
					mainImage: URL_BASE + "aj8.png",
					title: "AJ VIII",
				},
				{
					mainImage: URL_BASE + "aj9.png",
					title: "AJ ",
				},
			],
		},
		buy: {
			heroBackground: URL_BASE + "h-bg-suedelightgrey.png",

		}
		
	},
})
