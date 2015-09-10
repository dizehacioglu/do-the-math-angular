var doTheMath = angular.module('doTheMath', []);

doTheMath.controller('doTheMathController', function($scope, $http){

  $scope.averageSalary = 67000;  

  $scope.monthlyAmt = function(){
    return $scope.currentSalary / 12;
  };

    // $scope.somenumber = 0;
    $http.get("http://taxee.io/api/v1/calculate/2015")
      .success(function(){
        console.log('accessed api!');
        
      });
});