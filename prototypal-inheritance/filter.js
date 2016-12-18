var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('Number Array: ', numberArray);

function above5Filter(value){
	return value > 5;
}

var filteredNumberArray = numberArray.filter(above5Filter);

console.log('Filtered Number Array: ', filteredNumberArray);

var shoppingList1 = [
  "Milk", "Donuts", "Cookies", "Chocolate", "Peanut Butter", "Pepto Bismol", "Pepto Bismol (Chocolate flavor)", "Pepto Bismol (Cookie flavor)"
];

console.log('Shopping List: ', shoppingList1);

var searchValue = 'Bismol';

function containFilter(value){
	return value.indexOf(searchValue) != -1;
}

var searchedShoppingList = shoppingList1.filter(containFilter);
console.log('Searched Shopping List: ', searchedShoppingList);