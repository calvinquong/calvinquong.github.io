	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
{
		name: "pears",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 0.67
	},
	{
		name: "apples",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 1.00
	},
	{
		name: "brocoli",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 1.99
	},
	{
		name: "carrots",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 2.00
	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 2.35
	},
	{
		name: "peppers",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 2.49
	},
{
		name: "potatoes",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 2.99
	},
	{
		name: "gummy bears",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 3.49
	},
	{
		name: "pork chop",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 8.99
	},
{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 10.00
	},
	{
		name: "steak",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 15.00
	},
	{
		name: "chicken",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 35.00
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_names.push(prods[i].name)+ " -$" + prods[i].price;
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			product_names.push(prods[i].name)+ " -$" + prods[i].price;
		}
		else if ((restriction == "Organic") && (prods[i].organic == true)){
			product_names.push(prods[i].name)+ " -$" + prods[i].price;
		}
		
		else if (restriction == "None"){
			product_names.push(prods[i].name)+ " -$" + prods[i].price;
		}
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
