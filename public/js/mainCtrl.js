angular.module('routerApp').controller('mainCtrl',function($scope, mainService,$location){
  $scope.name = "Scott Hendrickson";
  $scope.testText = "";
  $scope.userInput = "";
  $scope.format = 'M/d/yy h:mm:ss a';
  $scope.bestButton = true;
  $scope.mostLikelyButton = false;
  $scope.worstButton = false;
  $scope.blendedButton = false;

  $scope.loadingPage = function(){
    $location.path('/loading');
    setTimeout(function(){
      $location.path('/startProject');
    }, 1500);
  };
  $scope.bestButtonFunc = function(){
    $scope.bestButton = false;
    $scope.mostLikelyButton = true;
    $scope.worstButton = true;
    $scope.blendedButton = true;
  }
  $scope.mostLikelyButtonFunc = function(){
    $scope.bestButton = true;
    $scope.mostLikelyButton = false;
    $scope.worstButton = true;
    $scope.blendedButton = true;
  }
  $scope.worstButtonFunc = function(){
    $scope.bestButton = true;
    $scope.mostLikelyButton = true;
    $scope.worstButton = false;
    $scope.blendedButton = true;
  }
  $scope.blendedButtonFunc = function(){
    $scope.bestButton = true;
    $scope.mostLikelyButton = true;
    $scope.worstButton = true;
    $scope.blendedButton = false;
  }

  $scope.loginCheck = function(path, message){
    if(!$scope.user._id){
      $location.path("/login")
      return alert("You must login first", message)
    }else{
      $location.path(path)
    }
  };

  $scope.ultraFunc = function(){
    $scope.cogsFunc();
    $scope.sellPrice();
    $scope.totalFunc();
    $scope.unitsMonthFunc();
    $scope.resultsFirstYearFunc();
    $scope.roiFirstYearFunc();
  }
  $scope.cogsFunc = function(){
    $scope.product.cogs = (parseFloat($scope.product.material) + parseFloat($scope.product.production)).toFixed(2);
  };
  $scope.sellPrice = function(){
    $scope.product.price = ($scope.product.cogs * parseFloat($scope.product.markUp)).toFixed(2);
    $scope.product.profit = ($scope.product.price - $scope.product.cogs);
  };
  $scope.totalFunc = function(){
    $scope.product.investmentCost = (parseFloat($scope.product.research) + parseFloat($scope.product.development) + parseFloat($scope.product.marketing) + parseFloat($scope.product.other)).toFixed(2);
  },
  $scope.unitsMonthFunc = function(){
    $scope.product.unitsMonth = (parseFloat($scope.product.unitsYear) / 12).toFixed(2);
    $scope.product.unitsTotal = 0;
    if((parseFloat($scope.product.startingPercentage) / 100) < 1 && (parseFloat($scope.product.startingPercentage) / 100)  > 0){
      $scope.product.increment = ((1 - (parseFloat($scope.product.startingPercentage)/100)) / 12).toFixed(5);
    }else {
      $scope.product.increment = 0;
    }
    var x = 0;
    for(var prop in $scope.product.firstYear){
      $scope.product.firstYear[prop] = (parseFloat($scope.product.unitsMonth) * ((parseFloat($scope.product.startingPercentage) / 100) + (parseFloat($scope.product.increment) * x))).toFixed(2);
      $scope.product.unitsTotal = Math.round(parseFloat($scope.product.unitsTotal) + parseFloat($scope.product.firstYear[prop]));
      x++;
    };
    if(parseFloat($scope.product.startingPercentage) >= 100){
      $scope.product.unitsTotal = (parseFloat($scope.product.unitsYear) * (parseFloat($scope.product.startingPercentage)/100)).toFixed(2);
    }
  };
  $scope.resultsFirstYearFunc = function(){
    $scope.product.breakEvenQty = (parseFloat($scope.product.investmentCost)/parseFloat($scope.product.profit)).toFixed(2);
    $scope.product.twentyProfitQty = ((parseFloat($scope.product.investmentCost)*1.2)/parseFloat($scope.product.profit)).toFixed(2);
    $scope.product.goalProfitPerUnit = ((parseFloat($scope.product.investmentCost)*1.2)/parseFloat($scope.product.unitsTotal)).toFixed(2);
    $scope.product.goalPrice = (parseFloat($scope.product.goalProfitPerUnit) + parseFloat($scope.product.cogs)).toFixed(4);
    $scope.product.goalMarkUp = ((parseFloat($scope.product.goalProfitPerUnit) + parseFloat($scope.product.cogs))/parseFloat($scope.product.cogs)).toFixed(2);
    for (var prop in $scope.product.resultsFirstYear){
      var units = $scope.product.firstYear[prop];
      if(prop === '1'){
        $scope.product.resultsFirstYear[prop] = ((parseFloat($scope.product.profit) * parseFloat(units)) - $scope.product.investmentCost).toFixed(2);
      }else {
        var previous = parseInt(prop) - 1;
        $scope.product.resultsFirstYear[prop] = ((parseFloat($scope.product.profit)  * parseFloat(units)) + parseFloat($scope.product.resultsFirstYear[previous])).toFixed(2);
      }
    }
  };
  $scope.roiFirstYearFunc = function(){
    for(var prop in $scope.product.roiFirstYear){
      $scope.product.roiFirstYear[prop] = (((parseFloat($scope.product.resultsFirstYear[prop]) - parseFloat($scope.product.investmentCost))/parseFloat($scope.product.investmentCost)) + 1).toFixed(2) * 100;
    }
  };

  $scope.cleanStartFunc = function(){
    $scope.product = {
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
    };
    $scope.productMostLikely = {
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
      };
    $scope.productBlended = {
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
    };
  };

  $scope.product = {
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

//These functions pertain to your worst case scenario

$scope.ultraFuncWorst = function(){
  $scope.cogsFuncWorst();
  $scope.sellPriceWorst();
  $scope.totalFuncWorst();
  $scope.unitsMonthFuncWorst();
  $scope.resultsFirstYearFuncWorst();
  $scope.roiFirstYearFuncWorst();
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
  $scope.productWorst.unitsTotal = 0;
  if((parseFloat($scope.productWorst.startingPercentage) / 100) < 1 && (parseFloat($scope.productWorst.startingPercentage) / 100)  > 0){
    $scope.productWorst.increment = ((1 - (parseFloat($scope.productWorst.startingPercentage)/100)) / 12).toFixed(5);
  }else {
    $scope.productWorst.increment = 0;
  }
  var x = 0;
  for(var prop in $scope.productWorst.firstYear){
    $scope.productWorst.firstYear[prop] = (parseFloat($scope.productWorst.unitsMonth) * ((parseFloat($scope.productWorst.startingPercentage) / 100) + (parseFloat($scope.productWorst.increment) * x))).toFixed(2);
    $scope.productWorst.unitsTotal = Math.round(parseFloat($scope.productWorst.unitsTotal) + parseFloat($scope.productWorst.firstYear[prop]));
    x++;
  };
  if(parseFloat($scope.productWorst.startingPercentage) >= 100){
    $scope.productWorst.unitsTotal = (parseFloat($scope.productWorst.unitsYear) * (parseFloat($scope.productWorst.startingPercentage)/100)).toFixed(2);
  }
};
$scope.resultsFirstYearFuncWorst = function(){
  $scope.productWorst.breakEvenQty = (parseFloat($scope.productWorst.investmentCost)/parseFloat($scope.productWorst.profit)).toFixed(2);
  $scope.productWorst.twentyProfitQty = ((parseFloat($scope.productWorst.investmentCost)*1.2)/parseFloat($scope.productWorst.profit)).toFixed(2);
  $scope.productWorst.goalPrice = (parseFloat($scope.productWorst.goalProfitPerUnit) + parseFloat($scope.productWorst.cogs)).toFixed(4);
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

$scope.ultraFuncMostLikely = function(){
  $scope.cogsFuncMostLikely();
  $scope.sellPriceMostLikely();
  $scope.totalFuncMostLikely();
  $scope.unitsMonthFuncMostLikely();
  $scope.resultsFirstYearFuncMostLikely();
  $scope.roiFirstYearFuncMostLikely();
}
$scope.cogsFuncMostLikely = function(){
  $scope.productMostLikely.cogs = (parseFloat($scope.productMostLikely.material) + parseFloat($scope.productMostLikely.production)).toFixed(2);
};
$scope.sellPriceMostLikely = function(){
  $scope.productMostLikely.price = ($scope.productMostLikely.cogs * parseFloat($scope.productMostLikely.markUp)).toFixed(2);
  $scope.productMostLikely.profit = ($scope.productMostLikely.price - $scope.productMostLikely.cogs);
};
$scope.totalFuncMostLikely = function(){
  $scope.productMostLikely.investmentCost = (parseFloat($scope.productMostLikely.research) + parseFloat($scope.productMostLikely.development) + parseFloat($scope.productMostLikely.marketing) + parseFloat($scope.productMostLikely.other)).toFixed(2);
},
$scope.unitsMonthFuncMostLikely = function(){
  $scope.productMostLikely.unitsMonth = (parseFloat($scope.productMostLikely.unitsYear) / 12).toFixed(2);
  $scope.productMostLikely.unitsTotal = 0;
  if((parseFloat($scope.productMostLikely.startingPercentage) / 100) < 1 && (parseFloat($scope.productMostLikely.startingPercentage) / 100)  > 0){
    $scope.productMostLikely.increment = ((1 - (parseFloat($scope.productMostLikely.startingPercentage)/100)) / 12).toFixed(5);
  }else {
    $scope.productMostLikely.increment = 0;
  }
  var x = 0;
  for(var prop in $scope.productMostLikely.firstYear){
    $scope.productMostLikely.firstYear[prop] = (parseFloat($scope.productMostLikely.unitsMonth) * ((parseFloat($scope.productMostLikely.startingPercentage) / 100) + (parseFloat($scope.productMostLikely.increment) * x))).toFixed(2);
    $scope.productMostLikely.unitsTotal = Math.round(parseFloat($scope.productMostLikely.unitsTotal) + parseFloat($scope.productMostLikely.firstYear[prop]));
    x++;
  };
  if(parseFloat($scope.productMostLikely.startingPercentage) >= 100){
    $scope.productMostLikely.unitsTotal = (parseFloat($scope.productMostLikely.unitsYear) * (parseFloat($scope.productMostLikely.startingPercentage)/100)).toFixed(2);
  }
};
$scope.resultsFirstYearFuncMostLikely = function(){
  $scope.productMostLikely.breakEvenQty = (parseFloat($scope.productMostLikely.investmentCost)/parseFloat($scope.productMostLikely.profit)).toFixed(2);
  $scope.productMostLikely.twentyProfitQty = ((parseFloat($scope.productMostLikely.investmentCost)*1.2)/parseFloat($scope.productMostLikely.profit)).toFixed(2);
  $scope.productMostLikely.goalPrice = (parseFloat($scope.productMostLikely.goalProfitPerUnit) + parseFloat($scope.productMostLikely.cogs)).toFixed(4);
  $scope.productMostLikely.goalProfitPerUnit = ((parseFloat($scope.productMostLikely.investmentCost)*1.2)/parseFloat($scope.productMostLikely.unitsTotal)).toFixed(2);
  $scope.productMostLikely.goalMarkUp = ((parseFloat($scope.productMostLikely.goalProfitPerUnit) + parseFloat($scope.productMostLikely.cogs))/parseFloat($scope.productMostLikely.cogs)).toFixed(2);
  for (var prop in $scope.productMostLikely.resultsFirstYear){
    var units = $scope.productMostLikely.firstYear[prop];
    if(prop === '1'){
      $scope.productMostLikely.resultsFirstYear[prop] = ((parseFloat($scope.productMostLikely.profit) * parseFloat(units)) - $scope.productMostLikely.investmentCost).toFixed(2);
    }else {
      var previous = parseInt(prop) - 1;
      $scope.productMostLikely.resultsFirstYear[prop] = ((parseFloat($scope.productMostLikely.profit)  * parseFloat(units)) + parseFloat($scope.productMostLikely.resultsFirstYear[previous])).toFixed(2);
    }
  }
};
$scope.roiFirstYearFuncMostLikely = function(){
  for(var prop in $scope.productMostLikely.roiFirstYear){
    $scope.productMostLikely.roiFirstYear[prop] = (((parseFloat($scope.productMostLikely.resultsFirstYear[prop]) - parseFloat($scope.productMostLikely.investmentCost))/parseFloat($scope.productMostLikely.investmentCost)) + 1).toFixed(2) * 100;
  }
};

$scope.productMostLikely = {
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

$scope.mostLikelyFunc = function(){
  $scope.productMostLikely.name = $scope.product.name;
  $scope.productMostLikely.description = $scope.product.description;
  $scope.productMostLikely.opportunity = $scope.product.opportunity;
  $scope.productMostLikely.research = (parseFloat($scope.product.research)*1.5).toFixed(2);
  $scope.productMostLikely.development = (parseFloat($scope.product.development)*1.5).toFixed(2);
  $scope.productMostLikely.marketing = (parseFloat($scope.product.marketing)*1.5).toFixed(2);
  $scope.productMostLikely.other = (parseFloat($scope.product.other)*1.5).toFixed(2);
  $scope.productMostLikely.material = (parseFloat($scope.product.material)*1.5).toFixed(2);
  $scope.productMostLikely.production = (parseFloat($scope.product.production)*1.5).toFixed(2);
  $scope.productMostLikely.markUp = parseFloat($scope.product.markUp);
  $scope.productMostLikely.unitsYear = (parseFloat($scope.product.unitsYear)*.75).toFixed(2);
  $scope.ultraFuncMostLikely();
}

$scope.worstFunc = function(){
  $scope.productWorst.name = $scope.product.name;
  $scope.productWorst.description = $scope.product.description;
  $scope.productWorst.opportunity = $scope.product.opportunity;
  $scope.productWorst.research = (parseFloat($scope.product.research)*2).toFixed(2);
  $scope.productWorst.development = (parseFloat($scope.product.development)*2).toFixed(2);
  $scope.productWorst.marketing = (parseFloat($scope.product.marketing)*2).toFixed(2);
  $scope.productWorst.other = (parseFloat($scope.product.other)*2).toFixed(2);
  $scope.productWorst.material = (parseFloat($scope.product.material)*2).toFixed(2);
  $scope.productWorst.production = (parseFloat($scope.product.production)*2).toFixed(2);
  $scope.productWorst.markUp = parseFloat($scope.product.markUp);
  $scope.productWorst.unitsYear = (parseFloat($scope.product.unitsYear)*.5).toFixed(2);
  $scope.ultraFuncWorst();
}

$scope.ultraFuncBlended = function(){
  $scope.cogsFuncBlended();
  $scope.sellPriceBlended();
  $scope.totalFuncBlended();
  $scope.unitsMonthFuncBlended();
  $scope.resultsFirstYearFuncBlended();
  $scope.roiFirstYearFuncBlended();
}
$scope.cogsFuncBlended = function(){
  $scope.productBlended.cogs = (parseFloat($scope.productBlended.material) + parseFloat($scope.productBlended.production)).toFixed(2);
};
$scope.sellPriceBlended = function(){
  $scope.productBlended.price = ($scope.productBlended.cogs * parseFloat($scope.productBlended.markUp)).toFixed(2);
  $scope.productBlended.profit = ($scope.productBlended.price - $scope.productBlended.cogs);
};
$scope.totalFuncBlended = function(){
  $scope.productBlended.investmentCost = (parseFloat($scope.productBlended.research) + parseFloat($scope.productBlended.development) + parseFloat($scope.productBlended.marketing) + parseFloat($scope.productBlended.other)).toFixed(2);
},
$scope.unitsMonthFuncBlended = function(){
  $scope.productBlended.unitsMonth = (parseFloat($scope.productBlended.unitsYear) / 12).toFixed(2);
  $scope.productBlended.unitsTotal = 0;
  if((parseFloat($scope.productBlended.startingPercentage) / 100) < 1 && (parseFloat($scope.productBlended.startingPercentage) / 100)  > 0){
    $scope.productBlended.increment = ((1 - (parseFloat($scope.productBlended.startingPercentage)/100)) / 12).toFixed(5);
  }else {
    $scope.productBlended.increment = 0;
  }
  var x = 0;
  for(var prop in $scope.productBlended.firstYear){
    $scope.productBlended.firstYear[prop] = (parseFloat($scope.productBlended.unitsMonth) * ((parseFloat($scope.productBlended.startingPercentage) / 100) + (parseFloat($scope.productBlended.increment) * x))).toFixed(2);
    $scope.productBlended.unitsTotal = Math.round(parseFloat($scope.productBlended.unitsTotal) + parseFloat($scope.productBlended.firstYear[prop]));
    x++;
  };
  if(parseFloat($scope.productBlended.startingPercentage) >= 100){
    $scope.productBlended.unitsTotal = (parseFloat($scope.productBlended.unitsYear) * (parseFloat($scope.productBlended.startingPercentage)/100)).toFixed(2);
  }
};
$scope.resultsFirstYearFuncBlended = function(){
  $scope.productBlended.breakEvenQty = (parseFloat($scope.productBlended.investmentCost)/parseFloat($scope.productBlended.profit)).toFixed(2);
  $scope.productBlended.twentyProfitQty = ((parseFloat($scope.productBlended.investmentCost)*1.2)/parseFloat($scope.productBlended.profit)).toFixed(2);
  $scope.productBlended.goalPrice = (parseFloat($scope.productBlended.goalProfitPerUnit) + parseFloat($scope.productBlended.cogs)).toFixed(4);
  $scope.productBlended.goalProfitPerUnit = ((parseFloat($scope.productBlended.investmentCost)*1.2)/parseFloat($scope.productBlended.unitsTotal)).toFixed(2);
  $scope.productBlended.goalMarkUp = ((parseFloat($scope.productBlended.goalProfitPerUnit) + parseFloat($scope.productBlended.cogs))/parseFloat($scope.productBlended.cogs)).toFixed(2);
  for (var prop in $scope.productBlended.resultsFirstYear){
    var units = $scope.productBlended.firstYear[prop];
    if(prop === '1'){
      $scope.productBlended.resultsFirstYear[prop] = ((parseFloat($scope.productBlended.profit) * parseFloat(units)) - $scope.productBlended.investmentCost).toFixed(2);
    }else {
      var previous = parseInt(prop) - 1;
      $scope.productBlended.resultsFirstYear[prop] = ((parseFloat($scope.productBlended.profit)  * parseFloat(units)) + parseFloat($scope.productBlended.resultsFirstYear[previous])).toFixed(2);
    }
  }
};
$scope.roiFirstYearFuncBlended = function(){
  for(var prop in $scope.productBlended.roiFirstYear){
    $scope.productBlended.roiFirstYear[prop] = (((parseFloat($scope.productBlended.resultsFirstYear[prop]) - parseFloat($scope.productBlended.investmentCost))/parseFloat($scope.productBlended.investmentCost)) + 1).toFixed(2) * 100;
  }
};

$scope.productBlended = {
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

$scope.blendedFunc = function(){
  $scope.productBlended.name = $scope.product.name;
  $scope.productBlended.description = $scope.product.description;
  $scope.productBlended.opportunity = $scope.product.opportunity;
  $scope.productBlended.research = ((parseFloat($scope.product.research) + parseFloat($scope.productMostLikely.research) + parseFloat($scope.productWorst.research))/3).toFixed(2);
  $scope.productBlended.development = ((parseFloat($scope.product.development) + parseFloat($scope.productMostLikely.development) + parseFloat($scope.productWorst.development))/3).toFixed(2);
  $scope.productBlended.marketing = ((parseFloat($scope.product.marketing) + parseFloat($scope.productMostLikely.marketing) + parseFloat($scope.productWorst.marketing))/3).toFixed(2);
  $scope.productBlended.other = ((parseFloat($scope.product.other) + parseFloat($scope.productMostLikely.other) + parseFloat($scope.productWorst.other))/3).toFixed(2);
  $scope.productBlended.material = ((parseFloat($scope.product.material) + parseFloat($scope.productMostLikely.material) + parseFloat($scope.productWorst.material))/3).toFixed(2);
  $scope.productBlended.production = ((parseFloat($scope.product.production) + parseFloat($scope.productMostLikely.production) + parseFloat($scope.productWorst.production))/3).toFixed(2);
  $scope.productBlended.markUp = ((parseFloat($scope.product.markUp) + parseFloat($scope.productMostLikely.markUp) + parseFloat($scope.productWorst.markUp))/3).toFixed(2);
  $scope.productBlended.unitsYear = ((parseFloat($scope.product.unitsYear) + parseFloat($scope.productMostLikely.unitsYear) + parseFloat($scope.productWorst.unitsYear))/3).toFixed(2);
  $scope.ultraFuncBlended();
}
//These are your functions for getting info from the Products Collection

  $scope.allProducts = {};
  $scope.allProductsMostLikely = {};
  $scope.allProductsWorst = {};
  $scope.allProductsBlended = {};
  $scope.getData = function(id){
    mainService.getData(id).then(function(data){
      $scope.allProducts = data;
    });
    mainService.getDataMostLikely(id).then(function(data){
      $scope.allProductsMostLikely = data;
    });
    mainService.getDataWorst(id).then(function(data){
      $scope.allProductsWorst = data;
    });
    mainService.getDataBlended(id).then(function(data){
      $scope.allProductsBlended = data;
    });
  };

  $scope.findIndividual = function(id){
    for(var i = 0; i < $scope.allProducts.length; i++){
      if(id == $scope.allProducts[i]._id){
        $scope.product = $scope.allProducts[i]
      }
    };
    for(var i = 0; i < $scope.allProductsMostLikely.length; i++){
      if(id == $scope.allProductsMostLikely[i].bestId){
        $scope.productMostLikely = $scope.allProductsMostLikely[i]
      }
    };
    for(var i = 0; i < $scope.allProductsWorst.length; i++){
      if(id == $scope.allProductsWorst[i].bestId){
        $scope.productWorst = $scope.allProductsWorst[i]
      }
    };
    for(var i = 0; i < $scope.allProductsBlended.length; i++){
      if(id == $scope.allProductsBlended[i].bestId){
        $scope.productBlended = $scope.allProductsBlended[i]
      }
    };
  };

  $scope.destroy = function(id){
    var check = confirm("Are you certain you want to delete this Product?")
    if(check){
      mainService.destroy(id).then(function(data){});
      mainService.destroyMostLikely($scope.productMostLikely._id).then(function(data){});
      mainService.destroyWorst($scope.productWorst._id).then(function(data){});
      mainService.destroyBlended($scope.productBlended._id).then(function(data){});
      $scope.getData($scope.user._id)
      alert("Product Deleted")
    }else {
      alert("Your Product is Safe")
    }
  };

  $scope.create = function(body){
    if(!$scope.user._id){
      $location.path("/login")
      return alert("You must login before you can save your files")
    }
    body.userId = $scope.user._id;
    $scope.product.userId = $scope.user._id;
    $scope.productMostLikely.userId = $scope.user._id;
    $scope.productWorst.userId = $scope.user._id;
    $scope.productBlended.userId = $scope.user._id;
    $scope.productMostLikely.name = body.name;
    $scope.productWorst.name = body.name;
    $scope.productBlended.name = body.name;
    $scope.productMostLikely.description = body.description;
    $scope.productWorst.description = body.description;
    $scope.productBlended.description = body.description;
    $scope.productMostLikely.opportunity = body.opportunity;
    $scope.productWorst.opportunity = body.opportunity;
    $scope.productBlended.opportunity = body.opportunity;
    var check = false;
    for (var i = 0; i < $scope.allProducts.length; i++){
      if($scope.allProducts[i]._id === body._id) {
        check = true;
      }
    };
    if(check){
      $scope.update(body._id, body);
      $scope.updateMostLikely($scope.productMostLikely._id, $scope.productMostLikely);
      $scope.updateWorst($scope.productWorst._id, $scope.productWorst);
      $scope.updateBlended($scope.productBlended._id, $scope.productBlended);

    }else{
      mainService.create(body).then(function(data){
        $scope.product._id = data._id;
        $scope.productMostLikely.bestId = data._id;
        $scope.productWorst.bestId = data._id;
        $scope.productBlended.bestId = data._id;
        mainService.createMostLikely($scope.productMostLikely).then(function(data){
          $scope.productMostLikely._id = data._id;
        });
        mainService.createWorst($scope.productWorst).then(function(data){
          $scope.productWorst._id = data._id
        });
        mainService.createBlended($scope.productBlended).then(function(data){
          $scope.productBlended._id = data._id
        });
        $scope.getData($scope.user._id);
      });
    }
    $scope.getData($scope.user._id);
    alert("Product Saved")
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
  $scope.updateMostLikely = function(id, body){
    if(!$scope.user._id){
      $location.path("/login")
      return alert("You must login before you can save your files")
    }
    mainService.updateMostLikely(id, body).then(function(data){
    });
    $scope.getData($scope.user._id);
  };
  $scope.updateWorst = function(id, body){
    if(!$scope.user._id){
      $location.path("/login")
      return alert("You must login before you can save your files")
    }
    mainService.updateWorst(id, body).then(function(data){
    });
    $scope.getData($scope.user._id);
  };
  $scope.updateBlended = function(id, body){
    if(!$scope.user._id){
      $location.path("/login")
      return alert("You must login before you can save your files")
    }
    mainService.updateBlended(id, body).then(function(data){
    });
    $scope.getData($scope.user._id);
  };

  $scope.productIdent = function(id){
    for(var i = 0; i < $scope.allProducts.length; i++){
      if($scope.allProducts[i]._id === id){
        $scope.product = $scope.allProducts[i];
      }
    }
  };
  $scope.productIdent();

//These are your functions for getting info from the Users Collection
$scope.blankUser = {
  login: "",
  password:"",
  confirmedPassword: "",
}
$scope.user = {
  firstName: "",
  lastName: "",
  email: "",
  login: "",
  password:"",
  confirmedPassword: "",
  createDate: "",
};
$scope.userData = [];
$scope.confirmedPasswordResult = "Does not match";
$scope.confirmPassword = function(){
  if($scope.user.confirmedPassword === $scope.user.password){
    $scope.confirmedPasswordResult = "Passwords Match"
  }
}

$scope.findUser = function(id){
  mainService.findUser(id).then(function(data){
    var check = false;
    var index = 0;
    $scope.userData = data;
    for(var i = 0; i < $scope.userData.length; i++){
      if($scope.user.password === $scope.userData[i].password){
        check = true;
        index = i;
      } else {
        check = false;
        $location.path('login')
      }
    };
    if(check){
      $scope.user = $scope.userData[index];
      $scope.getData($scope.user._id);
      $location.path('/startProject')
    }else{
      alert("Incorrect Login")
    }

  });
};

$scope.destroyUser = function(id){
  var check = confirm("Are you certain you want to delete this User?")
  if(check){
    for(var i = 0; i < $scope.allProducts.length; i++){
      mainService.destroy($scope.allProducts[i]._id).then(function(data){});
    };
    for(var i = 0; i < $scope.allProductsMostLikely.length; i++){
      mainService.destroyMostLikely($scope.allProductsMostLikely[i]._id).then(function(data){});
    };
    for(var i = 0; i < $scope.allProductsWorst.length; i++){
      mainService.destroyWorst($scope.allProductsWorst[i]._id).then(function(data){});
    };
    for(var i = 0; i < $scope.allProductsBlended.length; i++){
      mainService.destroyBlended($scope.allProductsBlended[i]._id).then(function(data){});
    };
    mainService.destroyUser(id).then(function(data){});
    $scope.logOut()
    alert("User Deleted")
  }else {
    alert("Your User is Safe")
  };
};

$scope.createUser = function(body){
  if($scope.user.password !== $scope.user.confirmedPassword){
    return alert("Passwords don't match")
  }else {
    $scope.user.createDate = new Date();
    mainService.createUser(body).then(function(data){
      $scope.findUser(body.login);
    alert("Congratulations on Creating your account!")
    });

  }

};

$scope.updateUser = function(id, body){
  if($scope.user.password !== $scope.user.confirmedPassword){
    alert("Passwords don't match")
  }else if($scope.user.password === $scope.user.confirmedPassword){
    mainService.updateUser(id, body).then(function(data){});
    alert("Your profile has been updated successfully");
  }
};

$scope.logOut = function(){
  $scope.user = {};
  $scope.allProducts = {};
  $scope.allProductsMostLikely = {};
  $scope.allProductsWorst = {};
  $scope.allProductsBlended
  $scope.cleanStartFunc();
  $location.path('/login')
};

})
