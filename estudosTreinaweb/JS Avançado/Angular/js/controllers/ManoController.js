SaiaVermelha.controller("ManoController",["$scope","ManoService", function($scope, ManoService){
    $scope.appName = "Saia Vermelha";
    ManoService.test();
}]);