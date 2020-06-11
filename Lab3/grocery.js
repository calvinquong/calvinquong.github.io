	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products	
	 

var products = [
{
		name: "pears",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 0.67,
		source: "pears.jpg"
	},
	{
		name: "apples",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		source:"apples.jpg",
		price: 1.00
		
	},
	{
		name: "broccoli",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		source:"broccoli.jpg",
		price: 1.99
	},
	{
		name: "water bottles 24pk",  //
		vegetarian: false,
		glutenFree: true,
		organic: true,

		source:"water.jpg",
		price: 1.99
	},
	{
		name: "carrots",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		source:"carrots.jpg",
		price: 2.00
	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		source:"bread.jpg",
		price: 2.35
	},
	{
		name: "peppers",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		source:"peppers.jpg",
		price: 2.49
	},
{
		name: "potatoes",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		source:"potatoes.jpg",
		price: 2.99
	},
	{
		name: "gummy bears",
		vegetarian: false,
		glutenFree: false,
		organic: false,

		source:"gummy.jpg",
		price: 3.49
	},
	{
		name: "milk",  //
		vegetarian: false,
		glutenFree: true,
		organic: true,

		source:"milk.jpg",
		price: 4.49

	},
	{
		name: "orange juice 2L",  //
		vegetarian: false,
		glutenFree: false,
		organic: false,

		source:"oj.jg",
		price: 4.99
	},
	{
		name: "cheese",  //
		vegetarian: false,
		glutenFree: true,
		organic: true,

		source:"cheese.jpg",
		price: 5.99
	},
	{
		name: "pork chop",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		source:"porkchop.jpg",
		price: 8.99
	},
{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		source:"salmon.jpg",
		price: 10.00
	},
	{
		name: "coca-cola 12pk",  //
		vegetarian: false,
		glutenFree: false,
		organic: false,

		source:"coca.jpg",
		price: 12.99
	},
	{
		name: "steak",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		source:"steak.jpg",
		price: 15.00
	},
	{
		name: "chicken",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		source:"chicken.jpg",
		price: 35.00
	}
];
	
function show_image(src, width, height, alt) {    
//This function was taken from stackoverflow

    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;

    
    document.body.appendChild(img);
}


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price


function restrictListProducts(prods, restriction) {
	
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetables") && (prods[i].vegetarian == true)){
			product_names.push(prods[i].name);
			

		}
		else if ((restriction == "Gluten Free Foods") && (prods[i].glutenFree == true)){
			product_names.push(prods[i].name);
			

		}
		else if ((restriction == "Organic Foods") && (prods[i].organic == true)){
			product_names.push(prods[i].name);
			

		}
		
		else if (restriction == "All of the above"){
			product_names.push(prods[i].name);
			
			
		}
	}
	return product_names;
}
function restrictListPrices(prods, restriction) {
	
	let product_prices= [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetables") && (prods[i].vegetarian == true)){
			
			product_prices.push(prods[i].price);

		}
		else if ((restriction == "Gluten Free Foods") && (prods[i].glutenFree == true)){
			
			product_prices.push(prods[i].price);

		}
		else if ((restriction == "Organic Foods") && (prods[i].organic == true)){
			
			product_prices.push(prods[i].price);

		}
		
		else if (restriction == "All of the above"){
			
			product_prices.push(prods[i].price);
			
		}
	}
	return product_prices;
}
function restrictListImages(prods, restriction) {
	
	let product_images= [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetables") && (prods[i].vegetarian == true)){
			
			product_images.push(prods[i].source);

		}
		else if ((restriction == "Gluten Free Foods") && (prods[i].glutenFree == true)){
			
			product_images.push(prods[i].source);

		}
		else if ((restriction == "Organic Foods") && (prods[i].organic == true)){
			
			product_images.push(prods[i].source);

		}
	
		else if (restriction == "All of the above"){
			
			product_images.push(prods[i].source);
			
		}
	}
	return product_images;
}

var dcount=1;



function discount(){
 dcount=.90;
}
//Math.round((num + Number.EPSILON) * 100) / 100
//numb = numb.toFixed(2);

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return (totalPrice*dcount).toFixed(2);
}






