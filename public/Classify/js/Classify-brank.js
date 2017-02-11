app.controller('Classify-brank',function($scope,$http){
	
	$scope.array = [];
	$http.get('http://127.0.0.1:3002/Calssify-brank').success(function(b){
		$scope.array = b;
		console.log($scope.array)
	})
	
})
