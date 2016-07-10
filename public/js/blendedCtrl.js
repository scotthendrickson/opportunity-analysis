angular.module('routerApp').controller('blendedCtrl',function($scope, mainService,$location){
  $scope.name = "Scott Hendrickson";
  $scope.testText = "";
  $scope.userInput = "";
  $scope.format = 'M/d/yy h:mm:ss a';


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
    if(isNaN($scope.product.unitsTotal)){
      $scope.product.unitsTotal = 0;
    };
    $scope.product.unitsTotal = 0;
    var x = 0;
    for(var prop in $scope.product.firstYear){
      $scope.product.increment = ((1 - (parseFloat($scope.product.startingPercentage)/100)) / 12).toFixed(5);
      $scope.product.firstYear[prop] = (parseFloat($scope.product.unitsMonth) * ((parseFloat($scope.product.startingPercentage) / 100) + (parseFloat($scope.product.increment) * x))).toFixed(2);
      $scope.product.unitsTotal = (parseFloat($scope.product.unitsTotal) + parseFloat($scope.product.firstYear[prop])).toFixed(2);
      x++;
    };
  };
  $scope.resultsFirstYearFunc = function(){
    $scope.product.breakEvenQty = (parseFloat($scope.product.investmentCost)/parseFloat($scope.product.profit)).toFixed(2);
    $scope.product.twentyProfitQty = ((parseFloat($scope.product.investmentCost)*1.2)/parseFloat($scope.product.profit)).toFixed(2);
    $scope.product.goalPrice = (parseFloat($scope.product.goalProfitPerUnit) + parseFloat($scope.product.cogs)).toFixed(2);
    $scope.product.goalProfitPerUnit = ((parseFloat($scope.product.investmentCost)*1.2)/parseFloat($scope.product.unitsTotal)).toFixed(2);
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
    $scope.productBlended = {
      userId:"",
      name: "Name",
      description: "Description",
      opportunity: "Opportunity",
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

  $scope.product = {
    userId:"",
    name: "Name",
    description: "Description",
    opportunity: "Opportunity",
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
      _12: 0,
    },
    startingPercentage: 25,
    increment: 0,
    breakEvenQty: 0,
    twentyProfitQty: 0,
    goalPrice: 0,
    goalProfitPerUnit: 0,
    goalMarkUp: 0,
}


//These are your functions for getting info from the Products Collection
  $scope.allProducts = {};
  $scope.getData = function(id){
    mainService.getData(id).then(function(data){
      $scope.allProducts = data;
    });
  };


  $scope.findIndividual = function(id){
    // mainService.findIndividual(id).then(function(data){
    //   $scope.product = data;
    // });
    for(var i = 0; i < $scope.allProducts.length; i++){
      if(id == $scope.allProducts[i]._id){
        $scope.product = $scope.allProducts[i]
      }
    }
  };

  $scope.destroy = function(id){
    var check = confirm("Are you certain you want to delete this Product?")
    if(check){
      mainService.destroy(id).then(function(data){});
      $scope.getData($scope.user._id);
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
    var check = false;
    for (var i = 0; i < $scope.allProducts.length; i++){
      if($scope.allProducts[i]._id === body._id) {
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
        $location.path('http://localhost:3000/#/')
      } else {
        check = false;
        $location.path('login')
      }
    };
    if(check){
      $scope.user = $scope.userData[index];
      $scope.getData($scope.user._id);
    }else{
      alert("Incorrect Login")
    }

  });
};

$scope.destroyUser = function(id){
  var check = confirm("Are you certain you want to delete this User?")
  if(check){
    mainService.destroyUser(id).then(function(data){});
    $scope.getData($scope.user._id);
    $scope.user = {
      firstName: "",
      lastName: "",
      email: "",
      login: "",
      password:"",
      confirmedPassword: "",
    };
    alert("User Deleted")
  }else {
    alert("Your User is Safe")
  };
};

$scope.createUser = function(body){
  if($scope.user.password !== $scope.user.confirmedPassword){
    return alert("Passwords don't match")
  }else {
    mainService.createUser(body).then(function(data){});
    $scope.findUser(body.login);
    alert("Congratulations on Creating your account!")
    $location.path('userProfile')
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
};

})
