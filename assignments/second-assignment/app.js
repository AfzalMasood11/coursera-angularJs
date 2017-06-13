(function () {
'use strict';

angular.module('ShoppingListApp', [])
.controller('ShoppingListController', ShoppingListController)
.controller('ShowPurchasedItemController', ShowPurchasedItemController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ShowPurchasedItemController.$inject = ['ShoppingListCheckOffService'];

function ShowPurchasedItemController(ShoppingListCheckOffService){
  var purchasedItems = this;
  purchasedItems.list = ShoppingListCheckOffService.getPurchasedItems();

  purchasedItems.nothingPurchased = function(){
    if(purchasedItems.list.length < 1){
      return "Nothing bought yet.";
    }
  };
}

ShoppingListController.$inject = ['ShoppingListCheckOffService'];

function ShoppingListController(ShoppingListCheckOffService) {
  var list = this;

  list.items = ShoppingListCheckOffService.getItems();

  list.allPurchased = function(){
    if(list.items.length < 1){
      return "Everything is bought!";
    }
  };

  list.itemName = '';
  list.itemQuantity = '';

  list.purchaseItem = function(itemIndex){
    ShoppingListCheckOffService.purchaseItem(itemIndex);
  };
}


function ShoppingListCheckOffService(){
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

})(); //iffi
