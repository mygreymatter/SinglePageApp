(function () {
    var app = angular.module('Scotch', ['ui.router', 'ngAnimate']);
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

    /*app.config(function ($routeProvider, $locationProvider) {
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
    });*/

    app.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");

        $stateProvider.state('home', {
            url: '/',
            templateUrl: 'pages/home.html'
        }).state('home.list', {
            url: 'list',
            templateUrl: 'pages/home-list.html',
            controller: function ($scope) {
                $scope.dogs = ['Berenese', 'Husky', 'Goldendoodle'];
            }
        }).state('home.paragraph', {
            url: 'paragraph',
            template: 'I could sure use a drink right now.'
        }).state('about', {
            url: '/about',
            views: {
                '': {
                    templateUrl: 'pages/about.html',
                    controller: 'AboutController'
                },
                'columnOne@about': {
                    template: 'I am column one.'
                },
                'columnTwo@about': {
                    templateUrl: 'pages/table-data.html',
                    controller: 'TwoController'
                }
            }
        }).state('contact', {
            url: '/contact',
            views: {
                '': {
                    templateUrl: 'pages/contact.html',
                    controller: 'ContactController'
                }
            }
        });
    });

    app.controller('TwoController', function ($scope) {
        $scope.message = 'test';

        $scope.scotches = [
            {
                name: 'Macallan 12',
                price: 50
        },
            {
                name: 'Chivas Regal Royal Salute',
                price: 10000
        },
            {
                name: 'Glenfiddich 1937',
                price: 20000
        }
    ];
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
