app.controller("mine",function($scope,$http){
	$http({
    url:'http://127.0.0.1:3002/list1',
    method: 'get',            
    data: ''      
    	})
    .success(function(data1){     
    console.log()  
        $scope.arr = data1.goodsInfo[1098]
        })
    .error(function(err){
        console.log("error");
    });
    $scope.arr1 = [
        {
            url : "",
            content : "待付款"
        },
        {
            url : "",
            content : "待收获"
        },
        {
            url : "",
            content : "待评价"
        },
        {
            url : "",
            content : "退货/款"
        }
    ]
});