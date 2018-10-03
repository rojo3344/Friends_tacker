'use strict';

angular.module('myApp.view2', ['ngRoute',])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', function($scope, $route,) {
    let newName = [];

    $scope.addNewPerson = function () {
      let person;
        person = {};
        person.fullName = $scope.name;
        person.email = $scope.email;
        person.phone = $scope.phone;
        newName.push(person);
        console.log(newName) ;
    }
});