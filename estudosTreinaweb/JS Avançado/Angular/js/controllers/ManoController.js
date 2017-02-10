SaiaVermelha.controller("ManoController",["$scope","ManoService", function($scope, ManoService){
    $scope.money = ManoService.money;

    $scope.new = function(){
        try{
            if($scope.type === 'incoming'){
                ManoService.newIncoming({name:$scope.name, value:$scope.value});
            }else if($scope.type === 'expense'){
                ManoService.newExpense({name:$scope.name, value:$scope.value});
            }
        }catch(e){
            alert(e.message);
        }
    }

    $scope.deleteIncoming = ManoService.deleteIncoming;
	$scope.deleteExpense = ManoService.deleteExpense;
}]);