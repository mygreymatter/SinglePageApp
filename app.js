(function () {
    var app = angular.module('Scotch', ['ngRoute', 'ngAnimate']);
    app.controller('MainController', function ($scope) {
        $scope.message = "Everyone came and saw me how good I look.";
    });

    app.controller('AboutController', function ($scope) {
        $scope.message = 'Look! I am an about page.';
    });

    app.controller('ContactController', function ($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
    });

    app.config(function ($routeProvider, $locationProvider) {
        $routeProvider.when('/', {
            templateUrl: 'pages/home.html',
            controller: 'MainController'
        }).when('/about', {
            templateUrl: 'pages/about.html',
            controller: 'AboutController'
        }).when('/contact', {
            templateUrl: 'pages/contact.html',
            controller: 'ContactController'
        });

        // use the HTML5 History API
        $locationProvider.html5Mode(true);
    });
})();
