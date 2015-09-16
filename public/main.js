var doTheMath = angular.module('doTheMath', []);

doTheMath.controller('doTheMathController', function($scope, $http){

  // Static Vars
  $scope.averageSalary = 67000;
  $scope.averageTaxes = 17720;
  $scope.averageNet = $scope.averageSalary -  $scope.averageTaxes; 

  $scope.monthlyAmt = function(price){
    return price / 12;
  };

  $scope.getTaxes = function(){

    var payload = {
      pay_rate: $scope.currentSalary,
      filing_status: $scope.filingStatus,
      pay_periods: 1,
      state: $scope.state,
      year: '2014'
    };

    var req = {
      method: 'POST',
      url: 'http://taxee.io/api/v1/calculate/2014',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }, 
      data: $.param(payload)
    };

    console.log(req);

    
    $http(req).success(function(data, status){

      $scope.totalTaxes = data.annual.state.amount + data.annual.fica.amount + data.annual.federal.amount;

      $scope.currentNet = $scope.currentSalary - $scope.totalTaxes;

      $scope.payGain = $scope.averageNet  - $scope.currentNet;

    })
    .error(function(data, status){
      console.log('error');
    });

  };

});