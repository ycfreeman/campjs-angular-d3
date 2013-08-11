'use strict';

/* Services */

// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).service('d3', function() {
	return d3;
}).factory('$store', function($rootScope) {
	// $rootScope.model = {};
	//
	// var model = {};
	//
	// return {
	// model : model
	// };

});
