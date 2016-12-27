(function () {
'use strict';

angular.module('ShoppingListApp', [])
.controller('ShoppingListController', ShoppingListController)
.provider('ShoppingListService', ShoppingListServiceProvider)
.config(Config);

Config.$inject = ['ShoppingListServiceProvider'];
function Config(ShoppingListServiceProvider) {
  ShoppingListServiceProvider.defaults.maxItems = 2;
}

ShoppingListController.$inject = ['ShoppingListService'];

function ShoppingListController(ShoppingListService) {
  var list = this;

  list.items = ShoppingListService.getItems();
  list.purchased = ShoppingListService.getPurchasedItems();

  list.nothingPurchased = function(){
    if(list.purchased.length < 1){
      return "Nothing bought yet.";
    }
  };

  list.allPurchased = function(){
    if(list.items.length < 1){
      return "Everything is bought!";
    }
  };

  list.itemName = '';
  list.itemQuantity = '';

  list.purchaseItem = function(itemIndex){
    ShoppingListService.purchaseItem(itemIndex);
  };

  
}


function ShoppingListService(maxItems){
  var service = this;

  var items = [
    {
      name: "Milk",
      quantity: "2"
    },
    {
      name: "Donuts",
      quantity: "200"
    },
    {
      name: "Cookies",
      quantity: "300"
    },
    {
      name: "Chocolate",
      quantity: "5"
    },
    {
      name: "Ice-cream",
      quantity: "100"
    }
  ];

  var purchased = [];

  service.purchaseItem = function(itemIndex){
    purchased.push(items[itemIndex]);
    items.splice(itemIndex, 1);
  }

  service.getItems = function(){
    return items;
  }

  service.getPurchasedItems = function(){
    return purchased;
  }  
}

function ShoppingListServiceProvider(){
  var provider = this;

  provider.defaults = {
    maxItems: 10
  };

  provider.$get = function () {
    var shoppingList = new ShoppingListService(provider.defaults.maxItems);
 
    return shoppingList;
  };
}

})();
