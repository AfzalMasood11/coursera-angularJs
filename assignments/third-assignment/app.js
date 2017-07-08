(function () {

  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .directive('foundItems', FoundItemsDirective)
  .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

  function FoundItemsDirective() {
    var ddo = {
      templateUrl: 'foundItems.html',
      scope: {
        items: '<',
        myTitle: '@title',
        onRemove: '&'
      },
      controller: FoundItemsDirectiveController,
      controllerAs: 'list',
      bindToController: true
    };
    return ddo;
  }

  function FoundItemsDirectiveController() {
    var list = this;
  }

  // Controller
  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService){
    var ctrl = this;
    ctrl.searchTerm = '';
    ctrl.title = "Found Items are: "

    ctrl.searchMenu = function () {
      MenuSearchService.getMatchedMenuItems(ctrl.searchTerm).then(function (response) {
        ctrl.found = response;
      });
    }

    ctrl.removeItem = function (itemIndex) {
      ctrl.found.splice(itemIndex, 1);
    }
  }

  // service
  MenuSearchService.$inject = ['$http', 'ApiBasePath'];
  function MenuSearchService($http, ApiBasePath) {
    var service = this;

    service.getMatchedMenuItems= function (searchTerm) {
      return $http({url: (ApiBasePath + "/menu_items.json")}).then(function (response) {
        var foundItems = [];

        // process result and only keep items that match
        angular.forEach(response.data.menu_items, function (item) {
          if(item.description.includes(searchTerm)){
            foundItems.push(item);
          }
        });
        // return processed items
        return foundItems;
      });
    };

}

})(); //ifif
