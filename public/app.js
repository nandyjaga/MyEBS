var appEBS = angular.module('EBS', []);
appEBS.
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
	  when('/login', {templateUrl: 'partial/Login.html', controller: LoginCtrl}).
      otherwise({redirectTo: '/login'});
}]);