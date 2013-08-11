'use strict';

/* Directives */

angular.module('myApp.directives', []).directive('pieChart', function() {
	var chart = d3.custom.pieChart();

	return {
		restrict : 'EA',
		replace : true,
		template : '<div class="piechart"></div>',
		scope : {
			chart : '=chart',
		},
		link : function(scope, element) {
			var chartEl = d3.select(element[0]);
			scope.$watch('chart', function(newVal, oldVal) {
				chartEl.datum(newVal).call(chart);

			}, true);

		}
	};
}).directive('integer', function() {
	return {
		require : 'ngModel',
		link : function(scope, ele, attr, ctrl) {
			ctrl.$parsers.unshift(function(viewValue) {
				return parseInt(viewValue);
			});
		}
	};
});
