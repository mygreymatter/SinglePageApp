(function () {
    var app = angular.module('Scotch', ['ngRoute', 'ngAnimate']);
    app.controller('MainController', function ($scope) {
        $scope.message = "Everyone came and saw me how good I look.";
        $scope.pageClass = "home";
    });

    app.controller('AboutController', function ($scope) {
        $scope.message = 'Look! I am an about page.';
        $scope.pageClass = "about";
    });

    app.controller('ContactController', function ($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
        $scope.pageClass = "contact";
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

    app.filter('titleCase', function () {
        return function (input) {
            console.log("Input: " + input);
            var words = input.split(' ');
            for (var i = 0; i < words.length; i++) {
                words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
            }
            return words.join(' ');
        };
    });
})();
