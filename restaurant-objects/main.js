function FoodItem(name,calories){
    this.name = name;
    this.calories = calories;
    this.vegan = false;
    this.glutenFree = false;
    this.citrusFree = false;
}

var steak = new FoodItem('T-Bone', 500);
var friedChicken = new FoodItem('Fired Chicken', 1200)
var grilledCheese = new FoodItem('Grilled Cheese', 1500)

function stringify(foodItem){
    console.log(foodItem.name + ' has ' + foodItem.calories + ' Calories, Vegan: ' + foodItem.vegan + ', Gluten Free: ' + foodItem.glutenFree + ', Citrus Free: ' + foodItem.citrusFree)
}