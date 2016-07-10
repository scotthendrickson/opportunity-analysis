angular.module('routerApp', ['ngAnimate','ui.router']).config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
  .state('home',{
    url: '/',
    templateUrl: './template/home.html'
  })
  .state('login',{
    url: '/login',
    templateUrl: './template/user/login.html'
  })
  .state('signUp',{
    url: '/signUp',
    templateUrl: './template/user/signUp.html'
  })
  .state('userProfile',{
    url: '/userProfile',
    templateUrl: './template/user/userProfile.html'
  })
  .state('about',{
    url: '/about',
    templateUrl: './template/about.html'
  })
  .state('analysis',{
    url: '/analysis',
    templateUrl: './template/process/analysisStart.html'
  })
  .state('startProject',{
    url: '/startProject',
    templateUrl: './template/process/startProject.html'
  })
  .state('initialCost',{
    url: '/analysis/initialCost',
    templateUrl: './template/process/initialCosts.html'
  })
  .state('results',{
    url: '/analysis/results',
    templateUrl: './template/process/results.html'
  })

  .state('savedProjects',{
    url: '/savedProjects',
    templateUrl: './template/savedProjects.html'
  })
  .state('productbyid',{
    url:'/summary/:productId',
    templateUrl: "./template/process/productSummary.html",
  })
  //Best case
  .state('bestCaseAnalysis',{
    url: '/analysis/bestCase',
    templateUrl: './template/processBest/analysisStart.html'
  })
  .state('bestCaseInitialCost',{
    url: '/analysis/bestCase/initialCost',
    templateUrl: './template/processBest/initialCosts.html'
  })
  .state('bestCaseResults',{
    url: '/analysis/bestCase/results',
    templateUrl: './template/processBest/results.html'
  })
  //MostLikely case
  .state('mostLikelyCaseInitialCost',{
    url: '/analysis/mostLikelyCase/initialCost',
    templateUrl: './template/processMostLikely/initialCosts.html',
  })
  .state('mostLikelyCaseResults',{
    url: '/analysis/mostLikelyCase/results',
    templateUrl: './template/processMostLikely/results.html',
  })
  //Worst case
  .state('worstCaseInitialCost',{
    url: '/analysis/worstCase/initialCost',
    templateUrl: './template/processWorst/initialCosts.html',
  })
  .state('worstCaseResults',{
    url: '/analysis/worstCase/results',
    templateUrl: './template/processWorst/results.html',
  })
  //Blended case
  .state('blendedCaseResults',{
    url: '/analysis/blendedCase/results',
    templateUrl: './template/processBlended/results.html',
  })
  .state('loading',{
    url: '/loading',
    templateUrl: './template/tutorial/tutorial.html'
  })



})
