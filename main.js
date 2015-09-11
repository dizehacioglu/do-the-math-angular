var doTheMath = angular.module('doTheMath', []);

doTheMath.controller('doTheMathController', function($scope, $http){

  $http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';  
  $http.defaults.headers.post['Accept'] = 'application/json';

  $scope.averageSalary = 67000;  

  $scope.monthlyAmt = function(price){
    return price / 12;
  };

  $scope.getTaxes = function(){
    
    // var payload = {
    //   pay_rate: $scope.currentSalary,
    //   filing_status: $scope.filingStatus,
    //   pay_periods: $scope.payPeriods,
    //   state: $scope.state,
    //   year: 2015
    // };

    var payload = {
      pay_rate: 12,
      filing_status: 'single',
      pay_periods: 1,
      state: 'CO',
      year: '2015'
    };
    // console.log(payload.year);

    // var req = {
    //   method: 'POST',
    //   url: 'http://taxee.io/api/v1/calculate/2015',
    //   headers: {
    //     'Content-Type': "application/x-www-form-urlencoded",
    //     'Accept': "application/json"
    //   }, 
    //   data: {
    //     pay_rate: '12',
    //     filing_status: 'single',
    //     pay_periods: '1',
    //     state: 'CO',
    //     year: 2015
    //   }
    // };

    // console.log(req);

    
    // $http(req).then(function(response){
    //   console.log('did the post request');
    //   console.log(response);
    // });

    // $http.post("http://taxee.io/api/v1/calculate/2015", payload)
    //   .then(function(response){
    //     console.log('post req');
    //     console.log(response);
    //  });    

    $http.post("http://taxee.io/api/v1/calculate/" + payload.year, payload)
      .success(function(data, status){
        console.log('post req');
      })
      .error(function(data, status){
        console.log(data);
        console.log('error');
      });
  };
    


});