var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });

  /*List of pictures taken from internet:

  https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.medicalnewstoday.com%2Farticles%2F285430&psig=AOvVaw0-9kFNpOPE_4siMeLQOx9v&ust=1591764624487000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJifj7z38-kCFQAAAAAdAAAAABAD
	https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.thespruceeats.com%2Fblue-cheese-stuffed-pork-chops-recipe-335595&psig=AOvVaw0mKXtWuRnYNSsfXUwFUINi&ust=1591764901334000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLjI0L748-kCFQAAAAAdAAAAABAJ
https://www.google.com/url?sa=i&url=https%3A%2F%2Fmixthatdrink.com%2Fvodka-gummy-bears%2F&psig=AOvVaw2aB4TjWSdDNBfQPPfxaxZ1&ust=1591764881764000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIjdlrX48-kCFQAAAAAdAAAAABAD
https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FPotato&psig=AOvVaw152Fdf8jEiDJbWjl_qdfaY&ust=1591764868666000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOjwl6_48-kCFQAAAAAdAAAAABAD
https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.theverge.com%2F2017%2F10%2F26%2F16553942%2Fapples-wash-pesticides-baking-soda-chemicals-organic-peel-fruit&psig=AOvVaw2U5eP00oX3_huNCBpK5ltr&ust=1591764674560000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOCal9P38-kCFQAAAAAdAAAAABAP
https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.iga.net%2Ffr%2Fproduit%2Fbrocolibiologique%2F00000_000000000000094060&psig=AOvVaw2kMbLPWeHOWSP5VcJGdS8&ust=1591764746852000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIjesvT38-kCFQAAAAAdAAAAABAI
https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.jessicagavin.com%2Fcarrot-benefits-types%2F&psig=AOvVaw2jHPpFtRUJY2uhyK5Syj0P&ust=1591764822688000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPiztJn48-kCFQAAAAAdAAAAABAD
https://www.google.com/url?sa=i&url=https%3A%2F%2Fthestayathomechef.com%2Fhomemade-bread%2F&psig=AOvVaw0BbQdPPRtHAEQptfeKgdZ9&ust=1591764838651000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCID_kKH48-kCFQAAAAAdAAAAABAD
https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.almanac.com%2Fplant%2Fbell-peppers&psig=AOvVaw3_gnGJNrq2VCE225jDqBOU&ust=1591764857027000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLDj_Kj48-kCFQAAAAAdAAAAABAD
https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.thespruceeats.com%2Fbaked-salmon-with-garlic-3056832&psig=AOvVaw1mPcpS-3TfvMD7v28bZXNB&ust=1591764918798000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKjw28n48-kCFQAAAAAdAAAAABAD
https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.thedailymeal.com%2Feat%2Fcan-you-order-raw-steak&psig=AOvVaw2lP424sy-8dcUjzS3-YRKv&ust=1591764943790000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMCX29L48-kCFQAAAAAdAAAAABAD
https://www.google.com/imgres?imgurl=https%3A%2F%2Fimagesvc.meredithcorp.io%2Fv3%2Fmm%2Fimage%3Furl%3Dhttps%253A%252F%252Ftimeincsecure-a.akamaihd.net%252Frtmp_uds%252F429048911%252F201406%252F2536%252F429048911_3616154024001_Is-it-safe-for-dogs-to-eat-raw-chicken-vs.jpg%253FpubId%253D1260616200%2526videoId%253D3873484729001&imgrefurl=https%3A%2F%2Fwww.cookinglight.com%2Fhealthy-living%2Fhealth%2Fdogs-eat-raw-chicken&tbnid=UBR6kBdbK8MXHM&vet=12ahUKEwj5g8_W-PPpAhUBNt8KHQwvAZAQMygEegUIARDcAQ..i&docid=EXx5ifFsbH305M&w=1280&h=720&q=chicken%20raw&ved=2ahUKEwj5g8_W-PPpAhUBNt8KHQwvAZAQMygEegUIARDcAQ
https://www.totavo.com/en/milk/253-lactantia-pur-filtre-milk-2l-carton.html
https://www.behance.net/gallery/35680227/Eiffel-Tower-Cheese-Packaging
https://www.walmart.ca/en/ip/great-value-24pk-spring-water/6000143709667
https://www.danmurphys.com.au/product/DM_67056/golden-circle-orange-juice-2l
https://www.dollargeneral.com/coca-cola-cans-12-fl-oz-12-pack.html

*/
}
