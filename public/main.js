var mainApp = angular.module("mainApp", ['ngRoute','subApp']);
         mainApp.config(['$routeProvider', function($routeProvider) {
            $routeProvider
            .when('/about', { templateUrl: 'about.html',controller: 'AddStudentController'})
            .when('/portfolio', {templateUrl: 'portfolio.html',controller: 'ViewStudentsController'})
            .otherwise({redirectTo: '/about'});
         }]);
         
      
         
