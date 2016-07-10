'use strict';

angular.module('routerApp', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider.state('home', {
    url: '/',
    templateUrl: './template/home.html'
  }).state('coder', {
    url: '/coder',
    templateUrl: './template/coder.html'
  }).state('about', {
    url: '/about',
    templateUrl: './template/about.html'
  }).state('explanation', {
    url: '/explanation',
    templateUrl: './template/explanation.html'
  });
});