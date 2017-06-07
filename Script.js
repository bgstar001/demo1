var app = angular.module("myModule", [])
app.controller("myController", function ($scope) {

  $scope.employees = [
      { name: "Name1", gender: "Male", salary: 55000, city: "HaNoi" },
      { name: "Name3", gender: "Female", salary: 55000, city: "HaNoi" },
  	  { name: "Name2", gender: "Female", salary: 55000, city: "HaNoi" },
  	  { name: "Name12", gender: "Male", salary: 55000, city: "HaNoi" },
  	  { name: "Name1", gender: "Male", salary: 55000, city: "HaNoi" },
  ];

  $scope.saveEmployees = function() {
	  $scope.employees.push($scope.newEmployee);
	  $scope.newEmployee = {};
  };


	$scope.delete = function (employeesIndex) {
		$scope.employees.splice(employeesIndex, 1);
  }

  $scope.editEmployee = function(employee) {
    console.log(employee);
    $scope.editEmployee = employee;
  }
  });
