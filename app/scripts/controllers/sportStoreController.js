'use strict';
/**
 * @ngdoc function
 * @name sportStoreApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sportStoreApp
 */
angular.module('sportStoreApp')
  .constant("dataUrl", "http://localhost:2403/products")
  .controller('sportStoreController', function ($scope, $http, dataUrl) {
	$scope.data = {};
	$http.get(dataUrl)
		.success(function(data){
			$scope.data.products = data;
		})
  		.error(function(error){
  			$scope.data.error = error;
  		});

	
  });
