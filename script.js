var app = angular.module("abm",[]);
app.controller('user', ['$scope',  '$http', function ($scope,  $http) {
 $scope.name = 'Tobias';
	$scope.busqueda = "alka";
   // $scope.user = servicio.getUser();
    $scope.subir = function () {
        console.log($scope.busqueda);
     
    }
	

	}])
.directive('myDialog', function() {
  return {
    restrict: 'E',
    transclude: true,
    scope: {},
    templateUrl: 'slider.html'
  };
})
;



