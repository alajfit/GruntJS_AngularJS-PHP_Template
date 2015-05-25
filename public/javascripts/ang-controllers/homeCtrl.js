angular
	.module('app')
	.controller('homeCtrl', ['$scope', 'friends', function($scope, friends) {
		$scope.title = "Home";
		$scope.friends = friends;
		$scope.items = ['Life', 'Love', 'Peace'];
		$scope.selectedValue = 'Love';

		$scope.save = function() {
			alert(JSON.stringify($scope.friends));
			$http.post('/api/friends', friends);
		};
	}]);