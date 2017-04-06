angular.module('app').controller('appController', ['$scope',function($scope) {
    $scope.appName = 'TU LOOK';
    
    $scope.login = function (){
        var authService = new AuthenticationService(AWS.CognitoIdentityServiceProvider);
 	    authService.login($scope.username, $scope.password, function(error, user){
 	      if(error) {
 	    	  $scope.mensaje="Error en usuario o contraseña.";
 	    	  openDialog();
 	      }
 	      else{
 	           window.location.href = "#ubicacion";
 	      }
 	    });
 	}
    
    function openDialog() {
		$scope.cabecera_dialog = "Login"
		$mdDialog.show({
			templateUrl : "dialog.html",
		     controller: angular.noop,
		     controllerAs: 'ctrl',
		     clickOutsideToClose: false,
		     locals: { parent: $scope },
		     bindToController: true
			
			
		});
	}

	$scope.cancel = function() {
		$mdDialog.cancel();
	};
	
	$scope.volver = function() {
		 $mdDialog.cancel();
		//$location.url("/");
	};
    
}]);