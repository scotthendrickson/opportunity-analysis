angular.module('routerApp').controller('worstCtrl',function($scope, mainService,$location){

  $scope.ultraFuncWorst = function(){
    $scope.cogsFunc();
    $scope.sellPrice();
    $scope.totalFunc();
    $scope.unitsMonthFunc();
    $scope.resultsFirstYearFunc();
    $scope.roiFirstYearFunc();
  }
  $scope.cogsFuncWorst = function(){
    $scope.productWorst.cogs = (parseFloat($scope.productWorst.material) + parseFloat($scope.productWorst.production)).toFixed(2);
  };
  $scope.sellPriceWorst = function(){
    $scope.productWorst.price = ($scope.productWorst.cogs * parseFloat($scope.productWorst.markUp)).toFixed(2);
    $scope.productWorst.profit = ($scope.productWorst.price - $scope.productWorst.cogs);
  };
  $scope.totalFuncWorst = function(){
    $scope.productWorst.investmentCost = (parseFloat($scope.productWorst.research) + parseFloat($scope.productWorst.development) + parseFloat($scope.productWorst.marketing) + parseFloat($scope.productWorst.other)).toFixed(2);
  },
  $scope.unitsMonthFuncWorst = function(){
    $scope.productWorst.unitsMonth = (parseFloat($scope.productWorst.unitsYear) / 12).toFixed(2);
    if(isNaN($scope.productWorst.unitsTotal)){
      $scope.productWorst.unitsTotal = 0;
    };
    $scope.productWorst.unitsTotal = 0;
    var x = 0;
    for(var prop in $scope.productWorst.firstYear){
      $scope.productWorst.increment = ((1 - (parseFloat($scope.productWorst.startingPercentage)/100)) / 12).toFixed(5);
      $scope.productWorst.firstYear[prop] = (parseFloat($scope.productWorst.unitsMonth) * ((parseFloat($scope.productWorst.startingPercentage) / 100) + (parseFloat($scope.productWorst.increment) * x))).toFixed(2);
      $scope.productWorst.unitsTotal = (parseFloat($scope.productWorst.unitsTotal) + parseFloat($scope.productWorst.firstYear[prop])).toFixed(2);
      x++;
    };
    console.log($scope.productWorst)
  };
  $scope.resultsFirstYearFuncWorst = function(){
    $scope.productWorst.breakEvenQty = (parseFloat($scope.productWorst.investmentCost)/parseFloat($scope.productWorst.profit)).toFixed(2);
    $scope.productWorst.twentyProfitQty = ((parseFloat($scope.productWorst.investmentCost)*1.2)/parseFloat($scope.productWorst.profit)).toFixed(2);
    $scope.productWorst.goalPrice = (parseFloat($scope.productWorst.goalProfitPerUnit) + parseFloat($scope.productWorst.cogs)).toFixed(2);
    $scope.productWorst.goalProfitPerUnit = ((parseFloat($scope.productWorst.investmentCost)*1.2)/parseFloat($scope.productWorst.unitsTotal)).toFixed(2);
    $scope.productWorst.goalMarkUp = ((parseFloat($scope.productWorst.goalProfitPerUnit) + parseFloat($scope.productWorst.cogs))/parseFloat($scope.productWorst.cogs)).toFixed(2);
    for (var prop in $scope.productWorst.resultsFirstYear){
      var units = $scope.productWorst.firstYear[prop];
      if(prop === '1'){
        $scope.productWorst.resultsFirstYear[prop] = ((parseFloat($scope.productWorst.profit) * parseFloat(units)) - $scope.productWorst.investmentCost).toFixed(2);
      }else {
        var previous = parseInt(prop) - 1;
        $scope.productWorst.resultsFirstYear[prop] = ((parseFloat($scope.productWorst.profit)  * parseFloat(units)) + parseFloat($scope.productWorst.resultsFirstYear[previous])).toFixed(2);
      }
    }
  };
  $scope.roiFirstYearFuncWorst = function(){
    for(var prop in $scope.productWorst.roiFirstYear){
      $scope.productWorst.roiFirstYear[prop] = (((parseFloat($scope.productWorst.resultsFirstYear[prop]) - parseFloat($scope.productWorst.investmentCost))/parseFloat($scope.productWorst.investmentCost)) + 1).toFixed(2) * 100;
    }
  };

  $scope.cleanStartFuncWorst = function(){
    $scope.productWorst = {
      userId:"",
      name: "",
      description: "",
      opportunity: "",
      material: 0,
      production: 0,
      cogs: 0,
      markUp: 0,
      price: 0,
      profit: 0,
      research: 0,
      development: 0,
      marketing: 0,
      other: 0,
      investmentCost : 0,
      unitsYear: 0,
      unitsMonth: 0,
      unitsTotal: 0,
      firstYear: {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0,
        9: 0,
        10: 0,
        11: 0,
        12: 0,
      },
      resultsFirstYear: {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0,
        9: 0,
        10: 0,
        11: 0,
        12: 0,
      },
      roiFirstYear: {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0,
        9: 0,
        10: 0,
        11: 0,
        12: 0,
      },
      startingPercentage: 25,
      increment: 0,
      breakEvenQty: 0,
      twentyProfitQty: 0,
      goalPrice: 0,
      goalProfitPerUnit: 0,
      goalMarkUp: 0,
    }
  };

  $scope.productWorst = {
    userId:"",
    name: "",
    description: "",
    opportunity: "",
    material: 0,
    production: 0,
    cogs: 0,
    markUp: 0,
    price: 0,
    profit: 0,
    research: 0,
    development: 0,
    marketing: 0,
    other: 0,
    investmentCost : 0,
    unitsYear: 0,
    unitsMonth: 0,
    unitsTotal: 0,
    firstYear: {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
      8: 0,
      9: 0,
      10: 0,
      11: 0,
      12: 0,
    },
    resultsFirstYear: {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
      8: 0,
      9: 0,
      10: 0,
      11: 0,
      12: 0,
    },
    roiFirstYear: {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
      8: 0,
      9: 0,
      10: 0,
      11: 0,
      12: 0,
    },
    startingPercentage: 25,
    increment: 0,
    breakEvenQty: 0,
    twentyProfitQty: 0,
    goalPrice: 0,
    goalProfitPerUnit: 0,
    goalMarkUp: 0,
}


//These are your functions for getting info from the products Collection
  $scope.allproductsWorst = {};
  $scope.getData = function(id){
    mainService.getData(id).then(function(data){
      $scope.allproducts = data;
    });
  };


  $scope.findIndividual = function(id){
    // mainService.findIndividual(id).then(function(data){
    //   $scope.productWorst = data;
    // });
    for(var i = 0; i < $scope.allproducts.length; i++){
      if(id == $scope.allproducts[i]._id){
        $scope.productWorst = $scope.allproducts[i]
      }
    }
  };

  $scope.destroy = function(id){
    var check = confirm("Are you certain you want to delete this product?")
    if(check){
      mainService.destroy(id).then(function(data){});
      $scope.getData($scope.user._id);
      alert("product Deleted")
    }else {
      alert("Your product is Safe")
    }

  };

  $scope.create = function(body){
    if(!$scope.user._id){
      $location.path("/login")
      return alert("You must login before you can save your files")
    }
    var check = false;
    for (var i = 0; i < $scope.allproducts.length; i++){
      if($scope.allproducts[i]._id === body._id) {
        check = true;
      }
    };
    if(check){
      $scope.update(body._id, body);
    }else{
      body.userId = $scope.user._id
      mainService.create(body).then(function(data){});
    }
    $scope.getData($scope.user._id);
    alert("productWorst Saved")
  };

  $scope.update = function(id, body){
    if(!$scope.user._id){
      $location.path("/login")
      return alert("You must login before you can save your files")
    }
    mainService.update(id, body).then(function(data){
    });
    $scope.getData($scope.user._id);
  };
})
