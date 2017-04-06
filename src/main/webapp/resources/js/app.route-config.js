angular.module('app').config(config);

function config($routeProvider) {
	$routeProvider.when('/', {
		templateUrl : 'home.html',
		controller : 'appController'
	}).when('/datos-basicos', {
		templateUrl : 'resources/js/datos-basicos/datos-basicos.html',
		controller : 'DatosBasicosController'
	}).otherwise({
		redirectTo : '/'
	});
}