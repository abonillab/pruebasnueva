(function() {
	'use strict';
	angular.module('app').controller('DatosBasicosController',
			DatosBasicosController);

	DatosBasicosController.$inject = [ '$scope' ];

	function DatosBasicosController($scope) {
		this.myDate = new Date();

		this.minDate = new Date(1979, 12, 1);

		this.maxDate = new Date(this.myDate.getFullYear() - 7, this.myDate
				.getMonth(), this.myDate.getDate());

	}
})();