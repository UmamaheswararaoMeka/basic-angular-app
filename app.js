var app = angular.module("myApp",[]);

app.controller("myController", ["$scope", function($scope){
	$scope.message ="Hello World";
	$scope.employeeList = [
		{name:'sundar',age:33, city:'Mysore',mobile:'9912342334'},
		{name:'BG',age:28, city:'Peenya',mobile:'9914334234'},
		{name:'KP',age:27, city:'Managlore',mobile:'9917423524'},
		{name:'Uma',age:35, city:'Benugaluru',mobile:'9654329834'},
	]
}]);