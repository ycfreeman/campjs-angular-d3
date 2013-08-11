'use strict';

/* Controllers */

angular.module('myApp.controllers', []).controller('mainCtrl',
		function($scope, d3) {
			$scope.model = {
				numberOfSlices : 3,
				slices : []
			};

			// initial slices

			var generateRandomSlices = function(model) {

				var arrayRange = 100; // range of
				// potential values
				// for each item
				var arraySize = model.numberOfSlices;
			

				model.slices = d3.range(arraySize).map(fillArray);

				return model.slices;
			};
			
				function fillArray() {
					return {
						value : Math.ceil(Math.random() * (arrayRange))
					};
				}
			//
			$scope.model.slices = generateRandomSlices($scope.model);

			$scope.regenerateSlices = function() {
				console.log('regen called');
				$scope.model.slices = generateRandomSlices($scope.model);
			};

			$scope.$watch('model.numberOfSlices', function() {
				$scope.model.slices = generateRandomSlices($scope.model);
			});

		});