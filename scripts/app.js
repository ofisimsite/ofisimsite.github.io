'use strict';

angular.module('OfisimSite',
    [
        'ngRoute',
        'pascalprecht.translate',
        'angular-carousel',
        'validation.match',
        'mgcrea.ngStrap'
    ])

    .config(['$httpProvider', '$locationProvider', '$translateProvider',
        function ($httpProvider, $locationProvider, $translateProvider) {
            $httpProvider.interceptors.push(function ($window) {
                return {
                    request: function (config) {
                        return config;
                    },
                    response: function (response) {
                        return response;
                    },
                    responseError: function (rejection) {
                        if (rejection.status === 401) {
                            $window.location.href = 'https://staging.ofisim.com/login.html';
                        }

                        console.log(rejection.statusText);//TODO:Error handiling

                        return rejection;
                    }
                }
            });

            //$locationProvider.html5Mode(true);

            $translateProvider.useStaticFilesLoader({
                prefix: 'views/locales/',
                suffix: '.json'
            }).useLocalStorage().preferredLanguage('tr');
        }])

    .config(['$routeProvider',
        function ($routeProvider) {

            $routeProvider.
                when('/home', {
                    templateUrl: 'views/home/home.html',
                    controller: 'HomeController'
                }).
                when('/features', {
                    templateUrl: 'views/features/features.html',
                    controller: 'FeatureController'
                }).
                when('/plans', {
                    templateUrl: 'views/plans/plans.html',
                    controller: 'PlanController'
                }).
                when('/register/:id', {
                    templateUrl: 'views/register/register.html',
                    controller: 'RegisterController'
                }).
                when('/resend', {
                    templateUrl: 'views/register/resend.html',
                    controller: 'RegisterController'
                }).
                otherwise({
                    redirectTo: '/home'
                });
        }]);