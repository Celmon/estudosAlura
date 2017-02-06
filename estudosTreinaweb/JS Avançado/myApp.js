var MyApp = angular.module('MyApp',[]);

MyApp.controller('firstController',['$scope', "NameService", function($scope, NameService){
    $scope.name = "Bruno";
    NameService.save($scope.name);
}]);

MyApp.service('NameService', function(){ // Cria um 'new' dessa function
    this.save = function(name){
        console.log(name);
    }
});

MyApp.factory('NameFactory', function(){ // Só retorna o que estiver em return
    var save = function(name){
        console.log(name);
    };
    return{
        save: save
    }
});

MyApp.provider('NameProvider', function(){
    $get // isto é necessário, pois ele só irá utilizar o que estiver dentro do $get
});