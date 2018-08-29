angular.module('phonecatApp', [])
  .controller('PhoneListCtrl', function($scope) {

    $scope.title = "Магазин телефонов";

    $scope.phones = [
      {'name' : 'Nexus', 'snippet' : 'Очень быстрый телефон'},
      {'name' : 'Motorola', 'snippet' : 'Телефон-раскладушка'},
      {'name' : 'Sumsung', 'snippet' : 'Телефон-самсунг'},
      {'name' : 'Nokia', 'snippet' : 'Nokia-раскладушка'}
    ];

    var date = new Date();
    $scope.today = date;



    $scope.sortField = undefined;
    $scope.reverse = false;

    $scope.sort = function(fieldName) {
      if ($scope.sortField === fieldName) {
        $scope.reverse = !$scope.reverse;
      } else {
        $scope.sortField = fieldName;
        $scope.reverse = false;
      }
    };

    $scope.isSortUp = function(fieldName) {
      return $scope.sortField === fieldName && !$scope.reverse;
    };

    $scope.isSortDown = function(fieldName) {
      return $scope.sortField === fieldName && $scope.reverse;
    }; 


  }
);